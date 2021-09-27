import React, { useState } from 'react';
import Logo from '../../assets/logo_v4-amber-800.svg';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [menuActive , setMenuActive ] = useState(false);

    const toggleMenuHandler = () => {
        setMenuActive(!menuActive);
    }

    return (
        <header className="bg-yellow-50 relative">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
                <div className="w-36">
                    <Link to="/">
                        <img 
                            src={Logo}
                            alt="logo"
                            className="w-full"
                        />
                    </Link>
                </div>
                <div
                    onClick={toggleMenuHandler}
                    className="md:hidden uppercase p-2"
                >
                    <FontAwesomeIcon 
                        icon={faBars} 
                        color="#655242" 
                        size="2x"
                    />
                </div>
                <nav
                    className={`
                        ${!menuActive && 'hidden'}
                        absolute flex flex-col bg-yellow-50 top-full
                        w-full left-0 z-20 md:static md:w-auto md:flex
                `}>
                    <ul className=" md:flex-row md:flex">
                        <li className="list-none md:mr-5">
                            <NavLink 
                                className="font-medium flex w-full text-lg uppercase text-yellow-900 hover:font-bold hover:text-yellow-600 cursor-pointer pt-2.5 px-2.5" 
                                to="/products"
                            >Produtos
                            </NavLink>
                        </li>
                        <li className="list-none md:mr-5">
                            <NavLink 
                                className="font-medium flex w-full text-lg uppercase text-yellow-900 hover:font-bold hover:text-yellow-600 cursor-pointer pt-2.5 px-2.5" 
                                to="/aboutus"
                            >Quem somos
                            </NavLink>
                        </li>
                        <li className="list-none md:mr-5">
                            <NavLink 
                                className="font-medium flex w-full text-lg uppercase text-yellow-900 hover:font-bold hover:text-yellow-600 cursor-pointer pt-2.5 px-2.5" 
                                to=""
                            >Contactos
                            </NavLink>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}

export default Header
