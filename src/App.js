import logo from './logo.svg';
import './App.css';
import MyLineChart from './component/MyLineChart/MyLineChart';
import MyAreaChart from './component/MyAreaChart/MyAreaChart';

function App() {
  return (
    <div className="App">
      <MyLineChart></MyLineChart>
      {/* <MyAreaChart></MyAreaChart> */}
    </div>
  );
}

export default App;
