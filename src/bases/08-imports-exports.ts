import { heroes, type Hero, Owner } from "../data/heroes.data"



export const getHeroById = (id: number): Hero => {
    const hero = heroes.find( hero => hero.id === id );

    if (!hero) {
        throw new Error(`Hero con el id ${id} no existe`);
    }

    return hero;
}

export const getHeroesByOwner = ( owner : Owner ): Hero[]=> {
    return heroes.filter ( hero => hero.owner === owner);
}

