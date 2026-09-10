import { useContext } from "react"
import { ToDoContext } from "../context/todoContext"
import { TodoItems } from "./ToDoItems"

export const List = () => {

    const context = useContext(ToDoContext)
    if (!context) throw new Error("Out of provider...")
    const { todos } = context;
    return (
        <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3">
                <h3 className="text-base font-bold text-white">Tasks</h3>
                <div className="h-px flex-1 bg-linear-to-r from-white/10 to-transparent" />
            </div>
            {
                todos.map(todo =>
                    <TodoItems
                        key={todo.id}
                        todo={todo}
                    />
                )
            }
        </div>
    )
}
