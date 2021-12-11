import { useState } from "react";





const gifts =['one' ,'two' ,'three']

function App() {
  const [gift, setGift] = useState()
  const randomGift = () =>{
    const index = Math.floor(Math.random() * gifts.length)
      setGift(gifts[index])
  }
  
  return (
    
    <div style ={{padding:50}}>
      <h1>{ gift || 'Chưa có phần thưởng' }</h1>  
      <button onClick ={randomGift}>Lấy thưởng</button>
    </div>
  );
}

export default App;
