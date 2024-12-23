import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section id="hero" className="relative h-screen bg-gradient-to-b from-green-200 to-primary">
            <div className="flex flex-col items-center justify-center h-full text-center">
                <motion.img
                    src="/images/profile.jpg"
                    alt="Profile"
                    className="rounded-full w-32 h-32 mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                />
                <motion.h1
                    className="text-4xl font-fredericka text-background"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    Hi, I am Christopher Rateng
                </motion.h1>
                <motion.p
                    className="text-xl font-raleway text-muted"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    {`<Eco-Friendly IT Enthusiast />`}
                </motion.p>
            </div>
        </section>
    );
}
