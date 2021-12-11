import { useState } from "react";


const courses = [
  {
    id:1,
    name:'course 1'
  },
  {
    id:2,
    name:'course 1'
  },
  {
    id:3,
    name:'course 1'
  },
]



function App() {
  const [checked , setChecked] = useState()
  const handleSubmit = () => {
   console.log(checked)
  }
 
  return (
    
    <div style ={{padding:50}}>
    {
       courses.map(course =>(
       <div  key ={course.id}>
        <input
        checked = {checked === course.id}
         type ='radio'
         onChange = {() => setChecked(course.id)}
        />
      </div>
       ))

    }
    <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
