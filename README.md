"# Rice-Leaf-Disease-Classification" 
Rice Leaf Disease Classification 🌾
This repository contains the implementation of a machine learning project to detect and classify diseases in rice leaves. By leveraging image processing and neural networks, the model aims to assist in diagnosing diseases, improving agricultural productivity.

🚀 Features
Disease Detection: Automatically classifies diseases from rice leaf images.
Model Deployment: Supports TensorFlow Serving for real-time predictions.
Frontend Integration: A web-based frontend for user interaction and predictions.
Comprehensive Workflow: Includes data preprocessing, training, and deployment scripts.
📂 Repository Structure
bash
Copy code
Rice-Leaf-Disease-Classification/
├── .idea/                  # IDE configuration files
├── .ipynb_checkpoints/     # Jupyter notebook checkpoints
├── Rice_Versions/          # Versioned rice-related resources
├── __pycache__/            # Python bytecode cache
├── frontend/               # Frontend code for the application
├── model/                  # Scripts and files related to the model
├── models/                 # Saved machine learning models
├── rice_images/            # Dataset of rice leaf images
├── .gitattributes          # Git configuration for handling text files
├── MyComponent.js          # JavaScript component for the frontend
├── README.md               # Project documentation
├── main tf-serving.py      # TensorFlow Serving script for model deployment
├── main.py                 # Main script for running the application
├── training.ipynb          # Jupyter notebook for model training
🛠️ Installation
Clone the repository:

bash
Copy code
git clone https://github.com/143durga/Rice-Leaf-Disease-Classification.git
cd Rice-Leaf-Disease-Classification
Set up a virtual environment:

bash
Copy code
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
Install dependencies:

bash
Copy code
pip install -r requirements.txt
Prepare the dataset: Place your rice leaf images in the rice_images/ directory.

🖥️ Usage
1. Training the Model:
Open training.ipynb in Jupyter Notebook and run the cells step-by-step to train the model.

2. Serving the Model:
Use TensorFlow Serving for real-time predictions:

bash
Copy code
python main tf-serving.py
3. Running the Application:
Start the application to interact with the model via the frontend:

bash
Copy code
python main.py
🛠️ Technologies Used
Python: Core programming language
TensorFlow & Keras: Machine learning and deep learning
Flask/Django: Backend framework for model integration
JavaScript & React: Frontend for user interface
Jupyter Notebooks: Interactive model training
📈 Results
The model achieves a classification accuracy of X% on the validation dataset. Evaluation metrics are documented in training.ipynb.

🌟 Future Enhancements
Add more rice leaf disease categories.
Integrate the system with a mobile app for portability.
Optimize the model for edge devices like smartphones.
