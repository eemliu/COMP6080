import logo from './logo.svg';
import './App.css';

import Navbar from './Navbar';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>Hero</div>
      <div>About me</div>
      <Counter />
    </div>
  );
}

export default App;
