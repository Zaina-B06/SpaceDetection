# validate.py
import argparse
import os
import numpy as np
from ultralytics import YOLO


def parse_args():
    p = argparse.ArgumentParser(description="Validate YOLO models and (optionally) compare them.")
    this_dir = os.path.dirname(__file__)

    p.add_argument(
        "--data",
        type=str,
        default=os.path.join(this_dir, "yolo_params.yaml"),
        help="Path to dataset yaml",
    )
    p.add_argument(
        "--initial",
        type=str,
        default=None,
        help="Path to INITIAL model (before fine-tuning). Optional.",
    )
    p.add_argument(
        "--final",
        type=str,
        default=os.path.join(
            this_dir, "runs", "detect", "train", "weights", "best.pt"
        ),
        help="Path to FINAL model (after training).",
    )
    p.add_argument("--imgsz", type=int, default=640)
    p.add_argument("--device", type=str, default="cpu")
    p.add_argument("--workers", type=int, default=0)
    p.add_argument("--split", type=str, default="val", help="val or test")
    return p.parse_args()


def run_eval(model_path: str, data: str, imgsz: int, device: str, workers: int, split: str):
    print(f"\n🔍 Evaluating model: {model_path}")
    model = YOLO(model_path)

    metrics = model.val(
        data=data,
        split=split,
        imgsz=imgsz,
        device=device,
        workers=workers,
        verbose=False,
    )

    # Overall metrics
    map50 = float(metrics.box.map50)
    map5095 = float(metrics.box.map)
    precision = float(np.mean(metrics.box.p))
    recall = float(np.mean(metrics.box.r))

    # Per-class mAP50
    names = metrics.names  # dict or list
    results_dict = getattr(metrics, "results_dict", {})
    per_class_map = {}

    if isinstance(names, dict):
        name_iter = names.items()
    else:
        name_iter = enumerate(names)

    for _, cls_name in name_iter:
        key = f"{cls_name}/mAP50"
        if key in results_dict:
            per_class_map[cls_name] = float(results_dict[key])

    return {
        "model_path": model_path,
        "map50": map50,
        "map5095": map5095,
        "precision": precision,
        "recall": recall,
        "per_class": per_class_map,
    }


def print_single_report(title: str, stats: dict):
    print("\n" + "📊 " + title)
    print("-" * 40)
    print(f"mAP50    : {stats['map50']:.4f}")
    print(f"mAP50-95 : {stats['map5095']:.4f}")
    print(f"Precision: {stats['precision']:.4f}")
    print(f"Recall   : {stats['recall']:.4f}")

    if stats["per_class"]:
        print("\nPER-CLASS mAP50:")
        print("-" * 40)
        for cls, v in stats["per_class"].items():
            print(f"{cls:<20} {v:.4f}")


def print_comparison(initial: dict, final: dict):
    print("\n📈 PERFORMANCE COMPARISON:")
    print("-" * 60)
    print(f"{'Metric':<12} {'Initial':>10} {'Final':>10} {'Change':>10}")
    print("-" * 60)

    def row(name, k):
        dv = final[k] - initial[k]
        print(f"{name:<12} {initial[k]:>10.4f} {final[k]:>10.4f} {dv:>+10.4f}")

    row("Precision", "precision")
    row("Recall", "recall")
    row("mAP50", "map50")
    row("mAP50-95", "map5095")

    # Per-class comparison (only where class exists in both)
    common_classes = sorted(
        set(initial["per_class"].keys()) & set(final["per_class"].keys())
    )
    if common_classes:
        print("\nPER-CLASS mAP50 COMPARISON:")
        print("-" * 60)
        print(f"{'Class':<20} {'Initial':>10} {'Final':>10} {'Change':>10}")
        print("-" * 60)
        for cls in common_classes:
            i = initial["per_class"][cls]
            f = final["per_class"][cls]
            dv = f - i
            print(f"{cls:<20} {i:>10.4f} {f:>10.4f} {dv:>+10.4f}")


if __name__ == "__main__":
    args = parse_args()

    print("🔧 CONFIG")
    print(f" data    : {args.data}")
    print(f" split   : {args.split}")
    print(f" imgsz   : {args.imgsz}")
    print(f" device  : {args.device}")
    print(f" workers : {args.workers}")

    # Final model (required)
    final_stats = run_eval(
        args.final, args.data, args.imgsz, args.device, args.workers, args.split
    )
    print_single_report("FINAL MODEL RESULTS", final_stats)

    # Optional initial model for comparison
    if args.initial:
        initial_stats = run_eval(
            args.initial, args.data, args.imgsz, args.device, args.workers, args.split
        )
        print_single_report("INITIAL MODEL RESULTS", initial_stats)
        print_comparison(initial_stats, final_stats)
    else:
        print("\n(ℹ️ No --initial model given, skipping comparison section.)")
