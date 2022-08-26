
import './App.css';
import HeroImage from './components/hero-component';
import NavBar from './components/nav-component';
import TextComponent from './components/text-component';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <HeroImage />
        <TextComponent />
      </div>
    </div>
  );
}

export default App;
