import { ErrorMessage } from '@hookform/error-message';
import { useFormContext } from 'react-hook-form';
interface NumberInputProps {
  name: string;
}

export const NumberInput = ({ name }: NumberInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <label htmlFor={name}>
      <input type='text' {...register(name)} name={name} />
      <ErrorMessage name={`${name}error`} errors={errors} />
    </label>
  );
};
