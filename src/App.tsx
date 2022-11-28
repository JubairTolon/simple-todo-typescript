import React, { FC } from "react";


const App: FC = () => {
  return (
    <div className="flex font-sans items-center flex-col bg-orange-400 w-screen h-screen">
      <h1 className="font-bold text-4xl text-white my-10">Add your ToDo list here</h1>
      <div>
        <div className="flex gap-5 mx-auto justify-center">
          <div className="flex gap-2">
            <input className='border-2 border-gray-300 rounded-md h-11 px-2 text-center font-semibold text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-300' type="text" placeholder='Task...' />
            <input className='border-2 border-gray-300 rounded-md h-11 px-2 text-center font-semibold text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-300' type="number" placeholder='Deadline (in days)' />
          </div>
          <button className="  active:bg-violet-500 rounded-md bg-violet-600 text-white px-4 py-1 font-semibold">Add task</button>
        </div>
        <div className="bg-white p-2 my-4 rounded-md w-full">todo list</div>
      </div>

    </div>
  )
}

export default App
