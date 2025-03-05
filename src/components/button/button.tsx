import React, { useRef, useEffect } from 'react';
import './button.css';
import ButtonCtrl from './buttonCtrl';

const Button = ({
    text,                  // Button text
    backgroundColor,       // Background color
    width,                 // Button width
    height,                // Button height
    padding,               // Button padding
    margin,                // Button margin
    borderColor,           // Border color
    fontSize,              // Font size
    textColor,             // Text color
    hoverBackgroundColor,  // Background color on hover
    hoverTextColor,        // Text color on hover
    onClick,               // Custom click handler
    type,                  // Button type
    fontFamily,            // Font family
    fontWeight
}) => {
    const buttonRef = useRef(null);

    useEffect(() => {
        if (buttonRef.current) {
            new ButtonCtrl(buttonRef.current);
        }
    }, []);

    // Apply dynamic styles based on props
    const buttonStyle = {
        backgroundColor: backgroundColor || 'var(--button-bg)', // Fallback to CSS variable
        width: width || '0rem', // Default width
        height: height || '0rem', // Default height
        padding: padding || '0', // Default padding
        margin: margin || '0rem', // Default margin
        borderColor: borderColor || 'var(--button-stroke)', // Default border color
        fontSize: fontSize || '1.5rem', // Default font size
        color: textColor || 'var(--button-text)',// Default text color
        fontFamily: fontFamily, // Default font family
        fontWeight: fontWeight,
    };

    // Apply dynamic hover styles using CSS variables
    useEffect(() => {
        if (buttonRef.current) {
            const buttonElement = buttonRef.current;
            buttonElement.style.setProperty('--button-bg-hover', hoverBackgroundColor || 'var(--button-bg-hover)');
            buttonElement.style.setProperty('--button-text-hover', hoverTextColor || 'var(--button-text-hover)');
        }
    }, [hoverBackgroundColor, hoverTextColor]);

    return (

            <button
                className="button"
                ref={buttonRef}
                style={buttonStyle}
                onClick={onClick} 
                type={type || 'button'}
            >
                <span className="button__text">
                    <span className="button__text-inner">{text || 'Default'}</span>
                </span>
            </button>

    );
};

export default Button;