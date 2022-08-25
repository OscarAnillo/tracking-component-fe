
import './App.css';
import HeroImage from './components/hero-component';
import NavBar from './components/nav-component';

function App() {
  return (
    <div className="App">
      <div className="container">
        <NavBar />
        <HeroImage />
      </div>
    </div>
  );
}

export default App;
