import argparse
import os
from ultralytics import YOLO

EPOCHS = 30
MOSAIC = 0.4
OPTIMIZER = "AdamW"
MOMENTUM = 0.9
LR0 = 1e-4
LRF = 1e-4
WEIGHT_DECAY = 5e-4

def parse_args():
    p = argparse.ArgumentParser()
    p.add_argument("--epochs", type=int, default=EPOCHS)
    p.add_argument("--mosaic", type=float, default=MOSAIC)
    p.add_argument("--optimizer", type=str, default=OPTIMIZER)
    p.add_argument("--momentum", type=float, default=MOMENTUM)
    p.add_argument("--lr0", type=float, default=LR0)
    p.add_argument("--lrf", type=float, default=LRF)
    p.add_argument("--device", default="cpu")
    p.add_argument("--imgsz", type=int, default=896)
    p.add_argument("--batch", type=int, default=4)
    p.add_argument("--workers", type=int, default=0)
    return p.parse_args()

if __name__ == "__main__":
    args = parse_args()
    this_dir = os.path.dirname(__file__)
    os.chdir(this_dir)

    resume_path = r"C:\Users\zaina\Downloads\Hackathon2_scripts\Hackathon2_scripts\runs\detect\train\weights\last.pt"

    if os.path.exists(resume_path):
        print("🔄 Resuming from:", resume_path)
        model = YOLO(resume_path)
    else:
        print("✨ No checkpoint found, starting fresh")
        model = YOLO("yolov8s.pt")

    results = model.train(
        data=os.path.join(this_dir, "yolo_params.yaml"),
        epochs=args.epochs,
        imgsz=args.imgsz,
        batch=args.batch,
        device=args.device,
        workers=args.workers,
        optimizer=args.optimizer,
        lr0=args.lr0,
        lrf=args.lrf,
        momentum=args.momentum,
        weight_decay=WEIGHT_DECAY,
        mosaic=args.mosaic,
        project=r"runs/detect",   # force folder
        name="train",             # force same folder
        exist_ok=True,            # prevent new run folders
        save=True,
        plots=True,
        save_period=5,
        resume=True               # force resume mode
    )

    print("Training done.")
