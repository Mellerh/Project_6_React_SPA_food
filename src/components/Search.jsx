import { useState } from "react";

function Search({ callBack = Function.prototype }) {

    const [value, setValue] = useState('');


    // сохраняем введённое значение в input в state 
    const handleChange = (event) => {
        setValue(event.target.value)
    }
    

    // callBack - функция, которая спустилась из компонента Home. функия отправляет данные при нажатии на Enter, либо btn
    const handleSubmit = () => {
        callBack(value);
    }



    // при нажатии на Enter вызываем handleSubmit
    const handleInput = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
        
    } 

    // при нажатии на btn вызываем handleSubmit
    const handleBtn = () => {
        handleSubmit();
    }




    return(
        <div className="row">

            <input 
                className="input-field col s12"  
                onKeyDown={handleInput}
                onChange={handleChange}
                value={value}

                type="search" 
                placeholder="search">
            </input>

            <button
                className="btn"
                onClick={handleBtn}
            >Search</button>
        </div>
    )

}


export default Search;