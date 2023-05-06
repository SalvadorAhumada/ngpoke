import { IPokemonData } from "./pokemon";

export interface IResponsePokemon {
    count: number;
    next: string;
    previous: string;
    results: Array<IPokemonData>;
    }
    