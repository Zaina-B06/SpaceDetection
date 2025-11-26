# AstroX
Safety Object Detection (Space Station Challenge)
This project was developed for Duality AI’s HackAura Hackathon, specifically the Space Station Safety Object Detection Challenge #2. The goal is to train and evaluate a deep learning model that can detect multiple safety-related objects in space station environments.

# What it Does
Identifies safety-critical objects (e.g., helmets, fire extinguishers, tools) in images from simulated space station environments.
Uses YOLOv8, a object detection algorithm, for high-accuracy, real-time detection.
Integrates with the Duality AI Falcon platform to process virtual camera feeds and provide automated safety monitoring.
Landing page built using Lovable to showcase the project and provide user access.
Model backend hosted on Streamlit for real-time inference.
Generates performance metrics and visual results to assess detection effectiveness.

# How it Works
-Data Preparation: Images from simulated space station scenes are annotated with bounding boxes for each safety object.
-Model Training: YOLOv8 is trained on the labeled dataset to recognize and locate multiple classes of safety equipment.
-Model Hosting: The trained model is deployed on Streamlit.
-Falcon Integration: The detection model can connect to the Falcon platform, enabling real-time inference on virtual space station camera feeds.
-Evaluation: Model performance is measured using metrics like accuracy, precision, recall, and mAP.

# Tech Behind It
Deep Learning: YOLOv8 (Ultralytics) for object detection
Simulation Integration: Duality AI Falcon platform for virtual camera feeds
Landing Page: Framer for UI/UX presentation
Model Hosting: Vercel for backend deployment
API Framework: Gradio for serving inference APIs
Image Processing: OpenCV for image handling and annotation
Data Annotation: Custom or open-source tools for bounding box labeling
Python: Main programming language for training, inference, and integration scripts
**This project demonstrates practical AI applications for enhanced situational awareness and risk reduction in space operations, combining deep learning, simulation integration, and modern deployment platforms. 
