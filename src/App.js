import React, {useState, useEffect} from 'react';
import Card from './pokemons/Card';
import './App.css';

//recibirá como parámetro el punto final
export async function getAllPokemon(url) {
  return new Promise((resolve) => {
      fetch(url)
          .then(res => res.json())
          .then(data => {
              resolve(data);
          })
  })
}
export async function getPokemon(url) {
  return new Promise((resolve) => {
      fetch(url)
          .then(res => res.json())
          .then(data => {
              resolve(data);
          })
  })
}
function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [previousUrl, setPreviousUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon?limit=8';

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl); 
      setNextUrl(response.next); 
      setPreviousUrl(response.previous); 
      let pokemon = await loadingPokemon(response.results); 
      console.log(pokemon);
      setLoading(false);
    }
    fetchData();
  }, []);
  
  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPreviousUrl(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if (!previousUrl) return;
    setLoading(true);
    let data = await getAllPokemon(previousUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPreviousUrl(data.previous);
    setLoading(false);
  }

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };
  // console.log(pokemonData);
  return (
    <>
      { loading ? <h1>Loading</h1> : (
        <>
          <div className="grid-container">
            {pokemonData.map((pokemon, i) => {
              return <Card key={i} pokemon={pokemon}/>
            })}
          </div>
          <div className="btn">
            <button onClick={prev}>←</button>
            <button onClick={next}>→</button>
          </div>
        </>
      )}
      
    </>
  ); 
}
export default App;
