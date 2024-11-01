import {useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import data from "./assets/data/pokemon.json"

function App() {


	
	const [pokemonIndex, setPokemonIndex] =useState(0);
	const pokemonList = data;


	
	// bouton précédent

	const handlePreviousClick =()=> {

		if (pokemonIndex > 0) setPokemonIndex (pokemonIndex -1 ) }


	// bouton suivant

	const handleNextClick =()=> {

	 if (pokemonIndex < (pokemonList.length-1)) setPokemonIndex (pokemonIndex +1 ) }

	

return (

	<>
		<div>
		<PokemonCard pokemon={data[pokemonIndex]} />
		
		< button onClick={ handlePreviousClick}>Précédent</button>
  
 		 < button onClick={handleNextClick}>Suivant</button>



		</div>
	</>
	);
}

export default App; 