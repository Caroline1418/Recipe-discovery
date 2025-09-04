import React, { useState, useEffect } from 'react';
import './Categories.css';
import ExpandMore from '@mui/icons-material/ExpandMore';

function Categories({ onCategorySelect }) {
  const [categories, setCategories] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      const data = await response.json();
      setCategories(data.categories);
    };
    getCategories();
  }, []);

  const handleCategoryClick = (categoryId, categoryName) => {
    setExpanded(expanded === categoryId ? null : categoryId);
    onCategorySelect?.(categoryName);
    setIsMobileMenuVisible(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <>
      <div 
        className={`overlay ${isMobileMenuVisible ? 'visible' : ''}`}
        onClick={() => setIsMobileMenuVisible(false)}
      />
      <button className="menu-toggle" onClick={toggleMobileMenu}>
        <span style={{ fontSize: '1.5rem' }}>☰</span>
      </button>
      <div className={`categories ${isMobileMenuVisible ? 'visible' : ''}`}>
        <h2>Categories</h2>
        <ul>
          {categories.map((category) => (
            <div 
              key={category.idCategory}
              className="category-item"
            >
              <div 
                className="category-header"
                onClick={() => handleCategoryClick(category.idCategory, category.strCategory)}
              >
                {category.strCategory}
                <span className={`expand-icon ${expanded === category.idCategory ? 'expanded' : ''}`}>
                  <ExpandMore />
                </span>
              </div>
              <div className={`category-content ${expanded === category.idCategory ? 'expanded' : ''}`}>
                <div 
                  className="category-image"
                  style={{ backgroundImage: `url(${category.strCategoryThumb})` }}
                >
                  <span>{category.strCategory}</span>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Categories;