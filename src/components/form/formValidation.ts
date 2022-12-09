import { object } from 'yup';
import { string } from 'yup';
const binaryReg = new RegExp('1[01]*');
export const operationSchema = object({
  numberA: string()
    .matches(binaryReg, 'not allowed character')
    .max(20)
    .required(),
  numberB: string()
    .matches(binaryReg, 'not allowed character')
    .max(20)
    .required(),
});
