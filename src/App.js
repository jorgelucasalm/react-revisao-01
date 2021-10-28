import "./App.css";
import Navbar from "./components/navbar";
import Bulbassaur from './assets/001Bulbassauro.png'

function App() {
  return (
    <>
      <Navbar />
      <h1>Galeria de imagens</h1>
      <p>Aqui você encontra as imagens mais diversas</p>
      <div className="container">
        <div className="card">
          <img src={Bulbassaur} alt="" />
          <h2>Bulbassauro</h2>
          <p>Pokemon da primeira geração</p>
        </div>
        <div className="card">
          <img src={Bulbassaur}  alt="" />
          <h2>Bulbassauro</h2>
          <p>Pokemon da primeira geração</p>
        </div>
        <div className="card">
          <img src={Bulbassaur}  alt="" />
          <h2>Bulbassauro</h2>
          <p>Pokemon da primeira geração</p>
        </div>
      </div>
      <h2>Galeria</h2>
      <p>Galeria feita por Jorge Lucas</p>
    </>
  );
}

export default App;
