const certificates = [
    {
        title: 'HCIA - Datacom v1.0',
        image: '/images/certificate1.jpg',
    },
    {
        title: 'IBM - SQL and Relational Databases 101',
        image: '/images/certificate2.jpg',
    },
];

export default function Certificates() {
    return (
        <section
            id="certificates"
            className="py-16 px-6 bg-muted text-background text-center"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-fredericka mb-6">
                    Certificates
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certificates.map((cert, idx) => (
                        <div
                            key={idx}
                            className="relative p-4 bg-primary rounded-lg shadow hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="rounded"
                            />
                            <p className="mt-4 font-bold">{cert.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
