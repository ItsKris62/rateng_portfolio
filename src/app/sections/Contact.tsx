import emailjs from 'emailjs-com';

export default function Contact() {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_id', 'template_id', e.target, 'user_id').then(
            (result) => console.log(result.text),
            (error) => console.log(error.text)
        );
    };

    return (
        <section id="contact" className="p-8 bg-accent text-background">
            <h2 className="text-3xl font-fredericka">Contact Me</h2>
            <form onSubmit={sendEmail} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-2 bg-background border border-primary rounded"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-2 bg-background border border-primary rounded"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    className="w-full p-2 bg-background border border-primary rounded"
                ></textarea>
                <button
                    type="submit"
                    className="px-4 py-2 bg-primary text-background rounded hover:bg-secondary"
                >
                    Send
                </button>
            </form>
        </section>
    );
}
