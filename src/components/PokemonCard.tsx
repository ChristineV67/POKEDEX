import type { pokemonType } from "../lib/definition";


function PokemonCard(pokemon : pokemonType){


  
    return (
      <figure>

        {pokemon.imgSrc ? (
          <img 
            src={pokemon.imgSrc} 
            alt={pokemon.name} 
          />
        ) : (
          <p>???</p>
        )}

<figcaption>{ pokemon.name}</figcaption>

      </figure>
    );
  };
  
  export default PokemonCard;
  
  