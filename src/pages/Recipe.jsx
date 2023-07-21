import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { getMealBId } from '../api';

import Preloader from "../components/Preloader";
import FoodRecipe from '../components/FoodRecipe';

// компонент-страница для подробного описания конкретного продукта
function Recipe() {

    const [foodRecipe, setFoodRecipe] = useState({});

    // получаем динамическое значение из <Route path='/meal/:mealId' element={<Recipe />} />
    const value = useParams();
    

    // navigate - функция для маршрутизация между страницами (вперёд/назад)
    const navigate = useNavigate();


    // при каждом новом id, который приходит в value, делаем новый запрос на сервер с новым id еды
    useEffect(() => {
        getMealBId(value.mealId).then(data => setFoodRecipe(data.meals[0]));
    }, [value])


    return(
        <>
            <Link onClick={() => {navigate(-1)}} className="btn" style={{marginBottom: '0.5rem'}}>Go back</Link>
            
            {/* если ключа idMeal в объект foodRecipe нет, то выводим Preloader */}
            {!('idMeal' in foodRecipe) ? <Preloader /> : <FoodRecipe key={foodRecipe.idMeal} foodRecipe={foodRecipe}/>}
        </>
    )
}

export default Recipe;