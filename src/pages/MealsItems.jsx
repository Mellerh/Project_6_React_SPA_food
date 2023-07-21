import { useState, useEffect } from "react";
import { getFilteredCategories } from '../api';
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

import MealsItem from '../components/MealsItem';
import Preloader from "../components/Preloader";


// компонент-страница для перечня еды из одной выбранной категории
function MealsList() {

    const [mealItems, setMealItems] = useState([]);

    // поулчаем динамическое значение из (:mealItem) <Route  path='/category/:mealItem' element={<MealsItems />} />
    const value = useParams();

    
    // создаём хук навигации по страницам (вперёд/назад)
    const navigate = useNavigate();


    // делаем запрос на сервер с конкретной категорией товара
    useEffect(() => {
        getFilteredCategories(value.mealItem).then(data => setMealItems(data.meals))
    }, [value])


    return(
        <div className="home-page">
            <Link onClick={() => {navigate(-1)}} className="btn">Go back</Link>

            {!mealItems.length ? <Preloader /> : <MealsItem mealItems={mealItems} />}
        </div>
    )
}

export default MealsList;