from fastapi import FastAPI
import pandas as pd
import joblib

app=FastAPI()

@app.post("/predict")

def predict(data:dict):
    brand=data["brand"]

    model=joblib.load(f"models/{brand}.pkl")

    X=pd.DataFrame([{
        "ram_gb": data["ram"],
        "storage_gb": data["storage"],
        "battery_mah": data["battery"],
        "main_camera_mp": data["mainCamera"],
        "selfie_camera_mp": data["selfieCamera"],
        "screen_size_in": data["screenSize"],
        "refresh_rate_hz": data["refreshRate"],
        "five_g": data["fiveG"],
        "fast_charging_w": data["fastCharging"],
        "processor_score": data["processorScore"]
    }
    ])



    prediction = model.predict(X)

    return {
        "price":float(prediction[0])
    }




    
