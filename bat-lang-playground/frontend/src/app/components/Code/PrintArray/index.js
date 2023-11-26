import React from 'react';

const PrintArray = (props) => {
    const {array} = props
    return (
        <div>
            [
                <span> </span>
            {
                array && props.array.map((elem, i) => {
                    return(
                        <span key={i}>{elem} </span>   
                    )
                    
                })
            }
            ]
        </div>
    );
};

export default PrintArray;