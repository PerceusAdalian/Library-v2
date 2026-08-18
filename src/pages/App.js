import '../styles/App.css';
import Nav from '../components/Nav';
import Landing from '../components/Landing';
import Books from '../components/Books';
import Highlights from '../components/Highlights';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <main>
        <Highlights />
        <section id="featured">
          <h2 className="section__title">
            Our Top Reads
          </h2>
        </section>
        <section id="recent">
          <h2 className="section__title">
            Recommended <span className="text--blue">Books</span>
          </h2>
          <Books />
        </section>
      </main>
    </div>
  );
}

export default App;