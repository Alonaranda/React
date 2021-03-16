import React from 'react'

export const Small = React.memo(({value}) => {
    console.log('Componente Small!');
    return (
        <small>
            {value}
        </small>
    )
});
