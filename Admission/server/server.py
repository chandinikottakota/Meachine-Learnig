import requests
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.impute import SimpleImputer

# Retrieve admissionStatus values from the API endpoint
response = requests.get('http://localhost:5000/api/data')
admissionStatus_values = response.json()

# Generate labels for the admissionStatus values
labels = np.random.randint(2, size=len(admissionStatus_values))

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(admissionStatus_values, labels, test_size=0.2, random_state=42)

# Reshape the data for training the logistic regression model
X_train = np.array(X_train).reshape(-1, 1)
X_test = np.array(X_test).reshape(-1, 1)
y_train = np.array(y_train)
y_test = np.array(y_test)

# Preprocess the data to handle missing values
imputer = SimpleImputer(strategy='mean')
X_train = imputer.fit_transform(X_train)
X_test = imputer.transform(X_test)

# Train the logistic regression model
logisticRegression = LogisticRegression()
logisticRegression.fit(X_train, y_train)

# Predict the labels for the test set
y_pred = logisticRegression.predict(X_test)

# Calculate the accuracy of the model
accuracy = accuracy_score(y_test, y_pred)
print("Accuracy:", accuracy*100)