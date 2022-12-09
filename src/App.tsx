import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import { NumberEqution } from './components/BinaryDevisor';
import { setNumberA, setNumberB, substract } from './store/operationSlice';
import { useMySelector } from './store/store';
import { binaryNumbVal } from './utilities/numberValidations';
import { substraction } from './utilities/substraction';
import OperationForm from './components/form/OperationForm';
function App() {
  const dispatch = useDispatch();
  const { result } = useMySelector((state) => state.operation);
  return (
    <div className='App'>
      <OperationForm />
      {result && <pre>{JSON.stringify(result)}</pre>}
    </div>
  );
}

export default App;
