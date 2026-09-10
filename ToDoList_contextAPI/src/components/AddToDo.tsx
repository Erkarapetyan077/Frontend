import { useForm, type SubmitHandler } from "react-hook-form"
import type { ToDo } from "../context/types"
import { useContext } from "react"
import { ToDoContext } from "../context/todoContext"

type toDoDetails = Omit<ToDo, "id" | "completed">
export const AddToDo = () => {
    const context = useContext(ToDoContext);
    if (!context) throw new Error("Out of provider...")
    const { onAdd, error } = context

    const { register, handleSubmit, formState: { errors }, reset } = useForm<toDoDetails>()
    const handleAdd: SubmitHandler<toDoDetails> = (data) => {
        onAdd(data.title);
        reset()
    }
    return (
        <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/70 p-2 shadow-[0_0_0_5px_rgba(15,23,42,0.32)] transition focus-within:border-violet-400/50 focus-within:shadow-[0_0_0_5px_rgba(124,58,237,0.12)] sm:gap-3">
            <button className="grid size-11 shrink-0 place-items-center rounded-xl bg-linear-to-br from-violet-500 to-fuchsia-600 text-2xl font-light leading-none text-white shadow-lg shadow-violet-950/40 transition duration-200 hover:scale-105 hover:brightness-110 active:scale-95" type="button" aria-label="Add task">+</button>
            <form className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3" onSubmit={handleSubmit(handleAdd)}>
                <input {...register("title",
                    { required: "Please fill the" })}
                    className="min-w-0 flex-1 bg-transparent px-1 text-sm text-slate-100 outline-none placeholder:text-slate-500 sm:text-base"
                    placeholder="What needs to be done?"
                />

                {errors.title && <p className="text-xs text-red-400">{errors.title.message}</p>}
                {error && (
                    <p className="text-xs text-red-400">
                        {error}
                    </p>
                )}
                <button className="h-11 shrink-0 rounded-xl bg-white px-3 text-sm font-bold text-slate-900 shadow-lg shadow-black/20 transition duration-200 hover:-translate-y-0.5 hover:bg-violet-100 active:translate-y-0 sm:px-5" >Add</button>
            </form>
        </div>
    )
}
