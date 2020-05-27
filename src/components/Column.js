import React from 'react';

function Column(props) {

    const customStyle ={
        height: props.height + 'px',
        backgroundColor: props.color
    }
    
    return(
        <div className="column" style= {customStyle}/>
    )
}

export default Column;