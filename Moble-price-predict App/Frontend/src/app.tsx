
import axios from "axios";
import { useState } from "react";
export default function App(){



const Data = [
    {
        name: "Brand",
        values: [
            "Apple",
            "Google",
            "Honor",
            "Infinix",
            "Lava",
            "Motorola",
            "Nothing",
            "OnePlus",
            "Oppo",
            "Poco",
            "Realme",
            "Redmi",
            "Samsung",
            "Tecno",
            "Vivo",
            "Xiaomi",
            "iQOO"
        ]
    },

    {
        name: "RAM(in gb)",
        values: [4, 6, 8, 12, 16, 24]
    },

    {
        name: "Storage(in gb)",
        values: [64, 128, 256, 512, 1024]
    },

    {
        name: "Battery(in mah)",
        values: [4000, 5000, 6000, 7000, 8000]
    },

    {
        name: "Main Camera (in megapixels)",
        values: [12, 16, 32, 48, 50, 64, 108, 200]
    },

    {
        name: "Selfie Camera(in megapixels)",
        values: [8, 12, 16, 20, 32, 50]
    },

    {
        name: "Screen Size(in inches)",
        values: [6, 6.5, 7]
    },

    {
        name: "Refresh Rate(in hz)",
        values: [60, 90, 120, 144, 165]
    },

    {
        name: "5G",
        values: ["NO", "YES"]
    },

    {
        name: "Fast Charging(in Watts)",
        values: [10, 18, 25, 33, 45, 67, 80, 100, 120, 150, 240]
    },

    {
        name: "Processor Score",
        values: [30, 40, 50, 60, 65, 70, 75, 80, 85, 90, 95, 100]
    }
];

const [predictedprice, setPredictedprice] = useState<number | null>(null);

   
  
   
const handleSubmit =  async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const brand = formData.get("Brand");
    const ram = Number(formData.get("RAM(in gb)"));
    const storage = Number(formData.get("Storage(in gb)"));
    const battery = Number(formData.get("Battery(in mah)"));
    const mainCamera = Number(formData.get("Main Camera (in megapixels)"));
    const selfieCamera = Number(formData.get("Selfie Camera(in megapixels)"));
    const screenSize = Number(formData.get("Screen Size(in inches)"));
    const refreshRate = Number(formData.get("Refresh Rate(in hz)"));
    const fiveG = formData.get("5G");
    const a = fiveG === "Yes" ? 1 :2;
    const fastCharging = Number(formData.get("Fast Charging(in Watts)"));
    const processorScore = Number(formData.get("Processor Score"));


    const data = {
    brand: brand,
    ram: ram,
    storage: storage,
    battery: battery,
    mainCamera: mainCamera,
    selfieCamera: selfieCamera,
    screenSize: screenSize,
    refreshRate: refreshRate,
    fiveG: a,
    fastCharging: fastCharging,
    processorScore: processorScore
    };


   let error: boolean = false;

    for (const value of Object.values(data)) {
       console.log(value)
    if (value === "" || value===0) {
        
        console.log("error");
        error = true;
        break;
    }
}

if (error) {
    return;
}

    const response = await axios.post("http://localhost:8080/predict", data);

    const price = Math.round(response.data.price / 100) * 100;

    setPredictedprice(price);
    
    setTimeout(()=>{
        setPredictedprice(null);
    },5000)
    

};




    return (
    predictedprice === null ? (
        <div className="min-h-screen bg-slate-950 py-10 px-6">

            {/* Heading */}
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                    Mobile Price Predictor
                </h1>

                <p className="text-slate-400 mt-3">
                    Enter mobile specifications to predict its price
                </p>
            </div>

            {/* Form Card */}
            <form
                onSubmit={handleSubmit}
                className="max-w-5xl mx-auto bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-2xl"
            >

                {/* Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {Data.map((data, key) => {
                        return (
                            <div key={key} className="flex flex-col gap-2">

                                <label className="text-sm font-medium text-slate-300">
                                    {data.name}
                                </label>

                                <select
                                    name={data.name}
                                    className="h-12 w-full px-4 rounded-xl
                                    bg-slate-800 text-white
                                    border border-slate-600
                                    outline-none
                                    focus:border-blue-500
                                    focus:ring-2 focus:ring-blue-500/30
                                    cursor-pointer
                                    transition"
                                >

                                    <option value="">
                                        Select {data.name}
                                    </option>

                                    {data.values.map((value, key) => {
                                        return (
                                            <option
                                                value={String(value)}
                                                key={key}
                                            >
                                                {value}
                                            </option>
                                        );
                                    })}

                                </select>

                            </div>
                        );
                    })}

                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="block mx-auto mt-10
                    px-10 py-3
                    rounded-xl
                    bg-blue-600
                    text-white font-semibold
                    hover:bg-blue-700
                    active:scale-95
                    transition-all
                    cursor-pointer
                    shadow-lg shadow-blue-900/30"
                >
                    Predict Price
                </button>

            </form>

        </div>

    ) : (

        /* Result Screen */
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

            <div className="
                w-full max-w-md
                bg-slate-900
                border border-emerald-600/40
                rounded-3xl
                p-10
                text-center
                shadow-2xl shadow-emerald-950/40
            ">

                <p className="text-slate-400 text-lg mb-3">
                    Predicted Mobile Price
                </p>

                <h2 className="
                    text-5xl
                    font-bold
                    text-emerald-400
                    mb-6
                ">
                    ₹{predictedprice}
                </h2>

                <p className="text-slate-500 text-sm">
                    This price is estimated based on the specifications
                    provided.
                </p>

            </div>

        </div>
    )
);
            
       
            
      
    
}