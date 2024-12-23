import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Header() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Certificates', href: '#certificates' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-primary text-background z-50 shadow-lg">
            <div className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4">
                {/* Animated Name */}
                <motion.h1
                    className="text-2xl font-fredericka"
                    initial={{ opacity: 0 }}
                    animate={isMounted ? { opacity: 1 } : {}}
                    transition={{
                        duration: 1,
                        ease: 'easeInOut',
                    }}
                >
                    <motion.span
                        initial={{ width: 0 }}
                        animate={isMounted ? { width: 'auto' } : {}}
                        transition={{
                            delay: 0.5,
                            duration: 2,
                            ease: 'easeInOut',
                        }}
                        className="inline-block overflow-hidden whitespace-nowrap"
                    >
                        Your Name
                    </motion.span>
                </motion.h1>

                {/* Navigation Links */}
                <nav>
                    <ul className="flex space-x-6 text-lg font-raleway">
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
                    </ul>
                </nav>
            </div>
        </header>
    );
}
