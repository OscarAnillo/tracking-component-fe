
import './App.css';
import HeroImage from './components/hero-component';
import NavBar from './components/nav-component';
import TextComponent from './components/text-component';

function App() {
  return (
    <div className="App">
      <div className="container">
        <NavBar />
        <HeroImage />
        <TextComponent />
      </div>
    </div>
  );
}

export default App;
