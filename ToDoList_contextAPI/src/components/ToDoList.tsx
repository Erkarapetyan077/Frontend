import { AddToDo } from "./AddToDo"
import { FiletrToDo } from "./FilterToDo"
import { List } from "./List"

export const ToDoList = () => {
    return (
        <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 px-5 py-7 shadow-[0_32px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-10 sm:py-10">
            <div className="mb-8 flex items-center gap-4">
                <div className="grid size-12 place-items-center rounded-2xl bg-linear-to-br from-violet-500 to-fuchsia-600 text-xl font-black text-white shadow-lg shadow-violet-950/50">✓</div>
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">Daily planner</p>
                    <h1 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">My tasks</h1>
                </div>
            </div>
            <AddToDo/>
            <FiletrToDo />
            <List/>
        </div>
    )
}
