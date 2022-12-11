// CSS
import './App.css';

// Components
import CarDetailsComponent from './components/CarDetailsComponent/CarDetailsComponent'

function App() {

  const car = [
    { id: 1, nome: 'Fiat', modelo: 'Palio', cor: 'Branco' },
    { id: 2, nome: 'Ford', modelo: 'Fiesta', cor: 'Vermelho' },
    { id: 3, nome: 'VW', modelo: 'Comodoro', cor: 'Preto' },
    { id: 4, nome: 'Audi', modelo: 'TT', cor: 'Amarelo' },
    { id: 5, nome: 'Mercedes', modelo: 'A', cor: 'Prata' },
    { id: 6, nome: 'Jeep', modelo: 'Renegate', cor: 'Verde' },
  ];

  return (
    <div className="App">
      
      <h1>Desafio 5</h1>

      { car.map((car) => (
        <CarDetailsComponent  
          key={car.id}
          nome={car.nome}
          modelo={car.modelo}
          cor={car.cor}
        />

      )) }

    </div>
  );
}

export default App;
