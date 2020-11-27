function eventsReducer(state = [], action){
    switch (action.type){
       case "add_event":
          console.log([...state, action.payload]);
          return [...state, action.payload]
       default:
          return state
    }
 }
 export default eventsReducer