import React from 'react';
import axios from 'axios';

import './App.modules.css';

const connectAPI = (user, url) => {

  axios.get(`${url}/${user}`)
  .then(resp =>{
    console.log(resp.data)
  })

}

function App() {
  return (
    <div className="App">
      {
        connectAPI('rubenssantos2, https://api.github.com')
      }
    </div>
  );
}

export default App;
