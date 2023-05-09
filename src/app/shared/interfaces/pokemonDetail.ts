import { IPokemonData } from './pokemon';

export interface IPokemonDetails {
    id: number,
    weight: number,
    stats: Array<IPokemonStats>,
    moves: Array<IPokemonMoves>,
    height: number,
    abilities: Array<IPokemonAbilities>,
    types: Array<IPokemonTypes>,
    sprites: IPokemonSprites,
    name: string
}

export interface IPokemonSprites {
    back_default: string;
    back_female: null;
    back_shiny: string;
    back_shiny_female: null;
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
    other?: IPokemonOther;
    versions?: any;
    animated?: any;
}

export interface IPokemonOther {
    dream_world: any;
    home: any;
    "official-artwork": IPokemonOfficialArtwork;
}

export interface IPokemonOfficialArtwork {
    front_default: string;
    front_shiny: string;
}

interface IPokemonStats {
    base_stat: number,
    effort: number,
    stat: IPokemonData
}

interface IPokemonMoves {
    move: IPokemonData,
    version_group_details: Array<IPokemonVersionGroupDetails>
}

interface IPokemonVersionGroupDetails {
    level_learned_at: 0,
    move_learn_method: IPokemonData,
    version_group: IPokemonData
}

interface IPokemonAbilities {
    ability: IPokemonData,
    is_hidden: boolean,
    slot: number

}

interface IPokemonTypes {
    slot: number,
    type: IPokemonData
}

