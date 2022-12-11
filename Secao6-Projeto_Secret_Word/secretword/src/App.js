// Hoocks
import { useCallback, useEffect, useState } from 'react'

// Components
import StartScreen from './components/StartScreenComponent/StartScreen';
import Game from './components/GameComponent/Game';
import GameOver from './components/GameOverComponent/GameOver';

// CSS
import './App.css';

// Data
import { wordsList } from './data/words'

// Estágios de progrssão
const stages = [

  { id: 1, name: 'start' },

  { id: 2, name: 'game' },

  { id: 3, name: 'end' },

];

// const guessesQty = 3;

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState([]);

  const pickWordAndCategory = useCallback(() => {

    // pick a random category
    const categories = Object.keys(words);

    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return { category, word };

  }, [words]);

  // Starts the secret word game
  const startGame = useCallback(() => {

    // Clear all letters
    clearLetterStates();

    // pick word and pick category
    const { category, word } = pickWordAndCategory();

    // create an array of letters
    let wordLetters = word.split('');

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    // fill states
    setPickedCategory(category);

    setPickedWord(word);

    setLetters(wordLetters);

    setGameStage(stages[1].name);

  }, [pickWordAndCategory]);

  // Process letter input
  const verifyLetter = (letter) => {

    const normalizedLetter = letter.toLowerCase();

    // Check if letter has already been utilized
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {

      return;

    }

    // Push guessed letter or remove a guess
    if (letters.includes(normalizedLetter)) {

      setGuessedLetters((actualGuessedLetters) => [

        ...actualGuessedLetters,
        // normalizedLetter,
        letter,
      ]);
    }
    else {

      setWrongLetters((actualWrongLetters) => [

        ...actualWrongLetters,

        normalizedLetter,

      ]);

      setGuesses((actualGuesses) => actualGuesses - 1)

    };

  };

  // Restarts the game
  const retry = () => {

    setScore(0);

    setGuesses(3);

    setGameStage(stages[0].name);

  };

  // Clear letters state
  const clearLetterStates = () => {

    setGuessedLetters([]);

    setWrongLetters([]);

  };

  // Check if guesses ended
  useEffect(() => {

    if (guesses === 0) {

      // Reset all states
      clearLetterStates();

      setGameStage(stages[2].name)

    }

  }, [guesses]);

  // Check win condition
  useEffect(() => {

    const uniqueLetters = [...new Set(letters)];

    // Win condition
    if (guessedLetters.length === uniqueLetters.length && gameStage === stages[1].name) {

      // Add score
      setScore((actualScore) => actualScore += 100);

      // Restart game with new word
      startGame();

    }


  }, [guessedLetters, letters, startGame, gameStage]);

  return (

    <div className="App">

      {gameStage === 'start' && <StartScreen startGame={startGame} />}

      {gameStage === 'game' && (

        <Game

          verifyLetter={verifyLetter}

          pickedWord={pickedWord}

          pickedCategory={pickedCategory}

          letters={letters}

          guessedLetters={guessedLetters}

          wrongLetters={wrongLetters}

          guesses={guesses}

          score={score}

        />

      )}

      {gameStage === 'end' &&

        <GameOver

          retry={retry}

          score={score}

        />

      }

    </div>
  );
};

export default App;
