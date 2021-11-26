import { useEffect } from 'react';
import { useRef, useEffect, useState } from 'react';
import './App.css';
import * as tt from '@tomtom-international/web-sdk-maps';

const App = () => {
  const mapElement = useRef();
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
      <div ref={mapElement}></div>
    </div>
  );
}

export default App;
