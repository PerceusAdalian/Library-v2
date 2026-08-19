import '../styles/App.css';
import Nav from '../components/Nav';
import Landing from '../components/Landing';
import Books from '../components/Books';
import Highlights from '../components/Highlights';
import Featured from '../components/Featured';
import DiscountedBooks from '../components/DiscountedBooks';
import Explore from '../components/Explore';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <main>
        <Highlights />
        <Featured />
        <Books />
        <DiscountedBooks />
        <Explore />
      </main>
      <Footer />
    </div>
  );
}

export default App;