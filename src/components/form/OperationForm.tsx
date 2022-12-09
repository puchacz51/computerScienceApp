import { useForm } from 'react-hook-form';
import { operationSchema } from './formValidation';
import { NumberInput } from './NumberInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider } from 'react-hook-form/dist/useFormContext';
export default () => {
  const submitHandler = (data: any) => {
    console.log(data);
  };
  const methods = useForm({
    resolver: yupResolver(operationSchema),
  });
const {handleSubmit}= methods
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <NumberInput name='numberA' />
        <NumberInput name='numberB' />

        <button type='submit'> calc</button>
      </form>
    </FormProvider>
  );
};
