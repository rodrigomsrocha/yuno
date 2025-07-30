import { XIcon } from "@phosphor-icons/react";

interface CreateTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateTaskModal({ isOpen, onClose }: CreateTaskModalProps) {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 flex items-center justify-center bg-zinc-800/80 z-50"
    >
      <div className="bg-zinc-900 rounded-md p-6 w-full max-w-md animate-modal">
        <header className="flex items-start justify-between mb-4">
          <h2 className="text-xl font-semibold mb-4">Create New Task</h2>
          <button onClick={onClose} className="cursor-pointer transition hover:bg-zinc-800 rounded p-2 border border-zinc-800 flex gap-2 items-center">
            <XIcon size={18} weight="bold" />
          </button>
        </header>
        <form>
          <div className="mb-4">
            <label htmlFor="title" className="text-sm font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Search for tasks..."
              className="border border-zinc-800 rounded-md px-2 py-1.5 flex items-center w-full text-sm font-inter outline-0"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="task-description"
              className="block text-sm font-medium mb-2"
            >
              Description
            </label>
            <textarea
              id="task-description"
              placeholder="Enter task description"
              className="w-full border border-zinc-800 rounded-md px-2 py-1.5 focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer transition hover:bg-zinc-100/90 bg-zinc-100 text-zinc-950 rounded-md px-4 py-1.5 border border-zinc-100 flex gap-2 items-center justify-center text-sm"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
}
