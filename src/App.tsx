import React, { ChangeEvent, FC, useState } from "react";
import ToDoTask from "./Components/ToDoTask";
import { ITask } from "./Interfaces";


const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodo([...todo, newTask]);
    setTask("");
    setDeadline(0);
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodo(todo.filter((task) => {
      return task.taskName != taskNameToDelete
    }))
  }
  return (
    <div className="flex font-sans items-center flex-col bg-orange-400 w-screen h-screen">
      <h1 className="font-bold text-4xl text-white my-10">Add your ToDo list here</h1>
      <div>
        <div className="flex gap-5 mx-auto justify-center">
          <div className="flex gap-2">
            <input
              name="task"
              value={task}
              onChange={handleChange}
              className='border-2 border-gray-300 rounded-md h-11 px-2 text-center font-semibold text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-300'
              type="text"
              placeholder='Task...' />
            <input
              onChange={handleChange}
              value={deadline}
              name="deadline"
              className='border-2 border-gray-300 rounded-md h-11 px-2 text-center font-semibold text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-300'
              type="number"
              placeholder='Deadline (in days)' />
          </div>
          <button
            onClick={() => addTask()}
            className="  active:bg-violet-500 rounded-md bg-violet-600 text-white px-4 py-1 font-semibold">Add task
          </button>
        </div>
        {todo.length > 0 &&
          <div className="bg-white p-2 my-4 rounded-md w-full">
            {
              todo.map((task: ITask, key: number) => {
                return <ToDoTask key={key} task={task} completeTask={completeTask} />
              })
            }
          </div>
        }
      </div>
    </div>
  )
}

export default App
