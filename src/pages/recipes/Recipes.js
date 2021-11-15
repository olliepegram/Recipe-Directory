import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { useTheme } from '../../hooks/useTheme';

import './Recipes.css';

export default function Recipes() {
    const { id } = useParams();
    const url = 'https://damp-spire-80492.herokuapp.com/recipes/' + id;
    const { data: recipe, isPending, error } = useFetch(url);
    const { mode } = useTheme();

    return (
        <div className={`recipe ${mode}`}>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {recipe && (
                <>
                    <h2 className='page-title'>{recipe.title}</h2>
                    <p>Takes {recipe.cookingTime}</p>
                    <ul>
                        {recipe.ingredients.map((ing) => (
                            <li key={ing}>{ing}</li>
                        ))}
                    </ul>
                    <p className='method'>{recipe.method}</p>
                </>
            )}
        </div>
    );
}
