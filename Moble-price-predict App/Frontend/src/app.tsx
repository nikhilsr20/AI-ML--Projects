

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
        name: "RAM",
        values: [4, 6, 8, 12, 16, 24]
    },

    {
        name: "Storage",
        values: [64, 128, 256, 512, 1024]
    },

    {
        name: "Battery",
        values: [4000, 5000, 6000, 7000, 8000]
    },

    {
        name: "Main Camera",
        values: [12, 16, 32, 48, 50, 64, 108, 200]
    },

    {
        name: "Selfie Camera",
        values: [8, 12, 16, 20, 32, 50]
    },

    {
        name: "Screen Size",
        values: [6, 6.5, 7]
    },

    {
        name: "Refresh Rate",
        values: [60, 90, 120, 144, 165]
    },

    {
        name: "5G",
        values: [0, 1]
    },

    {
        name: "Fast Charging",
        values: [10, 18, 25, 33, 45, 67, 80, 100, 120, 150, 240]
    },

    {
        name: "Processor Score",
        values: [30, 40, 50, 60, 65, 70, 75, 80, 85, 90, 95, 100]
    }
];





    return (
        <div className="">
            <div className="bg-emerald-700 text-white font-medium text-center w-fit mx-auto p-5 text-4xl mt-2 rounded-2xl">Mobile Price Predictor</div>
            <div className="w-200  h-170 gap-20 mx-auto mt-5 p-4 flex flex-wrap">
                {Data.map((data)=>{
                    return (
                        <select id={data.name} className=" h-15 w-50 p-3 px-5 border-1 bg-stone-600 text-white rounded-2xl  cursor-pointer">
                           <option value="">
                         Select {data.name}
                            </option>

                            {data.values.map((value,key)=>{
                                return (
                                    <option value="" key={key}>
                                        {value}
                                     </option>
                                )
                            })}

                        </select>
                        
                    );
                })}
                </div>

                <button className="block mx-auto border rounded-2xl p-2 px-4 bg-blue-400 text-white hover:bg-blue-500 cursor-pointer" >Predict</button>

                </div>
    );
            
       
            
      
    
}