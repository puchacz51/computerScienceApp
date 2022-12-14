import { useForm } from 'react-hook-form';
import { operationSchema } from './formValidation';
import { NumberInput } from './NumberInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { substract } from '../../store/operationSlice';
import { binaryNumbVal } from '../../utilities/numberValidations';
export default () => {
  const dispatch = useDispatch();
  const submitHandler = (data: any) => {
    console.log(1);
    
    const validatedNumA = binaryNumbVal(data.numberA);
    const validatedNumB = binaryNumbVal(data.numberB);
    dispatch(substract({ numberA: validatedNumA, numberB: validatedNumB }));
  };
  const methods = useForm({
    resolver: yupResolver(operationSchema),
  });
  const { handleSubmit } = methods;
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <NumberInput name='numberA' />
        <NumberInput name='numberB' />

        <button type='submit'> calc</button>
      </form>
      {JSON.stringify(methods.getValues())}
      {JSON.stringify(methods.formState.errors)}
    </FormProvider>
  );
};
