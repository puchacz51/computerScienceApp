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
    substract: (
      state,
      action: PayloadAction<{ numberA: string; numberB: string }>
    ) => {
      console.log(action);

      const numberA = binaryNumbVal(action.payload.numberA);
      const numberB = binaryNumbVal(action.payload.numberB);

      if (numberA === null || numberB === null) return;
      setNumberA(numberA);
      setNumberB(numberB);
      state.numberA = numberA;
      state.numberB = numberB;
      const result = substraction(numberA.split(''), numberB.split(''));
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
