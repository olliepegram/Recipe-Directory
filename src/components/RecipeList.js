import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { projectFirestore } from '../firebase/config';
import BinIcon from '../assest/delete-icon.svg';
import './RecipeList.css';

export default function RecipeList({ recipes }) {
    const { mode } = useTheme();

    if (recipes.length === 0) {
        return <div className='error'>No recipes to load...</div>;
    }

    const handleClick = (id) => {
        projectFirestore.collection('recipes').doc(id).delete();
    };

    return (
        <div className='recipe-list'>
            {recipes.map(({ id, title, cookingTime, method }) => (
                <div key={id} className={`card ${mode}`}>
                    <h3>{title}</h3>
                    <p>{cookingTime} to make.</p>
                    <div>{method.substring(0, 100)}...</div>
                    <Link to={`/recipes/${id}`}>Cook This</Link>
                    <img
                        src={BinIcon}
                        className='delete'
                        onClick={() => handleClick(id)}
                        alt='Delete this recipe'
                    />
                </div>
            ))}
        </div>
    );
}
