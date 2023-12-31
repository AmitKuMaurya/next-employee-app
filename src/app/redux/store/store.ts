import {configureStore} from "@reduxjs/toolkit";
import employeeReducer from "../slices/employee.slice";
export function createStore() {
    return configureStore({
        reducer : {
            employees : employeeReducer
        }
    })
}

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;