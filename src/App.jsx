import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Card from "./components/Card.jsx";

function App() {
  return (
    <div className="bg-primary">
      <Header />
      <Hero />
      <section className="p-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        <Card title="Project 1" description="A cool React project I worked on." />
        <Card title="Project 2" description="A feature-rich app with animations." />
        <Card title="Project 3" description="Interactive UI portfolio." />
      </section>
    </div>
  );
}

export default App;
