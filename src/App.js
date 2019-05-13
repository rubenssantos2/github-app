import React from 'react';
import axios from 'axios';

import './App.modules.css';

import CommmitList from './components/CommitList/CommitList';


function App() {
  return (
    <div className="App">
      <CommmitList />
    </div>
  );
}

export default App;
