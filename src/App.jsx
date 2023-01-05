import Item from "./components/Item";

import { reducer } from './Reducer/todoreducer';
import { useForm } from "react-hook-form";
import { useReducer } from "react";
import uuid from 'react-uuid';

export const todos = [
  {
    id: uuid(),
    title: 'Java Script',
    isDone: false,
    time: `${new Date().getHours()} : ${new Date().getMinutes()}`
  },
  {
    id: uuid(),
    title: 'Vue js',
    isDone: false,
    time: `${new Date().getHours()} : ${new Date().getMinutes()}`
  },
  {
    id: uuid(),
    title: 'React js',
    isDone: false,
    time: `${new Date().getHours()} : ${new Date().getMinutes()}`
  }
]

function App() {
  const [state, dispatch] = useReducer(reducer, { todos: todos })

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      id: uuid(),
      isDone: false,
      time: `${new Date().getHours()} : ${new Date().getMinutes()}`
    }
  });

  const onSubmit = data => {
    dispatch({ type: "ADD", payload: { ...data, id: uuid() } })
  };

  return (
    <section className="">
      <center>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("title", { required: true })} type="text" className="outline-teal-500 max-w-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="add task" />
          <button className="max-w-lg w-full text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-3">ADD</button>
          {errors.task && <h1 color="red" >This field is required</h1>}
        </form>
      </center>
      <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-5 mt-10">
        {
          state.todos.map(item => <Item key={item.id} {...item} dispatch={dispatch} />)
        }
      </div>
    </section>
  );
}

export default App;