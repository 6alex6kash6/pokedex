import React from 'react';

const PokeData = ({ abilities, avatar, height, id, name, type }) => {
    return (
        <div className="card">
            <h2>{name}</h2>
            <div>
                <img src={avatar} alt="pokemon" className="card-img-top" />
            </div>
            <div>
                <div>№ <span>{id}</span></div>
                <div>Type {type.map(item => {
                    return (
                        <div className='type' style={{ background: `var(--type-${item})` }} key={item}>{item}</div>
                    )
                })}</div>
                <div>Height <span>{height}'</span></div>
                <div>Abilities
                    <div>
                        {abilities.map((item, i) => {
                            return (
                                <p key={item}><span>{i + 1}.</span>{item}</p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokeData