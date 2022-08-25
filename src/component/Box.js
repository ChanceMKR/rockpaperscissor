import React from 'react'

const Box = (props) => {
    let result;
    result = props.result
    if(props.title === 'COMPUTER' && props.result !== "tie"){
        result = props.result=="win"?"lose":"win";
    }

    return (
        <div className={result}>
            <h1>{props.title}</h1>
            <img className='item-img' src={props.item && props.item.img}/>
            <h2>{result}</h2>
        </div>
    )
}

export default Box
