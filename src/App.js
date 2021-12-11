import { useState } from "react";





function App() {
  const storeJob = JSON.parse(localStorage.getItem('job'))
  const [job , setJob] = useState('');
  const [jobs , setJobs] = useState( storeJob ?? []);
  const handleSubmit = () =>{
       setJobs((prev)=>{
         const newJobs = [...prev , job ] ;
         const jsonJobs = JSON.stringify(newJobs);
         console.log(jsonJobs);
         localStorage.setItem('job',jsonJobs);
         return newJobs
       })

       setJob('')
     
  }
  return (
    
    <div style ={{padding:50}}>
    <input 
    value={job} 
   
    onChange={(e)=>setJob(e.target.value)}
    />
    <button onClick={handleSubmit} >Add</button>
    <ul>
      {
        jobs.map((job ,index)=>(
          <li key={index}>{job} </li>
        ))
      }
    </ul>
    </div>
  );
}

export default App;
