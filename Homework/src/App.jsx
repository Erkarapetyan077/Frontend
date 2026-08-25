import { useState } from 'react'
import './App.css'
export { App }

function App() {

  const [students, setStudents] = useState([
    { id: 101, name: "Ani", age: 20, gender: "male" },
    { id: 102, name: "Bella", age: 22, gender: "female" },
    { id: 103, name: "Chris", age: 21, gender: "male" },
    { id: 104, name: "Dana", age: 23, gender: "female" },
    { id: 105, name: "Eli", age: 20, gender: "male" },
    { id: 106, name: "Fiona", age: 24, gender: "female" }
  ])



  const handleRemove = (id) => {
    setStudents(students.filter(student => student.id !== id))
  }



  return (
    <>


      <div className='row'>
        {
          students.map(student =>
            <div className="col-md-3 m-2 p-3 bg-primary text-white rounded-4 shadow text-center" key={student.id}>
              <p>{student.name}</p>
              <small>{student.age} Years Old</small>
              <p>{student.gender}</p>

              <button onClick={() => handleRemove(student.id)} className="btn btn-light btn-sm mt-2">remove </button>
            </div>
          )
        }
      </div>
    </>
  )
}

