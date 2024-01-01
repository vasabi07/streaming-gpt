import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:"gpt",
    initialState: {
        toggleGptSearch: false
    },
    reducers:{
        showGptSearch: (state)=>{
            state.toggleGptSearch = !state.toggleGptSearch;
        }
    }
})
export const {showGptSearch} = GptSlice.actions;
export default GptSlice.reducer;