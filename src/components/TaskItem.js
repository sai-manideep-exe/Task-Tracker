import React from 'react';
import { motion } from 'framer-motion';
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiTickOutline } from "react-icons/ti";
import { ImCross } from "react-icons/im"; // Import cross icon

function TaskItem({ task, onDeleteTask, onToggleComplete }) {
  return (
    <motion.div
      className={`task-item flex items-center justify-between p-4 rounded-lg shadow-md ${
        task.completed ? 'bg-green-100 line-through' : 'bg-white'
      }`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 10 }}
    >
      <button
        className="mr-4 p-2 text-blue-500 hover:text-blue-700"
        onClick={(e) => {
          e.stopPropagation();
          onToggleComplete(task.id); // Toggle completion state
        }}
      >
        {task.completed ? <ImCross size={20} /> : <TiTickOutline size={20} />}
      </button>
      <span
        className="text-gray-800 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          onToggleComplete(task.id); // Toggle completion state when text is clicked
        }}
      >
        {task.text}
      </span>
      <button
        className={`ml-4 p-2 ${
          task.completed ? 'text-red-500 hover:text-red-700' : 'text-gray-400 cursor-not-allowed'
        }`}
        onClick={(e) => {
          e.stopPropagation();
          if (task.completed) {
            onDeleteTask(task.id); // Delete only if completed
          }
        }}
        disabled={!task.completed} // Disable button if not completed
      >
        <RiDeleteBin6Line size={20} />
      </button>
    </motion.div>
  );
}

export default TaskItem;