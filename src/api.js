import { API_URL } from './config';
console.log(API_URL);

// метод для получения данных о товаре по его id. используем асинхронные функции
const getMealBId = async (mealId) => {
    const response = await fetch(API_URL + 'lookup.php?i=' + mealId);
    return await response.json();
};
// пример - www.themealdb.com/api/json/v1/1/lookup.php?i=52772



// метод для получения всех категорий с едой
const getAllCategories = async () => {
    const response = await fetch(API_URL + 'categories.php');
    return await response.json();
}


// метод для точечного поиска по категориям
const getFilteredCategories = async (catName) =>{
    const response = await fetch(API_URL + `filter.php?c=${catName}`);
    return await response.json();
}
// пример - www.themealdb.com/api/json/v1/1/filter.php?c=Seafood


export { getMealBId, getAllCategories, getFilteredCategories };