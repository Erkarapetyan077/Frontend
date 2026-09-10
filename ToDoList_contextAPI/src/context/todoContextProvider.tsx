import { useEffect, useState, type ReactNode } from "react"
import { ToDoContext } from "./todoContext"
import type React from "react"
import { type ToDo } from "./types"
import axios from "axios"


type Props = {
    children: ReactNode
}
export const ToDoContextProvider: React.FC<Props> = ({ children }) => {

    const [todos, setTodos] = useState<ToDo[]>([]);
    const [error, setError] = useState("");
    const removeToDo = (id: number) => {

        axios.delete(`http://localhost:3001/todo/${id}`).then(() =>


            setTodos(todos.filter(todo => todo.id !== id))

        )
    }
    const onAdd = (title: string) => {
        const exists = todos.some((el) => el.title === title)

        if (exists) {
            setError("The title exists.");
            return;
        }

        axios.post("http://localhost:3001/todo", {
            title: title,
            completed: false
        }).then(
            response => {


                setTodos([
                    response.data,
                    ...todos
                ])
            }
        )
    }

    const goCompleted = (id: number, complete: boolean) => {
        console.log(id, complete)

        axios.patch(`http://localhost:3001/todo/${id}`, { completed: !complete }).then(
            response => {
                setTodos(todos.map(el => {
                    if (el.id === id) {
                        return response.data
                    }

                    return el
                })
                )
            }
        )

    }

    const All = () => {

        axios.get("http://localhost:3001/todo").then(
            response => {
                setTodos(response.data)
            }
        )

    }

    const Done = () => {

        axios.get("http://localhost:3001/todo").then(
            response => {

                setTodos(response.data.filter(el => el.completed === true))
            }
        )

    }

    const Active = () => {
        axios.get("http://localhost:3001/todo").then(
            response => {

                setTodos(response.data.filter(el => el.completed === false))
            }
        )


    }



    useEffect(() => {

        axios.get("http://localhost:3001/todo").then(
            response => {
                setTodos(response.data);
            }
        )
    }, [])

    return (
        <ToDoContext.Provider value={{ todos, onRemove: removeToDo, onAdd, error, goCompleted, All, Active, Done }}>
            {children}
        </ToDoContext.Provider>
    )
}
