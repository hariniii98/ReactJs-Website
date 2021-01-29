import React,{useState} from 'react';
import './App.css';
import {NavLink} from "react-router-dom";
import {FaBars,FaTimes} from 'react-icons/fa';


const Navbar = () => {

    const [clicked,setClicked] = useState(false);

    const handleClick= () => {
        setClicked(!clicked);
    }


    return (
        <>
        <div className="navbar">
            <div className="navbar_left">
                <h1>OVERLAP</h1>
            </div>
            <div className="navbar_right">
                <div className="menu_details">
                <div className="menu-icon">
                    <i className="menuu_icon" onClick={handleClick} >{clicked ? <FaTimes />: <FaBars />} </i>
                </div>

                <ul className={clicked?'nav-menu active':'nav-menu'}>
                <li className="menulist">
                    <NavLink activeClassName="menu_active" className="list" exact to="/">Classic</NavLink>
                </li>
                <li className="menulist">
                    <NavLink activeClassName="menu_active" className="list" to="/about">About</NavLink>
                </li>
                <li className="menulist">
                    <NavLink activeClassName="menu_active" className="list" to="/blog">Blog</NavLink>
                </li>
                <li className="menulist">
                    <NavLink activeClassName="menu_active" className="list" to="/pricing">Pricing</NavLink>
                </li>
                <li className="menulist">
                    <NavLink activeClassName="menu_active" className="list" to="/contact">Contact</NavLink>
                </li>
                </ul>
                </div>
                
            </div>
        </div>
        </>
    );
}

export default Navbar;
