import '../Css/App.css';
import Navbar from './Navbar';
import Home from './Home';
import Services from './Services';
import Footer from './Footer';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Home />
        <Services />
        <Footer />
      </div>    
  );
}

export default App;
