import React from 'react';

function GraphColumn(props) {

    const customStyle ={
        height: props.height + 'px',
        backgroundColor: props.color
    }
    
    return(
        <div className="column" style= {customStyle}/>
    )
}

export default GraphColumn;