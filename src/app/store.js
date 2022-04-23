import { configureStore } from '@reduxjs/toolkit';
import linksSlice from '../features/links/linksSlice';

export const store = configureStore({
  reducer: {
    links: linksSlice,
  },
});
