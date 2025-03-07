import React, { useRef, useEffect, CSSProperties } from 'react';
import './button.css';
import ButtonCtrl from './buttonCtrl';

interface ButtonProps {
    text?: string;                  // Button text
    backgroundColor?: string;       // Background color
    width?: string;                 // Button width
    height?: string;                // Button height
    padding?: string;               // Button padding
    margin?: string;                // Button margin
    borderColor?: string;           // Border color
    fontSize?: string;              // Font size
    textColor?: string;             // Text color
    hoverBackgroundColor?: string;  // Background color on hover
    hoverTextColor?: string;        // Text color on hover
    onClick?: () => void;           // Custom click handler
    type?: 'button' | 'submit' | 'reset'; // Button type
    fontFamily?: string;            // Font family
    fontWeight?: string | number;   // Font weight
}

const Button: React.FC<ButtonProps> = ({
    text,
    backgroundColor,
    width,
    height,
    padding,
    margin,
    borderColor,
    fontSize,
    textColor,
    hoverBackgroundColor,
    hoverTextColor,
    onClick,
    type,
    fontFamily,
    fontWeight
}) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (buttonRef.current) {
            new ButtonCtrl(buttonRef.current);
        }
    }, []);

    // Apply dynamic styles based on props
    const buttonStyle: CSSProperties = {
        backgroundColor: backgroundColor || 'var(--button-bg)', // Fallback to CSS variable
        width: width || '0rem', // Default width
        height: height || '0rem', // Default height
        padding: padding || '0', // Default padding
        margin: margin || '0rem', // Default margin
        borderColor: borderColor || 'var(--button-stroke)', // Default border color
        fontSize: fontSize || '1.5rem', // Default font size
        color: textColor || 'var(--button-text)', // Default text color
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