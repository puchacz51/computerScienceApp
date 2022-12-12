import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState, useMySelector } from '../store/store';

const BinaryDevider = () => {};
interface NumberEqutionProps {
  numberA: string;
  numberB: string;
  result: string;
  higherIndex: string[][];
}
type TypedSelecor = TypedUseSelectorHook<RootState>;

export const NumberEqution = () => {
  const { numberA, result, numberB } = useMySelector(
    (state) => state.operation
  );
  return (
    <div className='numberEquation'>
      <div className='higherIndex'>
        {result?.higherIndex?.map((index) => (
          <p>{index.join()}</p>
        ))}
      </div>
      o
      <p>{result?.result}</p>
    </div>
  );
};

export { BinaryDevider };
