import React from 'react'

const ListItem = ({ item }) => {
    return (
        <li>
            {item}
            <button>show info</button>
        </li>
    )
}

export default ListItem