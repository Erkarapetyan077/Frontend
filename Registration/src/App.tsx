import { useEffect, useState } from "react"
import type { Users } from "./types/user";
import { UserForm } from "./Components/UserForm";
import { UserList } from "./Components/UserList";
import axios from "axios";
import "./App.css";

export default function App() {

  const [value, setValue] = useState<Users[]>([]);

  useEffect(() => {

    axios.get("http://localhost:3001/users").then(
      response => {
        setValue(response.data);
      }
    )

  }, [])


  const addUser = (newUser: Users) => {

    axios.post("http://localhost:3001/users", newUser).then(
      response => {
        setValue([
          response.data,
          ...value
        ])
      }
    )
  }


  return (
    <div className="app">

      <div className="app-header">
        <h1>User Management</h1>
        <p>Manage your users</p>
      </div>

      <div className="app-form">
        <UserForm
          addUser={addUser}
        />
      </div>

      <div className="app-list">
        <UserList
          users={value}
        />
      </div>

    </div>
  )
}
