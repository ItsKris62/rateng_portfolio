import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary';
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = 'button',
    variant = 'primary',
    className = '',
}) => {
    const baseStyles =
        'px-6 py-2 rounded text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2';

    const variants = {
        primary: 'bg-primary text-background hover:bg-accent focus:ring-accent',
        secondary: 'bg-secondary text-background hover:bg-accent focus:ring-accent',
    };

    return (
        <button
            onClick={onClick}
            type={type}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
