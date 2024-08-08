import React from "react";
import { NavLink } from 'react-router-dom';
import './styles.css';

const data = [
    {
        label: 'HOME',
        to: '/'
    },
    {
        label: 'ABOUT ',
        to: '/about'
    },
    {
        label: 'SKILLS',
        to: '/skills'
    },
    {
        label: 'CONTACT',
        to: '/contact'
    },
];

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__container">
                {/* Menu items */}
                <ul className="navbar__container__menu">
                    {data.map((item, key) => (
                        <li key={key} className="navbar__container__menu__item">
                            <NavLink
                                className="navbar__container__menu__item__links"
                                to={item.to}
                                activeClassName="active"
                            >
                                {item.label}
                                <span className="tooltip">{item.label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
