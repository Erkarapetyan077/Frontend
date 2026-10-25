import { useDispatch, useSelector } from "react-redux"
import {List} from "./List"
import styles from './App.module.css'
import { delUser } from "./redux/actions"

export default function App() {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Welcome {users.length}</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>surname</th>
            <th>age</th>
            <th>salary</th>
            <th>actionst </th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user =>
              <tr key={user.id} >
                <th>{user.id}</th>
                <th>{user.name}</th>
                <th>{user.surname}</th>
                <th>{user.age}</th>
                <th>{user.salary}</th>
                <th>
                  <button className={styles.delete} onClick={() => dispatch(delUser(user.id))}>Delete</button>
                </th>
              </tr>
            )
            }
        </tbody>
      </table>
<br /><br /><br />
      <List/>
    </div>
  )
}
