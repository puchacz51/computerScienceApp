import { useEffect } from 'react';
import {  TypedUseSelectorHook } from 'react-redux';
import { RootState, useMySelector } from '../store/store';

const BinaryDevider = () => {};
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
const visualizeIndexes = (higherIndex:string[][])=>{
  
  const stringSize = higherIndex[0].length
  const emptyIndexes = Array(higherIndex.length).fill([])
  for 

  const indexes = emptyIndexes.map((arr,i)=> higherIndex.map())



}


// const HigherIndex = ()=>{
//   const result = useMySelector(state=>state.operation.result)
//   useEffect(()=>{
//     if(result?.higherIndex)
//     const higherIndex = result.higherIndex
//     const emptyArray = Array(higherIndex?.length).fill([])
//     const indexedHigherPosition = emptyArray.map(positionArr=> [... higherIndex.map(ind)])
//   }
//     ,[result])


//  return <div>
// { result?.higherIndex?.map(level=>level.map( positionIndex=>))}


//  </div>


}