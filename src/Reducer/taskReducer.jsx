const initialState = { tasks: [] };

export const taskReducer = (state = initialState, action) => {

switch (action.type){
    case "ADD_TASK": 
        return {
            state:{
                tasks: [...state.tasks, action.payload]
            }
        };
    case "GET_TASKS":
        return {};
    case "DELETE_TASK":
        return {};
    case "UPDATE_TASK":
        return {};
    }
}