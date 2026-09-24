
import axios from "axios";
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
    fiveG: fiveG,
    fastCharging: fastCharging,
    processorScore: processorScore
};

const response = await axios.post("http://localhost:8080/predict", data);

console.log(response.data);
 


    

};




    return (
        <div className="">
            <div className="bg-emerald-700 text-white font-medium text-center w-fit mx-auto p-5 text-4xl mt-2 rounded-2xl">Mobile Price Predictor</div>
            <form action="" onSubmit={handleSubmit}>
            <div className="w-200  h-170 gap-20 mx-auto mt-5 p-4 flex flex-wrap">
                {Data.map((data,key)=>{
                    return (
                        <select name={data.name} key={key}  className=" h-15 w-50 p-3 px-5 border-1 bg-stone-600 text-white rounded-2xl  cursor-pointer">
                           <option value="">
                         Select {data.name}
                            </option>

                            {data.values.map((value,key)=>{
                                return (
                                    <option value={String(value)} key={key}>
                                        {value}
                                     </option>
                                )
                            })}

                        </select>
                        
                    );
                })}
                </div>

                <button className="block mx-auto border rounded-2xl p-2 px-4 bg-blue-400 text-white hover:bg-blue-500 cursor-pointer">Predict</button>
</form>

                </div>
    );
            
       
            
      
    
}