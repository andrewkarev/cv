import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';


const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="page-content">
        <Hero />
      </main>
    </div>
  );
}

export default App;
