import { combineReducers } from '@reduxjs/toolkit';

import { modalReducer } from './modal';
import { itemsReducer } from './items';

export const rootReducer = combineReducers({
  ...itemsReducer,
  ...modalReducer,
});
