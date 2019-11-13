import React from 'react';
import ToDo from './components/ToDo'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my awesome app!</h1>
      <h2>This is a todo list</h2>
      <ToDo/>
    </div>
  );
}

export default App;
