import type { pokemonType } from "../lib/definition";

function PokemonCard({ name, imgSrc }: pokemonType) {
	return (
		<figure>
			{imgSrc ? <img src={imgSrc} alt={name} /> : <p>???</p>}
			<figcaption>{name}</figcaption>
		</figure>
	);
}
 

export default PokemonCard;