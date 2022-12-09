import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { binaryNumbVal } from '../utilities/numberValidations';
import { substraction } from '../utilities/substraction';
export interface OperationSlice {
  numberA: string | null;
  numberB: string | null;
  result: null | { result: string | null; higherIndex: string[][] | null };
}
const initialState: OperationSlice = {
  numberA: null,
  numberB: null,
  result: null,
};

const operationSlice = createSlice({
  name: 'operation',
  initialState,
  reducers: {
    substract: (state) => {
      if (state.numberA === null || state.numberB === null) return;
      const result = substraction(
        state.numberA.split(''),
        state.numberB.split('')
      );
      console.log(result);
      
      state.result = result;
    },
    setNumberA: (state, action: PayloadAction<string>) => {
      const newNumber = binaryNumbVal(action.payload);

      state.numberA = newNumber;
    },
    setNumberB: (state, action: PayloadAction<string>) => {
      const newNumber = binaryNumbVal(action.payload);

      state.numberB = newNumber;
    },
  },
});

export default operationSlice.reducer;
export const { substract, setNumberA, setNumberB } = operationSlice.actions;
