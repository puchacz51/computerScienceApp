import create from 'zustand/react';
import { createOperationSlice } from './operationSlice';
type StateFromFunctions<T extends [...any]> = T extends [infer F, ...infer R]
  ? F extends (...args: any) => object
    ? StateFromFunctions<R> & ReturnType<F>
    : unknown
  : unknown;

type StoreState = StateFromFunctions<[typeof createOperationSlice]>;

export const useBinaryStore = create<StoreState>((set, get) => ({
  ...createOperationSlice(set, get),
}));
