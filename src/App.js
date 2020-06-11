import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const message = encodeURIComponent('test')
  //const phone = '7XXXXXXXXXX'
  const phone = '79619671404'  
  const url = `https://wa.me/${phone}?text=${message}`
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Покрешить whatsapp ui:</h1>
        <ul className='App-list'>
          <li>в App.js -> phone = задать номер телефона</li>
          <li>1) открыть приложение на ios</li>
          <li>2) открыть чат с номером телефона (phone)</li>
          <li>3) закрыть приложение полностью</li>
          <li>4) в safari  перейти по ссылке 'Ломай'.</li>
          <li>5) Koнец.</li>
        </ul>
        <a
          className="App-link"
          href={url}
          target="a"
        >
          Ломай
        </a>
      </header>
    </div>
  );
}

export default App;
