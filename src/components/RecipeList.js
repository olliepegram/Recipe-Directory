import { Link } from 'react-router-dom';
import './RecipeList.css';

export default function RecipeList({ recipes }) {
    if (recipes.length === 0) {
        return <div className='error'>No recipes to load...</div>;
    }

    return (
        <div className='recipe-list'>
            {recipes.map(({ id, title, cookingTime, method }) => (
                <div key={id} className='card'>
                    <h3>{title}</h3>
                    <p>{cookingTime} to make.</p>
                    <div>{method.substring(0, 100)}...</div>
                    <Link to={`/recipes/${id}`}>Cook This</Link>
                </div>
            ))}
        </div>
    );
}
