const projects = [
    {
        title: 'Network Optimization Tool',
        description: 'A tool to monitor and optimize network performance.',
        image: '/images/project1.jpg',
    },
    {
        title: 'Inventory Management System',
        description: 'A system to track IT hardware and software inventory.',
        image: '/images/project2.jpg',
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="py-16 px-6 bg-accent text-background"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-fredericka mb-6 text-center">
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="p-4 bg-primary rounded-lg shadow hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="rounded"
                            />
                            <h3 className="mt-4 text-xl font-bold">
                                {project.title}
                            </h3>
                            <p className="mt-2">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
