import CategoryItem from './CategoryItem';


// компонент CategoryList принимает весь список категорий товаров и для каждого вызывает создаём отдельный компонент CategoryItem
function CategoryList(props) {

    // диструктурируем пришедшей объект
    const {catalog} = props;

    return(
        <div className='category-list'>
            {/* вызываем компонент CategoryItem для каждого из элементов массива catalog*/}
            {catalog.map(item => (
                <CategoryItem key={item.idCategory} {...item}/>
            ))}
        </div>
    )
    

}

export default CategoryList;