import React from 'react';
import './PokeData.css'

const PokeData = ({ abilities, avatar, height, id, name, type }) => {
    return (
        <div className='poke-data'>
            <h2>{name}</h2>
            <div className='poke-data__wrapper'>
                <div className='poke-data__avatar'>
                    <img src={avatar} alt="pokemon" className="card-img-top" />
                </div>
                <div className='poke-data__meta'>
                    <div className='poke-data__id'><span className='poke-data__title'>№</span>  <span>{id}</span></div>
                    <div className='poke-data__type'><span className='poke-data__title'>Type</span>  {type.map(item => {
                        return (
                            <div className='type' style={{ background: `var(--type-${item})`, width: '90px' }} key={item}>{item}</div>
                        )
                    })}</div>
                    <div><span className='poke-data__title'>Height</span>  <span>{height}'</span></div>
                    <div className='poke-data__abilities'>
                        <span className='poke-data__title'>Abilities</span>
                        <div className='poke-data__abilities--text'>
                            {abilities.map((item, i) => {
                                return (
                                    <span key={item}><span>{i + 1}.</span>{item}</span>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokeData