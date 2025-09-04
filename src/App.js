import React from 'react';
import './App.css';
import Categories from './components/Categories/Categories';
// import heroImage from './assets/hero-image.jpg';

function App() {
  return (
    <div className="App">
      <header 
        // className="App-hero" 
        // style={{
        //   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`
        // }}
        >
        <div className="hero-content">
          <h1>Recipe Discovery</h1>
          <p>Welcome to Recipe Discovery! Start exploring delicious recipes.</p>
        </div>
      </header>
      <Categories />
    </div>
  );
}

export default App;
