import { IPokemon } from "./pokemon";

export interface IResponsePokemon {
    count: number;
    next: string;
    previous: string;
    results: Array<IPokemon>;
    }
    