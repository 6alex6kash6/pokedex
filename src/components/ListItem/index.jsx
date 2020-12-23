import React from 'react'

const ListItem = ({ item, onShowInfo }) => {
    return (
        <li className='list-group-item'>
            {item.name}
            <button onClick={() => onShowInfo(item.url)} className="btn btn-info">show info</button>
        </li>
    )
}

export default ListItem