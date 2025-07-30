import "./App.css";
import { PomodoroWidget } from "./components/pomodoro-widget";
import { KanbanHeader } from "./components/kanban-header";

export function App() {
  let isThereSessionActive = true; // Simulating a session state

  return (
    <div className="bg-zinc-950 h-screen text-zinc-100 flex p-4 gap-4">
      <aside className="flex items-start max-w-sm w-full">
        {isThereSessionActive ? (
          <PomodoroWidget />
        ) : (
          <div className="w-full rounded-lg bg-zinc-900 p-2 flex flex-col gap-4">
            <div className="border border-zinc-700 border-dashed rounded-md px-4 py-8">
              <div className="text-center">
                <h2 className="text-lg font-bold mb-2">Time to focus</h2>
                <p className="text-sm text-zinc-400">
                  You don't have any active pomodoro sessions. Chose a task from
                  the "doing" column to begin.
                </p>
              </div>
            </div>
          </div>
        )}
      </aside>
      <main className="bg-zinc-900 flex flex-col rounded-lg flex-1">
        <KanbanHeader />
        <div className="grid grid-cols-3 gap-4 h-full p-4">
          <div className="bg-zinc-800 rounded-md">
            <header className="border-b border-zinc-700">
              <div className="p-4 flex items-center gap-4 before:w-1.5 before:h-2 before:bg-blue-400 before:rounded-r-full relative before:absolute before:left-0">
                <h1 className="text-2xl font-bold leading-0">To do</h1>
                <span className="font-medium w-8 h-6 text-center text-xs rounded-md bg-zinc-700 leading-0 flex items-center justify-center">
                  2
                </span>
              </div>
            </header>
          </div>
          <div className="bg-zinc-800 rounded-md">
            <header className="border-b border-zinc-700">
              <div className="p-4 flex items-center gap-4 before:w-1.5 before:h-2 before:bg-yellow-400 before:rounded-r-full relative before:absolute before:left-0">
                <h1 className="text-2xl font-bold leading-0">Doing</h1>
                <span className="font-medium w-8 h-6 text-center text-xs rounded-md bg-zinc-700 leading-0 flex items-center justify-center">
                  3
                </span>
              </div>
            </header>
          </div>
          <div className="bg-zinc-800 rounded-md">
            <header className="border-b border-zinc-700">
              <div className="p-4 flex items-center gap-4 before:w-1.5 before:h-2 before:bg-green-400 before:rounded-r-full relative before:absolute before:left-0">
                <h1 className="text-2xl font-bold leading-0">Done</h1>
                <span className="font-medium w-8 h-6 text-center text-xs rounded-md bg-zinc-700 leading-0 flex items-center justify-center">
                  5
                </span>
              </div>
            </header>
          </div>
        </div>
      </main>
    </div>
  );
}
