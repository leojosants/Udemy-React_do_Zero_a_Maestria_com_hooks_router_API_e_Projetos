// CSS
import './App.css';

// Hoocks

// Components
import MyForm from './components/MyFormComponent/MyForm';


function App() {
  return (
    <div className="App">

      <h1>Forms </h1>

      <MyForm
        user={{
          name: 'Leonardo',
          email: 'leonardo@gmail.com',
          bio: 'Estudante',
          role: 'adm'
        }} />

    </div>
  );
}

export default App;