import { useState, useEffect } from "react";
import { getAllCategories } from '../api';

import Preloader from '../components/Preloader';
import CategoryList from '../components/CategoryList';
import Search from '../components/Search';
import { useLocation, useNavigate } from "react-router";


function Home() {

    // создаём state для хрнания общего каталого товаров, пришедших с сервера
    const [catalog, setCatalog] = useState([]);

    // создаём дополнительный отфильтрованный каталог (через компонент Search)
    const [filteredCatalog, setFilteredCatalog] = useState([]);


    // useLocation сообщает нам текущий url.
    // const { pathname, search } = useLocation();

    // useNavigate позволяет добавить get-параметры в url
    // const navigate = useNavigate();
    


    // функция получает введённое пользователем значение из компонента Search и фильтрует перезаписывает отфильтрованные данные в filteredCatalog 
    const handleSearch = (str) => {
        setFilteredCatalog(catalog.filter(element => (
            element.strCategory.toLowerCase().includes(str.toLowerCase().trim())
        )));

        // используем функцию navigate для создания get-параметров. передаём в navigate текущий путь-pathname и добавялем get-параметр через ?search=
        // navigate({ pathname, search: `?search=${str.toLowerCase().trim()}`});

    }



    // делаем запрос всех категорий товаров при первом монтировании компонента Home
    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories);
            setFilteredCatalog(data.categories);

            // при монтировании, вызываем функцию getAllCategories из api.jsx. и сохраняем отфильтрованные, в зависимости от поисковой строки, значения в filteredCatalog
            
            });
    }, []);



    return (
        <div className="home-page">

            <Search callBack={handleSearch}/>


            {/* если длина catalog пустая, то вызываем Preloader*/}
            {!catalog.length? <Preloader /> : <CategoryList catalog={filteredCatalog}/>}
        </div>
    )
}

export default Home;