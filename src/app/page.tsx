import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Certificates from './sections/Certificates';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ScrollObserver from './components/ScrollObserver';

export default function Page() {
    return (
        <ScrollObserver>
            {/* Header */}
            <Header />

            {/* Main Sections */}
            <main className="mt-16"> {/* Add padding to account for the sticky header */}
                <Hero />
                <About />
                <Experience />
                <Certificates />
                <Projects />
                <Contact />
            </main>

            {/* Footer */}
            <Footer />
        </ScrollObserver>
    );
}
