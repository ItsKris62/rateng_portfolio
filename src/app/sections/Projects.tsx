import Modal from '../components/Modal';

export default function Projects() {
    return (
        <section id="projects" className="p-8 bg-muted text-background">
            <h2 className="text-3xl font-fredericka">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative p-4 bg-primary rounded-lg hover:bg-secondary">
                    <h3>Project 1</h3>
                    <p>A short description.</p>
                </div>
                <div className="relative p-4 bg-primary rounded-lg hover:bg-secondary">
                    <h3>Project 2</h3>
                    <p>A short description.</p>
                </div>
            </div>
        </section>
    );
}
