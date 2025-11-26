# 🚀 Space Safety Detection — Backend (Streamlit + YOLOv8)

This repository contains the backend implementation for real-time safety object detection using **YOLOv8**.  
The application runs using **Streamlit**, allowing users to upload images or capture photos and get detection results instantly.

## 🧠 Features

- YOLOv8-based object detection  
- Streamlit UI for inference  
- Upload or camera input supported  
- Displays **only the processed output**, not the raw input  
- Shows detection labels + confidence levels  

## 📦 Installation
Clone the project:

```bash
git clone https://github.com/zaina-b06/SpaceDetection.git
cd SpaceDetection/frontend
```

Install dependencies:
```bash
pip install -r ../requirements.txt
```
If requirements.txt is in the same folder, use:
```bash
pip install -r requirements.txt
```

▶ Run the Backend
```bash
streamlit run app.py
```

🖼 Output Example
- The model returns an annotated image with bounding boxes & confidence scores.

![Sample Output](backend/output.png)
