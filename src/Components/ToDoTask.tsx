import React from 'react';
import { ITask } from '../Interfaces';



interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}
const ToDoTask = ({ task, completeTask }: Props) => {

    return (
        <div className='flex items-center justify-items-center justify-between px-2 rounded-md my-1'>
            <div className='flex items-center my-1 mr-1 text-white bg-violet-600 rounded-sm px-2 w-1/2'>{task.taskName}</div>
            <div className='flex items-center justify-center my-1 mr-1 text-white bg-violet-600 rounded-sm px-2 w-1/2'>{task.deadline}</div>
            <button
                onClick={() => completeTask(task.taskName)}
                className=" active:bg-violet-500 rounded-sm bg-orange-400 text-white px-2 font-semibold">X
            </button>
        </div>
    );
};

export default ToDoTask;