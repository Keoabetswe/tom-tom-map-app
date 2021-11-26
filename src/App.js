import { useEffect } from 'react';
import './App.css';

const App = () => {
  const [map, setMap] = useState({});
  
    useEffect(() => {
      let map = new tt.map({
      key: process.env.TOMTOM_API_KEY,
      container:mapElement.current,
    });
    
  },[]);
  setMap(map);

  return (
    <div className="App">
    </div>
  );
}

export default App;
