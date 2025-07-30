import {
  FadersHorizontalIcon,
  MagnifyingGlassIcon,
  PlusIcon
} from "@phosphor-icons/react";
import { CreateTaskModal } from "../create-task-modal";
import { useState } from "react";

export function KanbanHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onCloseModal = () => {
    setIsModalOpen(false);
  }

  const onOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
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
        <button 
          onClick={onOpenModal}
          className="cursor-pointer transition hover:bg-zinc-100/90 bg-zinc-100 text-zinc-950 rounded-md px-4 py-1.5 border border-zinc-100 flex gap-2 items-center text-sm"
        >
          <PlusIcon size={18} weight="bold" />
          New Task
        </button>
        <CreateTaskModal onClose={onCloseModal} isOpen={isModalOpen} />
      </div>
    </header>
  );
}
