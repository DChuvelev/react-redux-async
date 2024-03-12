import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./reducers";
import { apiMiddleware } from "./middleware";
export const store = configureStore({
    reducer: mainReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware)
})