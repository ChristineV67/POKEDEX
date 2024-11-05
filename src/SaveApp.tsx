import {useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import data from "./assets/data/pokemon.json"
import type { pokemonType } from "./lib/definition";

  
  
function App() {

const pokemonList : pokemonType[] = data;

const [pokemonIndex, setPokemonIndex] = useState(0);



return (


<div>

<nav> 
{pokemonList.map(item=> <button type= "button" key={item.name}> {item.name} </button>)}

</nav>	
<PokemonCard item={pokemonList[pokemonIndex]} />	 
</div>

);

}

export default App;