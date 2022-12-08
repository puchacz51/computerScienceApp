import React, { useRef, useState } from 'react';
import './App.scss';
import { binaryNumbVal } from './utilities/numberValidations';
import { substraction } from './utilities/substraction';

function App() {
  const [result, setResult] = useState<String>('');

  const test = () => {
    const val1 = input1Ref.current?.value;
    const val2 = input2Ref.current?.value;
    const  correctVal1  = binaryNumbVal(val1);
    const  correctVal2  = binaryNumbVal(val2);
    if (val1 === undefined || val2 === undefined) {
      console.log('err');
      return;
    }
    const res = substraction(correctVal1.split(''), correctVal2.split(''));
    setResult(JSON.stringify(res));
  };
  const input1Ref = useRef<HTMLInputElement>(null);
  const input2Ref = useRef<HTMLInputElement>(null);

  return (
    <div className='App'>
      <input type='text' ref={input1Ref} />
      <input type='text' ref={input2Ref} />
      <button onClick={test}>calc</button>
      <pre>{result}</pre>
      
    </div>
  );
}

export default App;
