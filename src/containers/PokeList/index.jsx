import React, { useEffect } from 'react';
import './List.css';
import ListItem from '../../components/ListItem'
import { connect } from 'react-redux'
import { fetchPokemons, fetchPokemonInfo } from '../../actions'


const PokeList = ({ list, requestPokemons, requestPokemonInfo }) => {
    useEffect(() => {
        requestPokemons()
    }, [requestPokemons])

    return (
        <div>
            <ul className='list-group'>
                {
                    list.map(item => {
                        return <ListItem item={item} key={item.name} onShowInfo={requestPokemonInfo} />
                    })
                }

            </ul>
        </div>

    )
}
const mapStateToProps = ({ pokeList }) => {
    const { list } = pokeList
    return {
        list,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestPokemons: () => dispatch(fetchPokemons()),
        requestPokemonInfo: (url) => dispatch(fetchPokemonInfo(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokeList)