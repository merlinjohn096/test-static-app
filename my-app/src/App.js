import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [data, setData] = useState('');
  const [flag, setFlag] = useState(false);


  const onButtonClick = async () => {
    const { text } = await( await fetch(`/api/message`)).json();
    setData(text);
    setFlag(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
         Welcome to Azure Static Web App Demo
        </h1>
        <button className="button" type="button" onClick={onButtonClick}>Trigger Function</button>
        {flag &&  (<div>
          <p>This is the message from Azure Function</p>
          <b>{data}</b>
        </div>)}
      </header>
    </div>
  );
}

export default App;
