import React from 'react'
import './Button.css'

const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Button = (
    {
        children,
        type, 
        onClick,
        btnStyle,
        btnSize
    }
) => {
    const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0]
    const checkBtnSize = SIZES.includes(btnStyle) ? btnSize : SIZES[0]

    return(
        <button 
            className={`btn ${checkBtnStyle} ${checkBtnSize}`} 
            onClick={onClick} type={type}
        >  
            {children}
        </button>
    )
}

export default Button;