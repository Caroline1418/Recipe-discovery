import React, { useState } from 'react';
import './App.css';
import Categories from './components/Categories/Categories';
import Cards from './components/Cards/cards';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <Categories onCategorySelect={handleCategorySelect} />
      <main className="main-content">
        <div className="hero-content">
          <h1>Recipe Discovery</h1>
          <p>Explore delicious recipes from around the world</p>
        </div>
        <Cards category={selectedCategory} />
      </main>
    </div>
  );
}

export default App;
