import {useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import data from "./assets/data/pokemon.json"
import type { pokemonType } from "./lib/definition";

  
  
function App() {

const pokemonList : pokemonType[] = data;

const [pokemonIndex, setPokemonIndex] = useState(0);

const handleClick =()=> {

	if (pokemonIndex < (pokemonList.length-1)) setPokemonIndex (pokemonIndex +1 ) 
	PokemonCard.name}


return (


	<div>

{pokemonList.map(article => <PokemonCard article ={article} key={article.id}/> )}

		<nav> 
		    
		
			<button onClick={handleClick}>  </button>
		
		  </nav>	
		 
    
</div>

);

}

export default App;