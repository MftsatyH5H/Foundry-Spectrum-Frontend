import React from 'react'

interface SidebarToggleButtonProps {
    isOpen: boolean;
    onToggle: () => void;
}

function SidebarToggleButton({ isOpen, onToggle }: SidebarToggleButtonProps) {
    return (
        <button
            onClick={onToggle}
            className={`absolute top-1/2 right-4 z-50 w-12 h-12 rounded-full shadow-lg transition-all duration-300 transform -translate-y-1/2 ${
                isOpen 
                    ? 'bg-mediumPurple hover:bg-purple opacity-70 hover:opacity-100' 
                    : 'bg-foundryyellow hover:bg-yellow-400 opacity-70 hover:opacity-100'
            } flex items-center justify-center group`}
            style={{ 
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
        >
            {/* Arrow Icon */}
            <svg 
                className={`w-5 h-5 transition-transform duration-300 ${
                    isOpen ? 'text-white' : 'text-darkPurple rotate-180'
                }`}
                fill="currentColor" 
                viewBox="0 0 20 20"
            >
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
            </svg>
        </button>
    )
}

export default SidebarToggleButton
