import type React from "react";
import type { Todo } from "../helpers/user"
import "../App.css"

type Props = {
    value: Todo[];
    removetodo: (id: number) => void
    completeTodo: (id: number) => void
}

export const UserList: React.FC<Props> = ({
    value,
    removetodo,
    completeTodo
}) => {

    return (
        <div className="todo-list">

            <table className="todo-table">

                <tbody>

                    {value.map((el) => {

                        return (
                            <tr
                                className="todo-row"
                                key={el.id}
                            >

                                {/* CHECK */}
                                <td className="todo-check">

                                    <button
                                        className={`check-btn ${el.completed ? "checked" : ""
                                            }`}
                                        onClick={() => completeTodo(el.id)}
                                    >
                                        {el.completed && "✓"}
                                    </button>

                                </td>


                                {/* TITLE */}
                                <td
                                    className={`todo-title ${el.completed ? "task-done" : ""
                                        }`}
                                >
                                    {el.title}
                                </td>


                                {/* STATUS */}
                                <td
                                    className={`todo-status ${el.completed
                                            ? "completed"
                                            : "pending"
                                        }`}
                                >
                                    {el.completed
                                        ? "true"
                                        : "false"}
                                </td>


                                {/* DELETE */}
                                <td className="todo-action">

                                    <button
                                        className="delete-btn"
                                        onClick={() => removetodo(el.id)}
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>
                        );

                    })}

                </tbody>

            </table>

        </div>
    )
}