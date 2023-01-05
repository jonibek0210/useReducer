export const reducer = (state, action) => {
   switch (action.type) {
      case "ADD":
         return {
            todos: [...state.todos, action.payload]
         }
      case "REMOVE":
         return {
            todos: state.todos.filter(item => item.id !== action.payload)
         }
      case "EDIT":
         return {
            todos: state.todos.filter(item => {
               if (item.id === action.payload.id) {
                  item.title = action.payload.title
               }
               return item
            })
         }
      default:
         break
   }
}  
