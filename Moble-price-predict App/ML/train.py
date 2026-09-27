import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
import joblib
import os

df=pd.read_csv("PhoneDataSet.csv")


models = {}



# so here the different brand seperated by their names 
for brand in df["brand"].unique():
    data= df[df["brand"] == brand]
    print(data)

    X=data[[
    "ram_gb",
    "storage_gb",
    "battery_mah",
    "main_camera_mp",
    "selfie_camera_mp",
    "screen_size_in",
    "refresh_rate_hz",
    "five_g",
    "fast_charging_w",
    "processor_score"
    ]]

    Y=data["price_inr"]

    model=LinearRegression()

    model.fit(X,Y)
    models[brand] = model
    joblib.dump(model,f"models/{brand}.pkl")
    print(f"{brand} model trained and saved")


   


















