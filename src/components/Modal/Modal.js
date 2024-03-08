import React from 'react';
import './Modal.css';
export default function Modal( {children} ) {
    return (
        <div className='modal'>
            <div className='modal__content'>
                {children}
            </div>
        </div>    
    )
}