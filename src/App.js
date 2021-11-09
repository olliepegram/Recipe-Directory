import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Recipe from './pages/recipes/Recipes';

import './App.css';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/create' element={<Create />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/recipe/:id' element={<Recipe />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
