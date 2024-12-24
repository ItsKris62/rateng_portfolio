import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Scrollspy from 'react-scrollspy';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    // Shrink header on scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Certificates', href: '#certificates' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 bg-primary text-background shadow-lg transition-all duration-300 ${
                isScrolled ? 'py-2' : 'py-4'
            }`}
        >
            <div className="flex justify-between items-center max-w-6xl mx-auto px-6">
                {/* Animated Name */}
                <motion.h1
                    className="text-2xl font-fredericka"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: 'auto' }}
                        transition={{ delay: 0.5, duration: 2 }}
                        className="inline-block overflow-hidden whitespace-nowrap"
                    >
                        Christopher Rateng
                    </motion.span>
                </motion.h1>

                {/* Navigation Links */}
                <nav>
                    <Scrollspy
                        items={navLinks.map((link) => link.href.substring(1))} // IDs from nav links
                        currentClassName="text-accent font-bold"
                        className="flex space-x-6 text-lg font-raleway"
                    >
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="hover:text-accent transition-colors duration-300"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </Scrollspy>
                </nav>
            </div>
        </header>
    );
}
