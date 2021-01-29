import React from 'react'

const Cards = (props) => {
    return (
        <>
        <div className="card media">
            <div className="details">
            <h2>{props.name}</h2>
            <p>{props.para}</p>
            </div>
            <div className="img_fluid">
            <img src={props.imgsrc} />
            </div>
        </div>
        </>
    )
}

export default Cards;



