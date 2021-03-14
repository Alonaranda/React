import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setValue] = useState('');

    const handleInputText = (e) => {
        setValue(e.target.value);
        //console.log('Change', inputValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('Submit!', inputValue);
        if(inputValue.trim().length > 2){
            setCategories(cate => [inputValue, ...cate, ]);
            setValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputText}
                placeholder='Buscado tu Gif'
            ></input>
        </form>
        
    )
}

//PropTypes
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
