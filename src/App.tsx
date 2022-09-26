import React from 'react';
import './App.css';
import Education from './components/education/Education';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Technologies from './components/technologies/Technologies';


const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="page-content">
        <Hero />
        <Technologies />
        <Education />
      </main>
    </div>
  );
}

export default App;
