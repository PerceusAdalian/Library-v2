import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Vault from './pages/Vault';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vault" element={<Vault />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;