import ItemMeal from './ItemMeal'

// компонент получает список всех блюд одной категории и вызывает для каждого отдельный компонент для отрисовки
function MealsItem( { mealItems } ) {
    
    return(
        <div className="category-list">
            {mealItems.map(item => (
                <ItemMeal key={item.idMeal} item={item}/>
            ))}
        </div>
    )

}

export default MealsItem;