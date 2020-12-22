import React, { useEffect } from 'react';
import './List.css';
import ListItem from '../../components/ListItem'
import { connect } from 'react-redux'
import { fetchPokemons } from '../../actions'

const List = ({ list, requestPokemons }) => {
    useEffect(() => {
        requestPokemons()
    }, [requestPokemons])

    return (
        <ul>
            {
                list.map(item => {
                    return <ListItem item={item} key={item} />
                })
            }

        </ul>
    )
}
const mapStateToProps = (state) => {
    const { list } = state;
    return {
        list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestPokemons: () => dispatch(fetchPokemons())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)