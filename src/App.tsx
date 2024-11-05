import {useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import data from "./assets/data/pokemon.json"
import type { pokemonType } from "./lib/definition";
import NavBar from "./components/NavBar";


const pokemonList : pokemonType[] = data;

function App() {
	const [pokemonIndex, setPokemonIndex] = useState(0);
	
	return (
		<div>
			<NavBar
				pokemonIndex={pokemonIndex}
				setPokemonIndex={setPokemonIndex}
				pokemonList={pokemonList}
			/>
			<PokemonCard
				name={pokemonList[pokemonIndex].name}
				imgSrc={pokemonList[pokemonIndex].imgSrc}
			/>
		</div>
	);
}

export default App;