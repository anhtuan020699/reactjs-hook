import { useState } from "react";


const courses = [
  {
    id:1,
    name:'course 1'
  },
  {
    id:2,
    name:'course 2'
  },
  {
    id:3,
    name:'course 3'
  },
]



function App() {
  const [checked , setChecked] = useState([])
 const handleCheck = (id) =>{
  setChecked(prev => {
    const isChecked =checked.includes(id)
    if(isChecked){
     return checked.filter( item => item !==id )
    }
    else{
      return [...prev,id]
    }
  })

 }


  const handleSubmit = () => {
   console.log({id:checked});
  }
 
  return (
    
    <div style ={{padding:50}}>
    {
       courses.map(course =>(
       <div  key ={course.id}>
        <input
        checked = {checked.includes(course.id)}
         type ='checkbox'
         onChange = {() => handleCheck(course.id)}
        />
        {course.name}
      </div>
       ))

    }
    <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
