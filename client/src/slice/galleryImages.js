import { createSlice } from '@reduxjs/toolkit';

const galleryImages = createSlice({
    name: "Gallery Images",
    initialState: [],
    reducers: {
        setGallryImages(state, action) { return state = action.payload }
    }
});

export const { setGallryImages } = galleryImages.actions;
export default galleryImages.reducer;