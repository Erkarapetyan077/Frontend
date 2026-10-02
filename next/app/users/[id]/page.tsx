import { User } from "@/app/(helpers)/type";

export default async function Profile({
    params
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const response = await fetch(
        `http://localhost:3000/api/users/${id}`,
        {
            cache: "no-store"
        }
    );

    const user: User = await response.json();

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-4 py-12">

            <div className="mx-auto max-w-2xl">

                {/* Header */}
                <div className="mb-8 text-center">

                    <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-indigo-400">
                        Profile
                    </p>

                    <h1 className="text-4xl font-bold text-white">
                        User Profile
                    </h1>

                </div>


                {/* Profile Card */}
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">

                    {/* Avatar */}
                    <div className="mb-6 flex justify-center">

                        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-4xl font-bold text-white shadow-xl shadow-indigo-500/20">
                            {user.name.charAt(0).toUpperCase()}
                        </div>

                    </div>


                    {/* User name */}
                    <div className="mb-8 text-center">

                        <h2 className="text-3xl font-bold text-white">
                            {user.name}
                        </h2>

                        <p className="mt-2 text-indigo-400">
                            @{user.username}
                        </p>

                    </div>


                    {/* User information */}
                    <div className="space-y-4">

                        {/* Name */}
                        <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">

                            <p className="text-sm text-slate-500">
                                Full Name
                            </p>

                            <p className="mt-1 text-lg font-medium text-white">
                                {user.name}
                            </p>

                        </div>


                        {/* Email */}
                        <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">

                            <p className="text-sm text-slate-500">
                                Email
                            </p>

                            <p className="mt-1 text-lg font-medium text-white">
                                {user.email}
                            </p>

                        </div>


                        {/* Username */}
                        <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">

                            <p className="text-sm text-slate-500">
                                Username
                            </p>

                            <p className="mt-1 text-lg font-medium text-indigo-400">
                                @{user.username}
                            </p>

                        </div>

                    </div>


                    {/* Buttons */}
                    <div className="mt-8 flex gap-3">

                        <a
                            href="/"
                            className="flex-1 cursor-pointer rounded-xl border border-white/10 bg-white/5 py-3 text-center font-semibold text-white transition hover:bg-white/10 active:scale-[0.98]"
                        >
                            ← Back
                        </a>

                        <a
                            href="/"
                            className="flex-1 cursor-pointer rounded-xl bg-indigo-600 py-3 text-center font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500 active:scale-[0.98]"
                        >
                            🏠 Home
                        </a>

                    </div>

                </div>

            </div>

        </main>
    );
}
