import './App.scss';
import { NumberEqution } from './components/BinaryDevider';
import { useMySelector } from './store/store';
import OperationForm from './components/form/OperationForm';
function App() {
  const { result } = useMySelector((state) => state.operation);
  return (
    <div className='App'>
      <OperationForm />
      <NumberEqution />
      {result && <pre>{JSON.stringify(result)}</pre>}xxx
    </div>
  );
}

export default App;
