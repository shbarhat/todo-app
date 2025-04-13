import React from 'react';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <div className="task-card">
      <label className="task-label">
        {/* <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        /> */}
        <span className={task.completed ? 'completed' : ''}>{task.title}</span>
      </label>
    <div style={{display:'flex',gap:'10px'}}>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>Delete</button>
    {
!task.completed ?
     <button className="completed-btn" onClick={() => onToggle(task.id)}>Mark as Completed</button> :
     <button className="completed-btn" onClick={() => onToggle(task.id)}>Mark as Not Completed</button>
    }
    </div>
     
    </div>
  );
};

export default TaskItem;
