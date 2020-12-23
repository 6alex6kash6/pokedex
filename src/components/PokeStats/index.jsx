import React, { useEffect, useState } from 'react';
import './PokeStats.css'

const PokeStats = ({ stats }) => {
    const PokeStatsItem = ({ statName, value, statPower }) => {
        return (
            <div className='poke-stat__item'>
                <span className='poke-stat__name'>{statName}</span>
                <span>{value}</span>
                <div className='poke-stat__visual--wrapper'>
                    <div className="poke-stat__visual" style={{ width: `${value}%`, backgroundColor: `var(--stat-${statPower})` }}></div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h2>Base stats</h2>
            <div className='poke-stats__wrapper'>
                {
                    stats.map((item, i) => {
                        return (
                            <PokeStatsItem {...item} key={item.statName} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PokeStats