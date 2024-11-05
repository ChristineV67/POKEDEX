export type pokemonType = {

    name: string;
    imgSrc?:string;
    
};

export type NavBarType= {
    pokemonIndex: number;
    setPokemonIndex: (index: number) => void;
    pokemonList: pokemonType[];
  }