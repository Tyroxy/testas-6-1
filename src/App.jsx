import './App.css';
import Jokes from './Components/Jokes';

function App() {
  return (
    <div className="App">
      <h1>Labas</h1>
        <Jokes></Jokes>

    </div>
  );
}

export default App;




// React uždavinys
// Susikurti react app’ą, kuriame iš šio API
// https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,e
// xplicit&amount=10 gautus duomenis patalpinti į komponentus.
// Kiekvienas komponentas turi atvaizduoti juokelį su setup ir delivery arba joke.
// Panaudoti css stilių, kuris padarytų UI gražesnį.



