import React from 'react';
import '../App.css'

const Slide = (props) => {
    return (
        <div className="slide">
            {props.children}
        </div>
    )
}

export default Slide
