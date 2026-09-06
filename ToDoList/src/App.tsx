import { useEffect, useState } from "react";
import { UserForm } from "./Component/UserForm";
import { UserList } from "./Component/UserList";
import type { Todo } from "./helpers/user";
import axios from "axios";
import "./App.css"




export default function App() {

  const [value, setValue] = useState<Todo[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3001/todo").then(
      response => {
        setValue(response.data)
      }
    )
  }, [])


  function addtask(newTask: Todo) {
    console.log("POST CALLED", newTask);

    axios.post("http://localhost:3001/todo", newTask).then(
      response => {
        setValue([
          response.data,
          ...value
        ])
      }
    )
  }


  function completeTodo(id: number) {
    const todo = value.find(el => el.id === id);

    console.log("CLICKED", id);

    if (!todo) {
      return;
    }

    let completed = false;

    if (todo.completed === false) {
      completed = true;
    }

    if (todo.completed === true) {
      completed = false;
    }

    axios.patch(`http://localhost:3001/todo/${id}`, {
      completed: completed
    }).then(response => {

      setValue(prevValue =>
        prevValue.map(el => {
          if (el.id === id) {
            return response.data;
          }

          return el;
        })
      );

    });
  }


  function removetodo(id: number) {

    axios.delete(`http://localhost:3001/todo/${id}`).then(() =>
      setValue(value.filter((el) => el.id !== id))
    )
  }


  return (
    <div className="app">

      <div className="app-container">

        <h1 className="app-title">
          Todo List
        </h1>

        <p className="app-subtitle">
          Manage your tasks easily
        </p>

        <div className="form-wrapper">
          <UserForm
            addtask={addtask}
          />
        </div>

        <div className="list-wrapper">
          <UserList
            value={value}
            removetodo={removetodo}
            completeTodo={completeTodo}
          />
        </div>

      </div>

    </div>
  )
}