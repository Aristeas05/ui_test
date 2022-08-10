import React from 'react';

const AT_RY_Button = (props) => {

    return (
        <div className='at_ry_component'>
            <button onClick={props.onClick} className={props.style}>
                {props.text}
            </button>
        </div>
    );
}

export default AT_RY_Button;