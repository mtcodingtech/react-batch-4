import { configureStore } from "@reduxjs/toolkit";
import PlaceSliceReducer from "./placesSlice";

export const store = configureStore({
    reducer: {
       places: PlaceSliceReducer 
    }
})