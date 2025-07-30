import {
  TargetIcon,
  FastForwardIcon,
  PauseIcon,
  XIcon,
} from "@phosphor-icons/react";

export function PomodoroWidget() {
  return (
    <div className="w-full rounded-lg bg-zinc-900 p-2 flex flex-col gap-4">
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
          <TargetIcon size={18} weight="bold" className="text-blue-400" />
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
    </div>
  );
}
