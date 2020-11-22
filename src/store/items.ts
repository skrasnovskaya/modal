import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../types';

export const NS = 'items';

export const initialState = {
  items: [],
  loading: false,
};

const itemsSlice = createSlice({
  name: NS,
  initialState,
  reducers: {
    addItem(state) {
      state.loading = true;
    },
    addItemDone(state) {
      state.loading = false;
    }
  },
});

export const { addItem, addItemDone } = itemsSlice.actions;

export const itemsReducer = { [NS]: itemsSlice.reducer };

export const selectLoading = (state: RootState) => state[NS].loading;
