import './App.css';

import Navbar from './components/Navbar';
import Counter from './components/Counter';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div>Hello!</div>
      <Button label="My button" />
      <Navbar />
      <Counter />
    </div>
  );
}

export default App;
