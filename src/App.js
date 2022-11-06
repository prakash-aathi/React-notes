import './App.css';
import Heloo from './components/Heloo';
import Message from './components/Message';
import Counter from './components/Counter';
import Destruct from './components/Destruct';
import FunctionHandler from './components/FunctionHandler';
import ClassEventHandler from './components/ClassEventHandler';
import FunctionalCounter from './components/FunctionalCounter';

function App() {
  return (
    <div className="App">
      <FunctionalCounter></FunctionalCounter>
      <FunctionHandler></FunctionHandler>
    </div>
  );
}

export default App;
