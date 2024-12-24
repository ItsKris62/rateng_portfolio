import { motion } from 'framer-motion';

const experiences = [
    {
        title: 'IT Support Technician',
        company: 'Royal Media Services',
        duration: '10/2020 – 08/2023',
        details: [
            'Managed user accounts and access controls using Active Directory.',
            'Optimized network performance through Layer 3 switch configuration.',
            'Implemented and maintained IP PBX systems.',
        ],
    },
    {
        title: 'IT Support Intern',
        company: 'East African Breweries Limited',
        duration: '04/2019 – 06/2019',
        details: [
            'Deployed new hardware and software, ensuring seamless integration.',
            'Resolved hardware and software issues promptly.',
            'Documented and reported major problems for system improvement.',
        ],
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="py-16 px-6 bg-secondary text-background"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-fredericka mb-6 text-center">
                    Experience
                </h2>
                <div className="space-y-8">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="p-4 bg-primary rounded shadow"
                        >
                            <h3 className="text-xl font-bold">
                                {exp.title} @ {exp.company}
                            </h3>
                            <p className="text-sm">{exp.duration}</p>
                            <ul className="mt-2 space-y-2 list-disc list-inside">
                                {exp.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
