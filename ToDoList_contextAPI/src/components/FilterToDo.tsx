import { useContext, useState } from "react"
import { ToDoContext } from "../context/todoContext"

export const FiletrToDo = () => {
    const context = useContext(ToDoContext)
    if (!context) throw new Error("Out of provider...")
    const { All, Active, Done } = context
    const [selectedFilter, setSelectedFilter] = useState<"all" | "active" | "done">("all")

    const filterButton = (filter: "all" | "active" | "done") =>
        `h-10 flex-1 rounded-xl px-3 text-sm font-semibold transition duration-200 sm:px-4 ${
            selectedFilter === filter
                ? "bg-linear-to-br from-violet-500 to-fuchsia-600 text-white shadow-lg shadow-violet-950/30"
                : "text-slate-400 hover:-translate-y-0.5 hover:bg-white/8 hover:text-white"
        }`

    return (


        <div className="mt-7 flex gap-1 rounded-2xl border border-white/8 bg-slate-950/55 p-1.5">
            <button className={filterButton("all")} onClick={() => { setSelectedFilter("all"); All() }} aria-pressed={selectedFilter === "all"}>All</button>
            <button className={filterButton("active")} onClick={() => { setSelectedFilter("active"); Active() }} type="button" aria-pressed={selectedFilter === "active"}>Active</button>
            <button className={filterButton("done")} onClick={() => { setSelectedFilter("done"); Done() }} type="button" aria-pressed={selectedFilter === "done"}>Done</button>
        </div>
    )
}
