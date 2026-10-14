import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import styles from "./User.module.css";
import { deleteUser, getAllUsers } from "./userSilce";

export default function Users() {
    const list = useAppSelector(store => store.users.list)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Users <span>{list.length}</span></h1>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>surname</th>
                        <th>salary</th>
                        <th>gender</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(user => <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.surname}</td>
                            <td>{user.salary}</td>
                            <td>{user.gender}</td>
                            <td>
                                <button onClick={() => dispatch(deleteUser(user.id))} className={styles.deleteButton}>Delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}
