import React from 'react'

export const GifGridItem = ({title,url}) => {

    //console.log(id, title, url);
    return (
        <div className="card animate__animated animate__bounce animate__delay-1s">
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}
