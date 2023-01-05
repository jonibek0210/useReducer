import Modal from "./children/Modal";

import { useState } from "react";

const Item = ({ id, title, time, dispatch }) => {
   const [modal, setModal] = useState(false)

   return (
      <div className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
         <img className="object-cover w-full rounded-t-lg md:h-auto md:w-40 md:rounded-none md:rounded-l-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg" alt="" />
         <div className="h-full flex flex-col justify-between p-4 leading-normal">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far.</p>
            <p>{time}</p>
            <div className="w-full flex items-center justify-between">
               <button onClick={() => dispatch({ type: "REMOVE", payload: id })} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-md px-5 py-2.5 text-center">delete</button>
               <button onClick={() => setModal(true)} className="text-white bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-md px-5 py-2.5 text-center">edit</button>
            </div>
         </div>
         {
            modal === true ?
               <Modal closeModal={() => setModal(false)} id={id} dispatch={dispatch} />
               :
               null
         }
      </div>
   );
}

export default Item;