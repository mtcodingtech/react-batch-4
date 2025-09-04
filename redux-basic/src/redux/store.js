import { configureStore } from "@reduxjs/toolkit";
import bookSliceReducer from "./booksSlice";
import themeSliceReducer from "./themeSlice";

export const store = configureStore({
    reducer: {
        books: bookSliceReducer,
        theme: themeSliceReducer
    }
})