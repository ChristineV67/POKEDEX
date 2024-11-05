
import { NavBarType } from "../lib/definition";




  function NavBar({ setPokemonIndex, pokemonList }: NavBarType) {
    return (
      <>
        {pokemonList.map((pokemon, index) => {
          return (
            <button
              type="button"
              key={pokemon.name}
              onClick={() => {
                setPokemonIndex(index);
              }}
            >
              {pokemon.name}
            </button>
          );
        })}
      </>
    );
  }
  export default NavBar;