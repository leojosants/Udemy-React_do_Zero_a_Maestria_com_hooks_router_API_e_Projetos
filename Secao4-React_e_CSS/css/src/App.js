// Hoocks
import { useState } from 'react';

// CSS
import './App.css';

// Components
import MyComponent from './components/MyComponent/MyComponent';
import TitleComponent from './components/TitleComponent/TitleComponent';


function App() {

  const n = 15;
  const [name] = useState('Leonardo');
  const redTitle = true;

  return(

    <div className="App">

      {/* CSS global */}
      <h1>React com CSS</h1>

      {/* CSS de componente */}
      <MyComponent />
      <p>Este é o parágrado do componente App.js</p>

      {/* Inline CSS */}
      <p 
        style={{ 
          color: 'blue', 
          padding: '25px', 
          borderTop: '2px solid red' 
        }}
      >
        Este elemento foi estilizado de forma inline, que deve ser evitado, visando melhor performace
      </p>

      {/* Inline style dinâmico */}
      <h2
        style={ n < 10 ? ({color: 'purple'}) : ({color: 'pink'}) }  
      >CSS dinâmico</h2>
      <h2
        style={ n > 10 ? ({color: 'purple'}) : ({color: 'pink'}) }  
      >CSS dinâmico</h2>
      <h2
        style={ name === 'Leonardo' ? ({color: 'green', background: 'black'}) : null }  
      >CSS dinâmico</h2>

      {/* Classe dinâmica */}
      <h2 className={ redTitle ? 'red-title' : 'title' }>Esse texto terá uma classe dinâmica</h2>

        {/* CSS Modules */}
        <TitleComponent />

    </div>

  );

};

export default App;