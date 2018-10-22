import React from 'react';
import image from '../static/img/empty.png';

const CartEmpty = () => {
    return (
        <div className='cart'>
            <img src={image} width="164" alt={"empty cart"} />
        </div>
    );
}

export default CartEmpty; 