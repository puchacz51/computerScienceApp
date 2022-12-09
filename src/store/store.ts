import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import operationSlice from './operationSlice';

export const store = configureStore({
  reducer: {
    operation: operationSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
type TypedSelector = TypedUseSelectorHook<RootState>;
export const useMySelector: TypedSelector = useSelector;
