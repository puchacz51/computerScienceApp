import { useEffect } from 'react';
import { TypedUseSelectorHook } from 'react-redux';
import { RootState, useMySelector } from '../store/store';
import './equation.scss';
interface NumberEqutionProps {
  numberA: string;
  numberB: string;
  result: string;
  higherIndex: string[][];
}

export const NumberEqution = () => {
  const { numberA, result, numberB } = useMySelector(
    (state) => state.operation
  );

  if (!result) return <div>sdasd</div>;
  const { result: resultNumber, higherIndex } = result;
  const numMaxLength = Math.max(
    numberA!.length,
    resultNumber!.length,
    numberB!.length
  );
  return (
    <div className='numberEquation'>
  
      <HigherIndex higherIndex={higherIndex} />
      <p>{numberA}</p>
      <p>{numberB}</p>
      <hr />
      <p>{resultNumber}</p>
    </div>
  );
};

const HigherIndex = ({ higherIndex }: { higherIndex: string[][] | null }) => {
  if (!higherIndex) return null;
  
  return (
    <div className='higherIndex'>
      {higherIndex.map((index) => {
        if (index.length === 0) {
          return <p>-</p>;
        }
        return <p>{index.reduce((prev, curr) => prev + curr, '')}</p>;
      })}
    </div>
  );
};
