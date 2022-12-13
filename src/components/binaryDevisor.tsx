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

  if(!result) return <div>sdasd</div>
  const { result: resultNumber, higherIndex } = result;
  


  return (
    <div className='numberEquation'>
      <div className='higherIndex'>
        {higherIndex?.map((index) => (
          <p>{index.join()}</p>
        ))}
      </div>
      <p>{numberA}</p>
      <p>{numberB}</p>

      <p>{resultNumber}</p>
    </div>
  );
};

