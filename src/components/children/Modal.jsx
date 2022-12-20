const Modal = ({ closeModal }) => {
   return (
      <div className="fixed z-50 bg-[#00000050] w-screen p-4 overflow-x-hidden overflow-y-auto top-0 left-0 h-screen md:min-h-screen">
         <div className="relative w-full h-full max-w-md md:h-auto top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">
            <div className="relative bg-white rounded-lg shadow">
               <button onClick={closeModal} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  <span className="sr-only">Close modal</span>
               </button>
               <div className="px-6 py-6 lg:px-8">
                  <div className="space-y-6">
                     <h1 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Adit</h1>
                     <div>
                        <input placeholder="adit task" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                     </div>
                     <div className="flex justify-between">
                        <div className="flex items-start">
                           <div className="flex items-center h-5">
                              <input type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                           </div>
                           <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                     </div>
                     <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">adit</button>
                     <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="404" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Modal;