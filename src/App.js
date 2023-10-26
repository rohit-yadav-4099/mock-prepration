import logo from './logo.svg';
import './App.css';
import CounterCompo from './Day1/Counter';
import Child from './Day2/Counter2';
import RouterCompo from './Routing/Route';

function App() {
  return (
    <div className="App">
      <CounterCompo/>
      {/* <Child/> */}
      {/* <RouterCompo></RouterCompo> */}
    </div>
  );
}

export default App;
