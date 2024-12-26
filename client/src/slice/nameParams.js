import { createSlice } from '@reduxjs/toolkit';

const nameParams = createSlice({
    name: "Name Parameter",
    initialState: "Spider Man",
    reducers: {
        setNameParams(state, action) { return state = action.payload }
    }
});

export const { setNameParams } = nameParams.actions;
export default nameParams.reducer;