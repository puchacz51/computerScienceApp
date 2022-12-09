import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import { NumberEqution } from './components/BinaryDevisor';
import { setNumberA, setNumberB, substract } from './store/operationSlice';
import { useMySelector } from './store/store';
import { binaryNumbVal } from './utilities/numberValidations';
import { substraction } from './utilities/substraction';

function App() {
  const dispatch = useDispatch();
  const { numberB, numberA, result } = useMySelector(
    (state) => state.operation
  );

  const test = () => {
    // const val1 = input1Ref.current?.value;
    // const val2 = input2Ref.current?.value;

    // if (val1 === undefined || val2 === undefined) {
    //   console.log('err');
    //   return;
    // }
    // const res = substraction(correctVal1.split(''), correctVal2.split(''));
    // setResult(JSON.stringify(res));

    dispatch(substract())


  };
  const input1Ref = useRef<HTMLInputElement>(null);
  const input2Ref = useRef<HTMLInputElement>(null);

  return (
    <div className='App'>
      <input
        type='text'
        onChange={(e) => dispatch(setNumberA(e.currentTarget.value))}
        value={numberA || ''}
        ref={input1Ref}
      />
      <input
        onChange={(e) => dispatch(setNumberB(e.currentTarget.value))}
        type='text'
        value={numberB || ''}
        ref={input2Ref}
      />
      <button onClick={test}>calc</button>
      {result && <NumberEqution />}
    </div>
  );
}

export default App;
