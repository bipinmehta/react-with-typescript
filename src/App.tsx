import React from 'react';

import './App.css';
import MyComp from './components/MyComp';


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <MyComp name="John" gender="M" flexible={true}></MyComp>
      </header>
    </div>
  );
}

export default App;
