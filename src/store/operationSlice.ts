import { StateCreator, StoreApi } from 'zustand';
import { substraction } from '../utilities/substraction';
export interface OperationSlice {
  numberA: string | null;
  numberB: string | null;
  result: null | { result: string; higherIndex: string[][] };
  numbersType: string;
  substract: () => void;
}

export const createOperationSlice: StoreApi<OperationSlice> = (set, get) => ({
  numberA: null,
  numberB: null,
  numbersType: null,
  result: null,

  substract: ()=>{console.log(1);
  }
});
