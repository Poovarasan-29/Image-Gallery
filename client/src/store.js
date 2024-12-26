import { configureStore } from '@reduxjs/toolkit';
import uploadSavedSlice from './slice/uploadSavedSlice';
import userSearchedCategory from './slice/userSearchedCategory';
import galleryImages from './slice/galleryImages';
import nameParams from './slice/nameParams';

const store = configureStore({
    reducer: {
        uploadSavedSlice,
        userSearchedCategory,
        galleryImages,
        nameParams
    }
});

export default store;