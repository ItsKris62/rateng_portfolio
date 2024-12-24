import React, { createContext, useContext, useEffect, useState } from 'react';

interface ScrollContextProps {
    currentSection: string | null;
}

const ScrollContext = createContext<ScrollContextProps>({ currentSection: null });

export const useScroll = () => useContext(ScrollContext);

const ScrollObserver: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentSection, setCurrentSection] = useState<string | null>(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // 50% visibility
        };

        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setCurrentSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sectionElements = document.querySelectorAll('section');

        sectionElements.forEach((el) => observer.observe(el));

        return () => {
            sectionElements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <ScrollContext.Provider value={{ currentSection }}>
            {children}
        </ScrollContext.Provider>
    );
};

export default ScrollObserver;
