import { Link, useLocation } from "react-router-dom";


// компонент отрисовывает карточку с едой
function ItemMeal(props) {

    // хук useLocation используется для определения текущего url
    const url = useLocation();

    // диструктурируем полученный из props объект
    const {idMeal, strMeal, strMealThumb} = props.item;
    

    return(
        <div className="card">
            <div className="card-image">
                <img src={strMealThumb} />
            </div>
            <div className="card-content">
                <span className="card-title"><b>{strMeal}</b></span>
                {/* <p>{strCategoryDescription.slice(0, 70)}...</p> */}
                
            </div>

            {/* используем компонент Link, для навигации между страницами без перезагрузки */}
            <Link to={`/meal/${idMeal}`} className="btn">Watch reciepe</Link>
      </div>
    )
}

export default ItemMeal;