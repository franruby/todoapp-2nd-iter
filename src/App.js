import React from 'react';
import './App.css';

import Tasks from "./components/Tasks.js";


const  App = () => {

  return (
    <div className="App">
      <div className="App-content">
        <header>
          TODO App
        </header>
        <main>
          <Tasks />
        </main>

        

      </div>
    </div>
  );
}

export default App;
