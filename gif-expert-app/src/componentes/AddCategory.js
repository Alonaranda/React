import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setValue] = useState('');

    const handleInputText = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(cate => [inputValue, ...cate, ]);
            setValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
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
