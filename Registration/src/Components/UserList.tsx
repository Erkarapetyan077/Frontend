import type React from "react"
import type { Users } from "../types/user"


type Props = {
    users: Users[]
}


export const UserList: React.FC<Props> = ({ users }) => {


    return (
        <div className="user-list">

            <table className="users-table">

                <thead className="table-head">
                    <tr>
                        <th className="table-title">Name</th>
                        <th className="table-title">Surname</th>
                        <th className="table-title">Gender</th>
                        <th className="table-title">Salary</th>
                    </tr>
                </thead>


                <tbody>

                    {users.map((el) => {

                        return (
                            <tr
                                className="user-row"
                                key={el.id}
                            >
                                <td className="user-cell">
                                    {el.name}
                                </td>

                                <td className="user-cell">
                                    {el.surname}
                                </td>

                                <td className="user-cell">
                                    {el.gender}
                                </td>

                                <td className="user-cell">
                                    {el.salary}
                                </td>
                            </tr>
                        )

                    })}

                </tbody>

            </table>

        </div>
    )
}
