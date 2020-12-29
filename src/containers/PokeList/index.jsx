import React, { useEffect } from 'react';
import ReactDOM from 'react-dom'
import './List.css';
import ListItem from '../../components/ListItem'
import { connect } from 'react-redux'
import { fetchPokemons, fetchPokemonInfo } from '../../actions'
import Loader from '../../components/Loader'

const PokeList = ({ list, filteredList, loading, isFilterApply, requestPokemons, requestPokemonInfo }) => {
    useEffect(() => {
        requestPokemons(list.length)
    }, [])

    return (
        <div className='poke-list' >
            {loading && (
                ReactDOM.createPortal(<div className='load-wrapper'>
                    <Loader />
                </div>, document.querySelector('.App'))
            )
            }
            <ul className='list-group'>
                {
                    (filteredList || list).map(item => {
                        return <ListItem item={item} key={item.name} onShowInfo={requestPokemonInfo} />
                    })
                }
                {!isFilterApply && <li className='list-group-item poke-item'>
                    <button onClick={(e) => requestPokemons((filteredList || list).length)} className="btn btn-info">Load More Pokemons</button>
                </li>}
            </ul>
        </div>

    )
}
const mapStateToProps = ({ pokeList }) => {
    const { filteredList, loading, list, isFilterApply } = pokeList
    return {
        filteredList,
        loading,
        list,
        isFilterApply
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestPokemons: (offset) => dispatch(fetchPokemons(offset)),
        requestPokemonInfo: (url) => dispatch(fetchPokemonInfo(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokeList)