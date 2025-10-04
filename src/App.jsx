import React ,{useState} from 'react'

const App = () => {
  const [weight,setWeight] = useState("");
  const[height,setHeight]  = useState("");
  const[bmi, setBmi]  = useState("");
  const[category,setCategory] = useState("");
  const[color , setColor] = useState("");

const calculateBMI = () => {
  if (weight > 0 && height > 0 ) {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);
  
let bmiCategory = "";
let bgColor = "";
if (bmiValue < 18.5) {bmiCategory = "Underweight"; 
bgColor="bg-blue-400";
}else if(bmiValue>= 18.5 && bmiValue < 24.9) {bmiCategory = "Normal weight"; 
bgColor="bg-green-400";
}else if(bmiValue>= 25 && bmiValue < 29.9) {bmiCategory = "Overweight"; bgColor="bg-red-400";
}else {bmiCategory = "Obese"; bgColor="bg-yellow-400"};

setCategory(bmiCategory);
setColor(bgColor);
  } else {
    setBmi("");
    setCategory("");
    setColor("");
  }
  };

  return (
    <div className='h-screen w-screen flex justify-center items-center bg-gradient-to-br from-gray-900 to-black text-white '>
      <div className='p-8 rounded-xl bg-gray-900 shadow-md w-96'>
        <h1 className='text-3xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 to-red-500 p-4 rounded-xl shadow-md'>BMI CALCULATOR</h1>

        {/* Weight Input */}
        <div className='mb-4'>
          <label htmlFor="weight" className='block mb-2'>Weight (kg)</label>
          <input id='weight' type="number" className='w-full p-2 rounded-md text-black bg-white outline-none shadow-inner' value={weight} onChange={(e) => setWeight(e.target.value)}/>
        </div>

        {/* Height Input */}

        <div className='mb-4'>
          <label htmlFor="height" className='block mb-2'>Height (cm)</label>
          <input id='height' type="number" className='w-full p-2 rounded-md text-black bg-white outline-none shadow-inner' value={height} onChange={(e) => setHeight(e.target.value)}/>
        </div>

        {/* Calculate BMI */}
        <button onClick={calculateBMI} className='w-full py-2 mt-2 bg-purple-700 hover:bg-purple-800 rounded-md font-semibold'>
          Calculate BMI                              
        </button>

        {/* Result */}
        {bmi && (
          <div className={`mt-6 p-4 rounded-xl text-center ${color} text-white font-semibold`}>
            <p className='text-xl font-semibold'> Your BMI:{bmi}</p>
            <p className='text-lg mt-2'>{category}</p>

          </div>
        )}
      </div>
    </div>

);
};

export default App;
