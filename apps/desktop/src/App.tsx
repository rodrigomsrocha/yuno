import "./App.css";
import {
  PlusIcon,
  MagnifyingGlassIcon,
  FadersHorizontalIcon,
  TargetIcon,
  FastForwardIcon,
  PauseIcon,
  XIcon,
} from "@phosphor-icons/react";

export function App() {
  let isThereSessionActive = false; // Simulating a session state

  return (
    <div className="bg-zinc-950 h-screen text-zinc-100 flex p-4 gap-4">
      <aside className="flex items-start max-w-sm w-full">
        <div className="w-full rounded-lg bg-zinc-900 p-2 flex flex-col gap-4">
          {isThereSessionActive ? (
            <>
              <div className="flex gap-2">
                <div className="text-6xl text-center px-4 py-8 flex-1 bg-zinc-800 font-bold rounded">
                  2
                </div>
                <div className="text-6xl text-center px-4 py-8 flex-1 bg-zinc-800 font-bold rounded">
                  5
                </div>
                <div className="text-5xl px-2 py-8 font-bold rounded">:</div>
                <div className="text-6xl text-center px-4 py-8 flex-1 bg-zinc-800 font-bold rounded">
                  0
                </div>
                <div className="text-6xl text-center px-4 py-8 flex-1 bg-zinc-800 font-bold rounded">
                  0
                </div>
              </div>
              <div className="flex flex-col bg-zinc-800 rounded">
                <header className="p-2 flex justify-center items-center gap-2 border-b border-zinc-700">
                  <TargetIcon
                    size={18}
                    weight="bold"
                    className="text-blue-400"
                  />
                  <strong>Focus</strong>
                </header>
                <div className="p-2 space-y-4">
                  <main className="space-y-2">
                    <span className="text-xs font-medium text-zinc-400 block">
                      #123
                    </span>
                    <strong className="block">
                      Example task with pomodoro setion active
                    </strong>
                    <p className="line-clamp-2 text-sm text-zinc-400">
                      Briefly describe what needs to be done, including goals,
                      deadlines, or any specific instructions
                    </p>
                  </main>
                  <footer>
                    <span className="bg-red-400 text-xs py-0.5 px-2 rounded-md font-bold">
                      High
                    </span>
                  </footer>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-1">
                  <div className="bg-zinc-800 h-4 rounded w-25/130">
                    <div className="bg-blue-500 h-4 w-6/10 rounded"></div>
                  </div>
                  <div className="bg-zinc-800 h-4 rounded w-5/130"></div>
                  <div className="bg-zinc-800 h-4 rounded w-25/130"></div>
                  <div className="bg-zinc-800 h-4 rounded w-5/130"></div>
                  <div className="bg-zinc-800 h-4 rounded w-25/130"></div>
                  <div className="bg-zinc-800 h-4 rounded w-5/130"></div>
                  <div className="bg-zinc-800 h-4 rounded w-25/130"></div>
                  <div className="bg-zinc-800 h-4 rounded w-15/130"></div>
                </div>
                <div className="flex gap-2 justify-center items-center">
                  <button className="cursor-pointer transition hover:bg-zinc-800 rounded p-2 border border-zinc-800 flex gap-2 items-center">
                    <FastForwardIcon size={18} weight="bold" />
                  </button>
                  <button className="cursor-pointer transition hover:bg-zinc-100/90 bg-zinc-100 text-zinc-950 rounded p-2 flex gap-2 items-center">
                    <PauseIcon size={18} weight="bold" />
                  </button>
                  <button className="cursor-pointer transition hover:bg-red-500 bg-red-400 text-zinc-100 rounded p-2 flex gap-2 items-center">
                    <XIcon size={18} weight="bold" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="border border-zinc-700 border-dashed rounded-md px-4 py-8">
              <div className="text-center">
                <h2 className="text-lg font-bold mb-2">Time to focus</h2>
                <p className="text-sm text-zinc-400">
                  You don't have any active pomodoro sessions. Chose a task
                  from the "doing" column to begin.
                </p>
              </div>
            </div>
          )}
        </div>
      </aside>
      <main className="bg-zinc-900 flex flex-col rounded-lg flex-1">
        <header className="border-b border-zinc-800 p-2 flex items-center justify-between">
          <button className="cursor-pointer transition hover:bg-zinc-800 rounded-md px-4 py-1.5 border border-zinc-800 flex gap-2 items-center text-sm">
            <FadersHorizontalIcon size={18} weight="bold" />
            Filter
          </button>
          <div className="flex items-center gap-2 max-w-sm w-full">
            <label
              htmlFor="search"
              className="border border-zinc-800 rounded-md px-2 py-1.5 flex items-center gap-2 flex-1"
            >
              <input
                type="text"
                id="search"
                placeholder="Search for tasks..."
                className="text-sm font-inter outline-0 flex-1"
              />
              <MagnifyingGlassIcon
                size={18}
                weight="bold"
                className="text-zinc-500"
              />
            </label>
            <button className="cursor-pointer transition hover:bg-zinc-100/90 bg-zinc-100 text-zinc-950 rounded-md px-4 py-1.5 border border-zinc-100 flex gap-2 items-center text-sm">
              <PlusIcon size={18} weight="bold" />
              New Task
            </button>
          </div>
        </header>
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
