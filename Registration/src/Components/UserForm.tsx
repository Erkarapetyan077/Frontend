import { useForm } from "react-hook-form";
import type { Users } from "../types/user";

type Props = {

    addUser: (data: Users) => void
}


export const UserForm: React.FC<Props> = ({ addUser }) => {


    const { register, handleSubmit, formState: { errors } } = useForm<Users>();


    function onSubmit(data: Users) {

        addUser(data)

    }


    return (
        <div className="form-container">

            <div className="form-wrapper">

                <form
                    className="user-form"
                    onSubmit={handleSubmit(onSubmit)}
                >

                    <div className="form-field">
                        <input
                            className="form-input"
                            placeholder="Name"
                            {...register("name", { required: true })}
                        />

                        {errors.name && (
                            <p className="error-message">
                                Name is required
                            </p>
                        )}
                    </div>


                    <div className="form-field">
                        <input
                            className="form-input"
                            placeholder="Surname"
                            {...register("surname", { required: true })}
                        />

                        {errors.surname && (
                            <p className="error-message">
                                Surname is required
                            </p>
                        )}
                    </div>


                    <div className="form-field">
                        <select
                            className="form-input"
                            {...register("gender", { required: true })}
                        >
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>

                        {errors.gender && (
                            <p className="error-message">
                                Gender is required
                            </p>
                        )}
                    </div>


                    <div className="form-field">
                        <input
                            className="form-input"
                            placeholder="Salary"
                            {...register("salary", {
                                required: "Salary is required",
                                min: {
                                    value: 65000,
                                    message: "Salary must be at least 65000"
                                },
                                max: {
                                    value: 300000,
                                    message: "Salary must be less than 300000"
                                }
                            })}
                        />

                        {errors.salary && (
                            <p className="error-message">
                                {errors.salary.message}
                            </p>
                        )}
                    </div>


                    <button
                        className="add-user-button"
                    >
                        Add user
                    </button>

                </form>

            </div>

        </div>
    )
}
