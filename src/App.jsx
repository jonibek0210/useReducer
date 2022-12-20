import Item from "./components/Item";

import { useState } from "react";

const arr = [
  {
    id: 1,
    title: 'Java Script',
    time: `${new Date().getHours()} : ${new Date().getMinutes()}`
  },
  {
    id: 2,
    title: 'Vue js',
    time: `${new Date().getHours()} : ${new Date().getMinutes()}`
  },
  {
    id: 3,
    title: 'React js',
    time: `${new Date().getHours()} : ${new Date().getMinutes()}`
  }
]

function App() {
  const [data, setData] = useState(arr)

  const addTask = (e) => {
    e.preventDefault()

    let task = {
      id: Math.random(),
      time: `${new Date().getHours()} : ${new Date().getMinutes()}`
    }

    let fm = new FormData(e.target)
    fm.forEach((value, key) => {
      task[key] = value
    })

    setData([...data, task])
    console.log(data);
  }

  const deleteTask = (id) => {
    setData(data.filter(item => item.id !== id))
  }

  const editTask = (title) => {

  }

  return (
    <section className="">
      <center>
        <form onSubmit={addTask}>
          <input name="title" type="text" className="outline-teal-500 max-w-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="add task" />
          <button className="max-w-lg w-full text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-3">ADD</button>
        </form>
      </center>
      <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-5 mt-10">
        {
          data.map(item => <Item key={item.id} {...item} deleteTask={deleteTask} editTask={editTask} />)
        }
      </div>
    </section>
  );
}

export default App;