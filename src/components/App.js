import React,{useState} from "react";


function App() {
  setInterval(timeAdd,1000);
const now = new Date().toLocaleTimeString();
const [time, setTime]= useState(now);

  function timeAdd() 
  {const newTime = new Date().toLocaleTimeString("en-IT", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });
setTime(newTime);    
  }
  
  
  
  return(
    <div className="container">
      <h1> {time}</h1>
      <button onClick={timeAdd} > Time RightNow </button>
    </div>
  )
  
}
// var count =0;

// function App() {
// const [count, setCount]= useState(0);

// // const [red,green,blue] = [9,132,227];
// // console.log(blue);

// function increase() {
//   // count++
//   setCount(count+1);
// }

// function decrease() {
//   // count++
//   setCount(count-1);
// }
//   return (
//     <div className='container'>
//     <h1>{count}</h1>
//     <button onClick={decrease} > - </button>
//     <button onClick={increase} > + </button>
//     </div>
//   )
// }

export default App;
