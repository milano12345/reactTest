import { PhotoProvider } from './components/PhotoProvider';
import './App.css';
import { PhotoList } from './components/PhotoList';

function App() {
  return (
    <div className="App">
      <PhotoList/>
      <PhotoProvider/>
    </div>
  );
}

export default App;
