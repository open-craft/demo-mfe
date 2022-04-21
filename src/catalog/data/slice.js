/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { STORE_NAMES } from '../../common/constants';

export const initialCatalogState = () => ({
  fetching: false,
  errors: [],
  courses: [],
});

export const baseCatalogReducers = {
  fetchCatalogRequest(state) {
    state.fetching = true;
    state.errors = [];
    state.courses = [];
  },
  fetchCatalogSuccess(state, { payload }) {
    state.fetching = false;
    state.courses = payload.courses;
  },
  fetchCatalogFailure(state, { payload }) {
    state.fetching = false;
    state.errors = payload.errors;
  },
};

const slice = createSlice({
  name: STORE_NAMES.CATALOG,
  initialState: initialCatalogState(),
  reducers: baseCatalogReducers,
});

export const catalogReducer = slice.reducer;
export const catalogActions = slice.actions;
