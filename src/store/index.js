import { createStore } from "redux"

const reducerFn = (state = { monuments: [], monumentsM: [] }, action) => {

    if (action.type === "setData") {
        return {
            ...state,
            monuments: action.payload
        };
    }

    if (action.type === "setDataM") {
        return {
            ...state,
            monumentsM: action.payload
        };
    }
        if (action.type === "setUser") {
          return {
            ...state,
            user: action.payload,
          };
        }
    return state
}


const store = createStore(reducerFn)
export default store