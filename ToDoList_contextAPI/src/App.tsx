import { ToDoList } from "./components/ToDoList";
import { ToDoContextProvider } from "./context/todoContextProvider";

export default function App() {
    return (
        <div className="grid min-h-screen place-items-center overflow-hidden bg-[radial-gradient(circle_at_15%_15%,rgba(139,92,246,0.34),transparent_28%),radial-gradient(circle_at_85%_80%,rgba(59,130,246,0.22),transparent_30%),radial-gradient(circle_at_70%_10%,rgba(236,72,153,0.12),transparent_24%),linear-gradient(135deg,#070816_0%,#111236_48%,#080b1d_100%)] px-4 py-8 font-sans text-slate-100 sm:px-6 sm:py-12">
            <ToDoContextProvider>
                <ToDoList />
            </ToDoContextProvider>

        </div>
    )
}
