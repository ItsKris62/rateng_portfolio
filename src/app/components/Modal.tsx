import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="bg-background p-6 rounded-lg shadow-lg max-w-lg w-full"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-primary hover:text-accent"
                >
                    &times;
                </button>
                {children}
            </motion.div>
        </div>
    );
};

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return {
        isOpen,
        openModal,
        closeModal,
    };
};

export default Modal;
