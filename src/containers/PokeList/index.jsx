import React, { useEffect } from 'react';
import ReactDOM from 'react-dom'
import './List.css';
import ListItem from '../../components/ListItem'
import { connect } from 'react-redux'
import { fetchPokemons, fetchPokemonInfo } from '../../actions'
import Loader from '../../components/Loader'

const PokeList = ({ list, loading, requestPokemons, requestPokemonInfo }) => {
    useEffect(() => {
        requestPokemons(list.length)
    }, [])

    const handleScroll = (e) => {
        const target = e.target;
        if (target.scrollHeight - target.scrollTop === target.clientHeight) {
            requestPokemons(list.length)
        }
    }

    return (
        <div className='poke-list' onScroll={(event) => handleScroll(event)}>
            {loading && (
                ReactDOM.createPortal(<div className='load-wrapper'>
                    <Loader />
                </div>, document.querySelector('.App'))
            )
            }
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
    const { list, loading } = pokeList
    return {
        list,
        loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestPokemons: (offset) => dispatch(fetchPokemons(offset)),
        requestPokemonInfo: (url) => dispatch(fetchPokemonInfo(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokeList)