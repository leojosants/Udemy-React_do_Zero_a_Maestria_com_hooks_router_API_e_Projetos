
// 5 - desestruturando props
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring ";

// 4 - importação de component
import FirstComponent from "./components/FirstComponent";
import State from "./components/State";

import { createContext } from "react";
import Context from "./components/Context";

// 
type textOrNull = string | null;
type fixed = 'isso' | 'ou' | 'aquilo';

// 
interface IAppContext {
  language: string,
  framework: string,
  projects: number,
};

export const AppContext = createContext<IAppContext | null>(null);

// 
function App() {

  // 1 - variaveis
  const name: string = 'Leonardo';
  const age: number = 38;
  const isWorking: boolean = true;

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`
  };

  const myText: textOrNull = 'Tem algum texto aqui';

  let mySecondText: textOrNull = null;
  // mySecondText = 'teste';

  const testeFixed1: fixed = 'isso';
  const testeFixed2: fixed = 'ou';
  const testeFixed3: fixed = 'aquilo';

  const contextValue: IAppContext = {
    language: 'JavaScript',
    framework: 'Express',
    projects: 5,
  };

  // 
  return (

    <AppContext.Provider value={contextValue}>

      <div className="App">

        <h1>TypeScript com React</h1>

        <h2>Nome: {name}</h2>

        <p>Idade: {age}</p>

        {
          isWorking && (
            <p>Está Trabalhando</p>
          )
        }

        <h3>{userGreeting(name)}</h3>

        <FirstComponent />

        <SecondComponent name='segundo' />

        <Destructuring
          title='Primeiro post'
          content="Conteúdo"
          commentsQty={10}
          tags={['tag1', 'tag2', 'tag3']}
          category={Category.JS}
        />

        <Destructuring
          title='Primeiro post'
          content="Conteúdo"
          commentsQty={10}
          tags={['tag1', 'tag2', 'tag3']}
          category={Category.P}
        />

        <Destructuring
          title='Primeiro post'
          content="Conteúdo"
          commentsQty={10}
          tags={['tag1', 'tag2', 'tag3']}
          category={Category.JS}
        />

        <State />

        {
          myText &&
          <p>Tem um texto na variável</p>
        }

        {
          mySecondText &&
          <p>Tem um texto na variável</p>
        }

        <Context />
        
      </div>

    </AppContext.Provider>

  );
}

export default App;
