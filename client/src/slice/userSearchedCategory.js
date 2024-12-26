import { createSlice } from "@reduxjs/toolkit";

const userSearchedCategorySlice = createSlice({
    name: "User Searched Category",
    initialState: [],
    reducers: {
        setSearchedCategory(state, action) {
            return state = action.payload;
        }
    }
});

export const { setSearchedCategory } = userSearchedCategorySlice.actions;
export default userSearchedCategorySlice.reducer;