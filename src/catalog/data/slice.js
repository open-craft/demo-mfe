/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

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
  name: 'catalog',
  initialState: initialCatalogState(),
  reducers: baseCatalogReducers,
});

export const catalogReducer = slice.reducer;
export const catalogActions = slice.actions;
