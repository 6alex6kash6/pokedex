import React, { useState } from 'react';
import './Header.css'
import { findPokeByName } from '../../actions'
import { connect } from 'react-redux'

const Header = ({ findPokeByName }) => {
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
                    <li><button className="dropdown-item" type="button">Electric</button></li>
                    <li><button className="dropdown-item" type="button">Another action</button></li>
                    <li><button className="dropdown-item" type="button">Something else here</button></li>
                </ul>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    findPokeByName: (text) => dispatch(findPokeByName(text))
})

export default connect(null, mapDispatchToProps)(Header)