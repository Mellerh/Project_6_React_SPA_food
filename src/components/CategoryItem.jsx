import { Link } from "react-router-dom";

function CategoryItem(props) {

    // диструктурируем props и эти значения вставляем в JSX-разметку
    const {idCategory, strCategory, strCategoryDescription, strCategoryThumb } = props;

    return(
        <div className="card">
            <div className="card-image">
                <img src={strCategoryThumb} />
            </div>
            <div className="card-content">
                <span className="card-title"><b>{strCategory}</b></span>
                <p>{strCategoryDescription.slice(0, 70)}...</p>
            </div>

            {/* используем компонент Link, для навигации между страницами без перезагрузки */}
            <Link to={`/category/${strCategory}`} className="btn">{strCategory}</Link>
      </div>
    )

}

export default CategoryItem;