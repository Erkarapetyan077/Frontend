import type React from "react"
import type { ToDo } from "../context/types"
import { useContext } from "react"
import { ToDoContext } from "../context/todoContext"

type Props = {
    todo: ToDo
}
export const TodoItems: React.FC<Props> = ({ todo }) => {
    const context = useContext(ToDoContext)
    if (!context) throw new Error("Out of provider...")
    const { onRemove, goCompleted } = context
    return (
        <div className="group flex items-center gap-2 rounded-2xl border border-white/8 bg-white/4 p-2.5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-violet-400/45 hover:bg-white/7 hover:shadow-lg hover:shadow-slate-950/30 sm:gap-3 sm:p-3">
            <div className={`grid size-7 shrink-0 place-items-center rounded-full border text-xs font-bold ${todo.completed ? "border-emerald-400 bg-emerald-400 text-slate-950" : "border-slate-600 text-transparent"}`} aria-hidden="true">✓</div>
            <h3 className={`min-w-0 flex-1 break-words text-sm font-medium transition ${todo.completed ? "text-slate-500 line-through" : "text-slate-100"}`}>{todo.title}</h3>
            <button className="rounded-xl bg-violet-500/12 px-2.5 py-2 text-xs font-semibold text-violet-200 transition hover:bg-violet-500/25 sm:px-3" type="button" onClick={() => goCompleted(todo.id, todo.completed)}>{todo.completed ? "cancel" : "complete"}</button>
            <button className="rounded-xl px-2.5 py-2 text-xs font-semibold text-slate-500 transition hover:bg-rose-500/15 hover:text-rose-300 sm:px-3" type="button" onClick={() => onRemove(todo.id)}>delete</button>
        </div>
    )
}
