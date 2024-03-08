import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer, usersReducer } from "./reducers";
import { apiMiddleware } from "./middleware";
export const store = configureStore({
    reducer: {
        items: itemsReducer,
        users: usersReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware)
})