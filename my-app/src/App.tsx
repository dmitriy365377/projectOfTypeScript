import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

interface IResponseData {
  count: number;
  next: string | null,
  previous: string | null,
  results: {
    name: string,
    url: string
  }[];
}

interface IPokemon {
  id: number;
  name: string;
}

let tuple: [string, number] = ['str', 1]

// https://pokeapi.co/api/v2/pokemon?offset=0&limit=12

// function f<T>(x: T): Promise<T[]> {
//   const arr = Array(10).fill(0).map(_ => x);
//   return Promise.resolve(arr);
// }

// f(10).then(x => console.log(x));
// @types/node-fetch
function fetchPokemons(page: number): Promise<IPokemon[]> {
  return fetch(`https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 12}&limit=12`)
  .then(response => response.json())
  .then(data => data as IResponseData)
  .then(data => data.results.map(el => ({
    name: el.name,
    id: Number(el.url.slice(34, -1))
  })));
}
// npm install --save typescript @types/node @types/react @types/react-dom @types/jest

// fetchPokemons(5).then(x => console.log(x));

function App() {
  const [page,setPage] = useState<number>(1)
  const [pokemons, setPokemons] = useState<IPokemon[]>([])

  useEffect(() => {
    fetchPokemons(page).then(setPokemons);
  }, [page]);



  const changePage = (e: React.MouseEvent<HTMLElement>) => {
    const { dir } = e.currentTarget.dataset
    setPage((prev) => {
      if(dir === "prev") {
        return prev - 1
      } else {
        return prev + 1
      }
    })
  }

  return (
    <>
      <div className="App">
        {pokemons.map((pockemon) => <div key={pockemon.id}>{pockemon.name}</div>)}
      </div>
      <button disabled={page === 1} data-dir="prev" onClick={changePage}>Prev Page</button>
      <button data-dir="next" onClick={changePage}>Next Page</button>
    </>
  );
}

export default App;
