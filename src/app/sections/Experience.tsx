import { motion } from 'framer-motion';

export default function Experience() {
    const experiences = [
        { title: "IT Support Technician", duration: "2020-2023", description: "Managed user accounts..." },
        { title: "IT Support Intern", duration: "2019", description: "Deployed operating systems..." },
    ];

    return (
        <section id="experience" className="p-8 bg-secondary text-background">
            <h2 className="text-3xl font-fredericka">Experience</h2>
            <div className="mt-8 space-y-8">
                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="p-4 bg-primary rounded-lg shadow-lg"
                    >
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-sm">{exp.duration}</p>
                        <p className="mt-2">{exp.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
