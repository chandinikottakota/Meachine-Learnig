import asyncio
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import requests
import websockets

async def handle_websocket(websocket, path):
    # Fetch admission data from the API
    response = requests.get('http://localhost:5000/api/data/admissionStatus')
    data = response.json()

    # Remove NaN values from the data
    data = [x for x in data if not np.isnan(x)]

    # Prepare the data for training
    X = np.array(data[:-1]).reshape(-1, 1)  # Use all but the last element for X
    y = np.array(data[1:])  # Shift the data by one for y

    if len(set(y)) < 2:
        await websocket.send('Insufficient data to train the model')
        return

    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

    if len(set(y_train)) < 2 or len(set(y_test)) < 2:
        await websocket.send('Insufficient data to train the model')
        return

    # Train a logistic regression model
    model = LogisticRegression()
    model.fit(X_train, y_train)

    # Make predictions on the test set
    y_pred = model.predict(X_test)

    # Calculate accuracy
    accuracy = accuracy_score(y_test, y_pred)

    # Send the accuracy to the WebSocket client
    formatted_accuracy = "{:.3f}".format(accuracy)

# Convert formatted_accuracy to string and send it via websocket
    await websocket.send(str(formatted_accuracy))

async def start_server():
    server = await websockets.serve(handle_websocket, "localhost", 8765)
    await server.wait_closed()

asyncio.run(start_server())
