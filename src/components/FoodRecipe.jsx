// импортируем отдельный css-модуль
import './helpers/FoodRecipe.css'


function FoodRecipe(props) {

    const {idMeal, strMeal, strCategory, strMealThumb, strArea, strInstructions, strYoutube} = props.foodRecipe
    
    // получаем последний символы из ютуб-ссылки и динамически вставляем в iframe. // N4EdUt0Ou48
    const strYout = strYoutube.slice(32);
    

    return(
        <div className="food-recipe">

            <img className="recipe-img" src={strMealThumb} alt={strMeal} />
            <h1>{strMeal}</h1>
            <h6><b>Category:</b> {strCategory}</h6>

            {/* делаем проверку для strArea, потому что часто этот ключ приходит с сервера пустой */}
            {strArea ? <h6><b>Area:</b> {strArea}</h6> : null}

            {/* описание блюда */}
            <h5 className='how-to-cook'>How to cook:</h5>
            <p>{strInstructions}</p>


            {/* создаём таблицу ингридиентов */}
            <table className='centered'>
                <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Measure</th>
                    </tr>
                </thead>

                <tbody>
                        {
                            // обходим ключи объекта props.foodRecipe
                            Object.keys(props.foodRecipe).map(key => {
                                // проверяем есть ли в ключе key слово Ingredient и не пустой ли значение в ключе key
                                if (key.includes('Ingredient') && props.foodRecipe[key]) {
                                    return(
                                        <tr key={key}>
                                            <td>{props.foodRecipe[key]}</td>
                                            <td>
                                                {/* динамически получшаем последние цифры key (strIngredient17) для сопоставления с strMeasure */}
                                                {props.foodRecipe[`strMeasure${key.slice(13)}`]}
                                            </td>
                                        </tr>
                                    )
                                }

                                return null;
                            }) 
                        }
                </tbody>
            </table>


            {/* видео ютуб */}
            {strYoutube ? (
                <div className='row'>
                    <h5 className='vidoe-recipe'><b>Video recipe:</b></h5>
                    {/* чтобы не использовать сторонние API ютуба, меняем watch на embed в ссылке на видео */}
                    <iframe  src={`https://www.youtube.com/embed/${strYout}`} frameborder="0" allow="autoplay; encrypted-media" allowFullScreen />
                </div>) 
            : null}
        </div>
    )
}

export default FoodRecipe;