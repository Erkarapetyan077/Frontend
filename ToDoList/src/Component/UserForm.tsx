import { useForm } from "react-hook-form"
import type { Todo } from "../helpers/user"
import "../App.css"


type Props = {
    addtask: (data: Todo) => void
}

export const UserForm: React.FC<Props> = ({ addtask }) => {

    function onSubmit(newTask: Todo) {
        addtask(newTask)
        reset()
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<Todo>()


    return (
        <div className="form-container">

            <form
                className="todo-form"
                action=""
                onSubmit={handleSubmit(onSubmit)}
            >

                <input
                    className="todo-input"
                    type="text"
                    placeholder="Enter a new task..."
                    {...register("title", { required: true })}
                />

                <button
                    className="add-task-btn"
                >
                    + Add New Task
                </button>

            </form>

            {errors.title && (
                <p className="error-message">
                    Please enter a task
                </p>
            )}

        </div>
    )
}