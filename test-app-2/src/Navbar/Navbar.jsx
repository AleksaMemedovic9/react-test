import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const [dropDownShown, showDropDown] = React.useState(false);
    const onClick = () => showDropDown(!dropDownShown);
    const DropDownNav = () => {
        return (
            <ul id="dropDown" style={{display: 'block'}} className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li><NavLink className="dropdown-item" to='/login'>Login</NavLink></li>
                <li><NavLink className="dropdown-item" to='/cards'>Cards</NavLink></li>
                <li><NavLink className="dropdown-item" to='/'>Login</NavLink></li>
            </ul>
        );
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    LOGO
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" onClick={onClick} role="button" aria-expanded="true">
                                Dropdown
                            </a>
                            {dropDownShown
                                ? <DropDownNav />
                                : ''
                            }
                        </li>
                    </ul>
                </div>
            </div >
        </nav >
    );
}

export default Navbar;