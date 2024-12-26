import { createSlice } from "@reduxjs/toolkit";

const uploadSavedSlice = createSlice({
    name: "Upload Saved",
    initialState: [],
    reducers: {
        setUploadSaved(state, action) {
            return state = action.payload;
        }
    }
});

export const { setUploadSaved } = uploadSavedSlice.actions;
export default uploadSavedSlice.reducer;