import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import './styles/App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Vault from './pages/Vault';
import { books } from "./data";
import BookInfo from './pages/BookInfo';
import ScrollToTop from './components/ScrollToTop';
import ContactModal from './components/ContactModal';
import Cart from './pages/Cart';

function BookInfoWithKey({ books }) {
    const { id } = useParams();
    return <BookInfo key={id} books={books} />;
}

function App() {
  return (
    <Router basename="/Library-v2">
      <div className="App">
        <ScrollToTop />
        <Nav />
        <ContactModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/vault/:id" element={<BookInfoWithKey books={books} />} />
          <Route path="/cart" element={<Cart books={books}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;