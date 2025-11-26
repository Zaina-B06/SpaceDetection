# predict.py
import os
import argparse
from pathlib import Path
from ultralytics import YOLO
import cv2

def predict_and_save(model, image_path, out_img_path, out_txt_path, conf_thresh=0.25):
    results = model.predict(str(image_path), conf=conf_thresh, imgsz=896)
    r = results[0]

    # annotated image
    img = r.plot()  # returns BGR image (OpenCV)
    cv2.imwrite(str(out_img_path), img)

    # write labels: class_id conf x_center y_center width height (normalized)
    with open(out_txt_path, "w") as f:
        for box in r.boxes:
            cls = int(box.cls[0])
            conf = float(box.conf[0])
            x, y, w, h = box.xywhn[0].tolist()
            f.write(f"{cls} {conf:.4f} {x:.6f} {y:.6f} {w:.6f} {h:.6f}\n")

def main():
    p = argparse.ArgumentParser()
    p.add_argument("--model", default="C:/Users/zaina/Downloads/Hackathon2_scripts/Hackathon2_scripts/runs/detect/train/weights/best.pt")
    p.add_argument("--images", default=None, help="Folder with test images (overrides yaml test)")
    p.add_argument("--conf", type=float, default=0.25)
    args = p.parse_args()

    model = YOLO(args.model)
    this_dir = Path(__file__).parent

    # fallback to yolo_params.yaml test if images not given
    if args.images is None:
        import yaml
        with open(this_dir / "yolo_params.yaml") as fh:
            data = yaml.safe_load(fh)
            images_dir = Path(data.get("test", "")) / "images"
    else:
        images_dir = Path(args.images)

    if not images_dir.exists():
        raise FileNotFoundError(f"Images folder not found: {images_dir}")

    out_dir = this_dir / "predictions"
    imgs_out = out_dir / "images"
    labels_out = out_dir / "labels"
    imgs_out.mkdir(parents=True, exist_ok=True)
    labels_out.mkdir(parents=True, exist_ok=True)

    for img in sorted(images_dir.glob("*")):
        if img.suffix.lower() not in [".jpg", ".jpeg", ".png"]:
            continue
        out_img = imgs_out / img.name
        out_txt = labels_out / img.with_suffix(".txt").name
        predict_and_save(model, img, out_img, out_txt, conf_thresh=args.conf)

    print("Predictions saved to:", imgs_out, labels_out)

if __name__ == "__main__":
    main()
