import React, { useState, useEffect } from 'react';
import './Cards.css';

function Cards({ category }) {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!category) return;

        const fetchRecipes = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
                const data = await response.json();
                setRecipes(data.meals || []);
            } catch (error) {
                console.error('Error fetching recipes:', error);
                setRecipes([]);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, [category]);

    if (loading) {
        return (
            <div className="recipe-cards-grid">
                {[...Array(6)].map((_, index) => (
                    <div key={index} className="recipe-card">
                        <div className="recipe-image loading-skeleton" />
                        <div className="recipe-content">
                            <div className="recipe-title loading-skeleton" style={{ width: '70%', height: '24px' }} />
                            <div className="recipe-category loading-skeleton" style={{ width: '40%', height: '16px' }} />
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (!category) {
        return (
            <div className="recipe-cards-grid empty-state">
                <p>Select a category to view recipes</p>
            </div>
        );
    }

    return (
        <div className="recipe-cards-grid">
            {recipes.map(recipe => (
                <div key={recipe.idMeal} className="recipe-card">
                    <img 
                        src={recipe.strMealThumb} 
                        alt={recipe.strMeal}
                        className="recipe-image"
                    />
                    <div className="recipe-content">
                        <h3 className="recipe-title">{recipe.strMeal}</h3>
                        <div className="recipe-category">{category}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cards;
