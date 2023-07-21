import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Layouts/Header';
import Footer from './Layouts/Footer';

import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import MealsList from './pages/MealsItems';
import Recipe from './pages/Recipe';


function App() {

    return(
        <>
            <BrowserRouter>

                <Header />
                
                    <main className='content container'>

                    

                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />

                                {/* страничка с множеством блюд одной категории */}
                                <Route path='/category/:mealItem' element={<MealsList />} />

                                {/* страничка для подробного описания конкретного блюда  */}
                                <Route path='/meal/:mealId' element={<Recipe />} />

                                {/* (*) - не валидный url */}
                                <Route path="*" element={<NotFound />} />
                            </Routes>

                    </main>

                <Footer />

            </BrowserRouter>
        </>

    )
}

export default App;