// CSS
import './App.css';

// Images
import City from './assets/city.jpg';

// hoocks
import { useState } from 'react';

// Componentes
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';



function App() {

  const name = 'Dalva';  
  const [userName] = useState('Sushi')

  const cars = [
    { id: 1, brand: 'Camaro', color:'vermelho', newCar: true, km: 0 },
    { id: 2, brand: 'Mustangue', color:'amarelo', newCar: false, km: 110 },
    { id: 3, brand: 'Audi', color:'prata', newCar: false, km: 550 }
  ];

  function showMessage() {
    console.log('evento do component pai!');
  }

  const [message, setMessage] = useState('');
  
  const hadleMessage = (msg) => {
    setMessage(msg);
  };

  const pessoas = [
    {id: 1, nome: 'Leonardo', idade: '38', profissao: 'Técnico em Enfermagem'},
    {id: 2, nome: 'Dalva', idade: '60', profissao: 'Técnica em Enfermagem'},
    {id: 3, nome: 'Jennifer', idade: '17', profissao: 'Estudante'},
  ]

  return (
    <div className="App">
      <h1>Avançando em React</h1>

      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      {/* Imagem em assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>

      <ManageData />
      <ListRender />
      <ConditionalRender />

      {/* Forma de passagem de props */}
      <ShowUserName name='Leonardo' />
      <ShowUserName name={name} />
      <ShowUserName name={userName} />

      {/*Destructuring */}
      <CarDetails brand='VW' km={10000} color='Azul' newCar={false} />

      {/* Reaproveitamento de componentes */}
      <CarDetails brand='Ford' km={0} color='Vermelho' newCar={true} />
      <CarDetails brand='Fiat' km={400} color='Branco' newCar={false} />

      {/* Loop em array de objetos */}
      { cars.map((car) => (
        <CarDetails 
          key={car.id}
          brand={car.brand} 
          km={car.km} 
          color={car.color}
          newCar={car.newCar} 
        />
      )) }

      {/* Fragment */}
      <Fragment propFragment='teste' />

      {/* Children */}
      <Container myValue='testing'>
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue='testing 2'>
        <p>Testando container</p>
      </Container>

      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />

      {/* State lift */}
      <Message msg={message} />
      <ChangeMessageState hadleMessage={hadleMessage} />

      {/* Desafio 4 */}
      { pessoas.map((p) => (
        <UserDetails 
          key={p.id}
          nome={p.nome}
          idade={p.idade}
          profissao={p.profissao}
        />
      )) }

    </div>
  );
}

export default App;
