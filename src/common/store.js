import { configureStore } from '@reduxjs/toolkit';
import { catalogReducer } from '../catalog/data/slice';
import { STORE_NAMES } from './constants';

export default configureStore({
  reducer: {
    [STORE_NAMES.CATALOG]: catalogReducer,
  },
});
