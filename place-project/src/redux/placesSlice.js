import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data";

const placesSlice = createSlice({
    name: "places",
    initialState: data,
    reducers: {

    }
})


export default placesSlice.reducer;