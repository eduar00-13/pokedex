import React from 'react';
import './style.css';

const pokemonColors = {
    bug: '#729f3f',
    dragon: '#53a4cf',
    fairy: '#fdb9e9',
    fire: '#fd7d24',
    ghost: '#7b62a3',
    ground: '#f7de3f',
    normal: '#a4acaf',
    pyschic: '#f366b9',
    steel: '#9eb7b',
    dark: '#707070',
    electric: '#eed535',
    fighting: '#d56723',
    flying: '#3dc7ef',
    grass: '#9bcc50',
    ice: '#51c4e7',
    poison: '#b97fc9',
    rock: '#a38c21',
    water: '#4592c4'
}

function Card({ pokemon }) {
    return (
        <div className="Card">
            <div className="Card__img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="Card__name">
                {pokemon.name}
            </div>
            <div className="Card__types">
                {
                    pokemon.types.map(type => {
                        return (
                            <div className="Card__type" 
                            style={{ backgroundColor: pokemonColors[type.type.name] }}>
                                {type.type.name}
                            </div>
                        )
                    })
                }
            </div>
            <div className="Card__info"> 
            <div className="Card__data">
                    <p className="title">Id = {pokemon.id}</p>   
                </div>
                <div className="Card__data">
                    <p className="title">Experience = {pokemon.base_experience}</p>
                </div>
                <div className="Card__data">
                    <p className="title">Hp</p>
                    <p className="base_stat">{pokemon.stats[0].base_stat}</p>
                </div>
                <div className="Card__data">
                    <p className="title">Weight</p>
                    <p>{pokemon.weight}</p>
                </div>
                <div className="Card__data">
                    <p className="title">Height</p>
                    <p>{pokemon.height}</p>
                </div>
                <div className="Card__data">
                    <p className="title">Ability</p>
                    <p className="ability">{pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
        </div>      
    );
}
export default Card;
