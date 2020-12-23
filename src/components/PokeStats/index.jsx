import React from 'react';


const PokeStats = ({ stats }) => {

    const PokeStatsItem = ({ statName, value }) => {
        return (
            <div>
                <span>{statName}</span>
                <span>{value}</span>
            </div>
        )
    }

    return (
        <div>
            <h2>Base stats</h2>
            <div>
                {
                    stats.map((item) => {
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