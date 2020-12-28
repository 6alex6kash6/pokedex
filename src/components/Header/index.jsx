import React, { useState } from 'react';
import './Header.css'
import { findPokeByName, filterPokeByType } from '../../actions'
import { connect } from 'react-redux'
import { POKE_TYPES as pokeTypes } from '../../constants'

const Header = ({ findPokeByName, filterPokeByType }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleChange = (e) => {
        findPokeByName(e.target.value);
    }

    return (
        <div className='navbar bg-primary navbar-light header'>
            <h1>Pokedex</h1>
            <div className="mb-3" style={{ marginTop: '1rem' }}>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Find pokemon by name!" onChange={(e) => handleChange(e)}></input>
            </div>

            <div className="btn-group">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false" onClick={() => setShowDropdown(!showDropdown)}>
                    Filter by Pokemon type
                </button>
                <ul className={"dropdown-menu dropdown-menu-end dropdown-menu-lg-start" + (showDropdown ? ' show' : '')}>
                    <li onClick={() => filterPokeByType('all')}><button className="dropdown-item" type="button" >Show all</button></li>
                    {
                        pokeTypes.map((item) => {
                            return (

                                <li key={item} onClick={() => filterPokeByType(item)}><button className="dropdown-item" type="button" >{item}</button></li>
                            )
                        })
                    }

                </ul>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    findPokeByName: (text) => dispatch(findPokeByName(text)),
    filterPokeByType: (pokeType) => dispatch(filterPokeByType(pokeType))
})

export default connect(null, mapDispatchToProps)(Header)