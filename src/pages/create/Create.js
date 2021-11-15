import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { useTheme } from '../../hooks/useTheme';

import './Create.css';

export default function Create() {
    const [title, setTitle] = useState('');
    const [method, setMethod] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [newIngredient, setNewIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const ingredientInput = useRef(null);
    const { mode } = useTheme();
    const history = useNavigate();
    const { postData, data } = useFetch(
        'https://damp-spire-80492.herokuapp.com/recipes',
        'POST'
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        postData({
            title,
            ingredients,
            method,
            cookingTime: cookingTime + ' minutes',
        });
    };

    const handleAdd = (e) => {
        e.preventDefault();
        const ing = newIngredient.trim();

        if (ing && !ingredients.includes(ing)) {
            setIngredients((prevIngredients) => [...prevIngredients, ing]);
        }
        setNewIngredient('');
        ingredientInput.current.focus();
    };

    useEffect(() => {
        if (data) {
            history('/');
        }
    }, [data, history]);

    return (
        <div className={`create ${mode}`}>
            <h2 className='page-title'>Add a New Recipe</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    <span>Recipe title:</span>
                    <input
                        type='text'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                    />
                </label>
                <label>
                    <span>Recipe Ingredients:</span>
                    <div className='ingredients'>
                        <input
                            type='text'
                            onChange={(e) => setNewIngredient(e.target.value)}
                            value={newIngredient}
                            ref={ingredientInput}
                        />
                        <button onClick={handleAdd} className='btn'>
                            add
                        </button>
                    </div>
                </label>
                <p>
                    Current Ingredients:
                    {ingredients.map((i) => (
                        <em key={i}> {i}, </em>
                    ))}
                </p>
                <label>
                    <span>Recipe method:</span>
                    <textarea
                        onChange={(e) => setMethod(e.target.value)}
                        value={method}
                        required
                    />
                </label>
                <label>
                    <span>Cooking time (minutes):</span>
                    <input
                        type='number'
                        onChange={(e) => setCookingTime(e.target.value)}
                        value={cookingTime}
                        required
                    />
                </label>
                <button className='btn'>Submit</button>
            </form>
        </div>
    );
}
