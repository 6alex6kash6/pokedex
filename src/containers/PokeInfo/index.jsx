import React from 'react';
import PokeData from '../../components/PokeData';
import PokeStats from '../../components/PokeStats'
import { connect } from 'react-redux'
import './PokeInfo.css'

const PokeInfo = ({ data, stats, infoRequested }) => {
    return (
        <div className='info'>
            {infoRequested ? (<>
                <PokeData {...data} />
                <PokeStats {...stats} />
            </>) : (
                    <p>Choose the Pokemon</p>
                )

            }
        </div>
    )
}

const mapStateToProps = ({ pokeInfo }) => {
    const { abilities, avatar, height, id, name, type, stats, infoRequested } = pokeInfo;
    return {
        data: {
            abilities, avatar, height, id, name, type,
        },
        stats: {
            stats
        },
        infoRequested
    }
}

export default connect(mapStateToProps, null)(PokeInfo)