import { useState } from "react";






function App() {

  const [info , setInfo ] = useState({
    name : 'Nguyen Van Anh Tuan',
    age: 22
  })
  const handleUpdate = () => {
    setInfo({
         ...info,
         bio: 'yeu mau hong'
    })
  }
  return (
    
    <div style ={{padding:50}}>
     <h1 >{JSON.stringify(info)}</h1>
     
     <button onClick={handleUpdate}> Update In4</button>
    </div>
  );
}

export default App;
