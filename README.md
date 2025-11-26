# AstroX
Safety Object Detection (Space Station Challenge)
This project was developed for Duality AI’s HackAura Hackathon, specifically the Space Station Safety Object Detection Challenge #2. The goal is to train and evaluate a deep learning model that can detect multiple safety-related objects in space station environments.

# What it Does
- Identifies **safety-critical objects** such as helmets, fire extinguishers, tools, and equipment in simulated space station environments.  
- Uses **YOLOv8** for high-accuracy, real-time object detection.  
- Integrates with the **Duality AI Falcon** platform to evaluate virtual camera feeds for safety monitoring.  
- Includes a **Lovable-built landing page** for seamless user access and presentation.  
- Backend model hosted on **Streamlit** for live inference and result display.  
- Generates **performance metrics + visual outputs** to assess detection effectiveness.  

# How it Works
- **Data Preparation:** Images from simulated space station scenes are annotated with bounding boxes for each safety object.  
- **Model Training:** YOLOv8 is trained on the labeled dataset to recognize and locate multiple safety equipment types.  
- **Model Hosting:** Trained model deployed on Streamlit for real-time inference.  
- **Falcon Integration:** The model connects to Falcon to process virtual space-station camera feeds.  
- **Evaluation:** Performance measured with accuracy, precision, recall, and mAP.  

# Tech Behind It
- **Deep Learning Framework:** YOLOv8 (Ultralytics)
- **Simulation / Virtual Feed Integration:** Duality AI Falcon Platform
- **Frontend:** Streamlit  
- **Backend Hosting / Deployment:** Streamlit Cloud  
- **Image Processing:** OpenCV (cv2)  
- **Data Annotation:** Custom tools / open-source labelers  
- **Language Used:** Python

| Metric       | Score      |
| ------------ | ---------- |
| **mAP50**    | **0.8270** |
| **mAP50–95** | **0.6350** |
| Precision    | 0.9413     |
| Recall       | 0.7463     |

