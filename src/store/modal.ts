import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../types';

export const NS = 'modal';

export const initialState = {
  type: null,
  props: {},
};

const modalSlice = createSlice({
  name: NS,
  initialState,
  reducers: {
    showModal(state, { payload }) {
      state.type = payload.type;
      state.props = payload.props;
    },
    hideModal(state) {
      state.type = null;
      state.props = {};
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;

export const modalReducer = { [NS]: modalSlice.reducer };

export const selectModal = (state: RootState) => state[NS];
export const selectModalProps = (state: RootState) => state[NS].props;
