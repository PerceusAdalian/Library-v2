import '../styles/App.css';
import Nav from '../components/Nav';
import Header from '../components/Landing';
import Books from '../components/Books';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Books />
    </div>
  );
}

export default App;