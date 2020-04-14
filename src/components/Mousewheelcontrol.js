import React from 'react';
import Swiper from 'react-id-swiper';
import Slide from './slide'

const MousewheelControl = () => {
    const params = {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
        el: '.swiper-pagination',
        clickable: true
        }
    }
    return (
        <Swiper {...params}>
            <div style={{height: 100 + '%'}}>Slide #1</div>
            <div style={{height: 100 + '%'}}>Slide #2</div>
            <div style={{height: 100 + '%'}}>Slide #3</div>
            <div style={{height: 100 + '%'}}>Slide #4</div>
            <div style={{height: 100 + '%'}}>Slide #5</div>
        </Swiper>
    )
};

export default MousewheelControl;
