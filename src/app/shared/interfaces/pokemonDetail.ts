import { IPokemonData } from './pokemon';

export interface IPokemonDetails {
    id: number,
    weight: number,
    stats: Array<IPokemonStats>,
    moves: Array<IPokemonMoves>,
    height: number,
    abilities: Array<IPokemonAbilities>,
    types: Array<IPokemonTypes>,
    sprites: object,
    name: string
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

