"use client"

import { useEffect, useState } from "react"
import { User } from "./(helpers)/type";
import { useForm } from "react-hook-form";
import Link from "next/link";
type FormData = Omit<User, "id">;

export default function Home() {

  const [users, setUsers] = useState<User[]>([]);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  useEffect(() => {
    async function getUSers() {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    }
    getUSers()
  }, [])

  async function addUser(data: FormData) {
    const response = await fetch("api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const newUser = await response.json()

    setUsers(
      [
        newUser, ...users
      ]
    )
  }

  async function deleteUser(id: number) {

    const response = await fetch(`api/users/${id}`, {
      method: "DELETE"
    })

    setUsers(users.filter(user => user.id !== id));

  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-4 py-12">

      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-indigo-400">
            Dashboard
          </p>

          <h1 className="text-4xl font-bold text-white">
            User Management
          </h1>

          <p className="mt-3 text-slate-400">
            Add and manage your users
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(addUser)}
          className="mb-10 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl"
        >
          {errors.name && (
            <p className="mb-2 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400">
              Name is required
            </p>
          )}

          {errors.email && (
            <p className="mb-2 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400">
              Email is required
            </p>
          )}

          {errors.username && (
            <p className="mb-2 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400">
              Username is required
            </p>
          )}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white">
              Add New User
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Enter the user's information below
            </p>
          </div>

          <div className="space-y-4">

            <input
              {...register("name", { required: true })}
              placeholder="Full name"
              className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            />

            <input
              {...register("email", { required: true })}
              placeholder="Email address"
              className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            />

            <input
              {...register("username", { required: true })}
              placeholder="Username"
              className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            />

            <button
              type="submit"
              className=" cursor-pointer w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500 hover:shadow-indigo-500/30 active:scale-[0.98]"
            >
              + Add User
            </button>

          </div>
        </form>

        {/* Users */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">
            Users
          </h2>

          <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm text-indigo-400">
            {users.length} users
          </span>
        </div>

        <div className="space-y-4">

          {users.map((user) => (
            <div
              key={user.id}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-white/10"
            >

              {/* Avatar */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-lg font-bold text-white shadow-lg">
                {user.name.charAt(0).toUpperCase()}
              </div>

              {/* User info */}
              <div className="min-w-0">
                <h2 className="truncate text-lg font-semibold text-white">
                  {user.name}
                </h2>

                <p className="truncate text-sm text-slate-400">
                  {user.email}
                </p>

                <p className="mt-1 text-sm text-indigo-400">
                  @{user.username}
                </p>
                <Link
                  href={`/users/${user.id}`}
                  className="ml-2 cursor-pointer rounded-lg bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-400 transition hover:bg-indigo-500/20"
                >
                  View Profile
                </Link>

                <button
                  onClick={() => deleteUser(user.id)}
                  className="mt-3 cursor-pointer rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500/20 hover:text-red-300 active:scale-95"
                >
                  Delete
                </button>


              </div>

            </div>
          ))}

        </div>

      </div>

    </main>
  )
}
