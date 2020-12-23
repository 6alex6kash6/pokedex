import React from 'react';
import './ListItem.css'

const ListItem = ({ item, onShowInfo }) => {
    return (
        <li className='list-group-item poke-item'>
            {item.name}
            <button onClick={() => onShowInfo(item.url)} className="btn btn-info">show info</button>
        </li>
    )
}

export default ListItem