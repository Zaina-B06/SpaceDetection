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

Clone the repository:
git clone https://github.com/zaina-b06/SpaceDetection.git
cd SpaceDetection/frontend

Install required libraries:
pip install -r ../requirements.txt
If your requirements file is in the same folder, simply use:
pip install -r requirements.txt

▶️ Run the Backend
streamlit run app.py
Once it starts, Streamlit will automatically open in your browser.
If not, visit manually:
http://localhost:8501

🖼 Output Example
The model returns an annotated image with bounding boxes & confidence scores.

Sample Ouput-


