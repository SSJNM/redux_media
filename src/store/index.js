import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "../slices/UsersSlices";

const store = configureStore({
    reducer: {
        users: usersReducer
    }
})

export { store };
export * from '../thunks';