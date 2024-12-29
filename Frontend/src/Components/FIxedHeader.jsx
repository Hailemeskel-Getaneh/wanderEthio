import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/backgrounds/flag3.gif';
import '../styles/Header.css';
import '../styles/FIxedheader.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export function NavHeader() {
    const [showDestinations, setShowDestinations] = useState(false);
    const [showThingsToDo, setShowThingsToDo] = useState(false);
    const [showAdditionals, setShowAdditionals] = useState(false);
    const [showSubCategories, setShowSubCategories] = useState({});

    const handleMouseEnter = (setFunction) => {
        setFunction(true);
    };

    const handleMouseLeave = (setFunction) => {
        setFunction(false);
    };

    const handleSubCategoryMouseEnter = (category) => {
        setShowSubCategories(prevState => ({ ...prevState, [category]: true }));
    };

    const handleSubCategoryMouseLeave = (category) => {
        setShowSubCategories(prevState => ({ ...prevState, [category]: false }));
    };

    return (
        <>
            <div className='myHeader'>
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li
                            className="dropdown"
                            onMouseEnter={() => handleMouseEnter(setShowDestinations)}
                            onMouseLeave={() => handleMouseLeave(setShowDestinations)}
                        >
                            <span className="dropdown-text">
                                <Link to="/">
                                    Destinations <i className={`fas fa-chevron-${showDestinations ? 'up' : 'down'}`}></i>
                                </Link>
                            </span>
                            {showDestinations && (
                                <div className="dropdown-content">
                                    <ul className='headerDestinationsLists'>
                                        <li
                                            onMouseEnter={() => handleSubCategoryMouseEnter('Northern')}
                                            onMouseLeave={() => handleSubCategoryMouseLeave('Northern')}
                                        >
                                            <span>Northern Ethiopia </span>
                                            {showSubCategories.Northern && (
                                                <div className="sub-dropdown-content">
                                                    <ul>
                                                        <li><Link to="/destination/lalibela">Lalibela</Link></li>
                                                        <li><Link to="/destination/semenMountains">Semen Mountains</Link></li>
                                                        <li><Link to="/destination/gondar">Gondar</Link></li>
                                                        <li><Link to="/destination/axum">Axum</Link></li>
                                                        <li><Link to="/destination/debre-damo">Debre Damo</Link></li>
                                                    </ul>
                                                </div>
                                            )}
                                        </li>
                                        <li
                                            onMouseEnter={() => handleSubCategoryMouseEnter('Southern')}
                                            onMouseLeave={() => handleSubCategoryMouseLeave('Southern')}
                                        >
                                            <span>Southern Ethiopia </span>
                                            {showSubCategories.Southern && (
                                                <div className="sub-dropdown-content">
                                                    <ul>
                                                        <li><Link to="/destination/omo">Omo National Park</Link></li>
                                                        <li><Link to="/destination/rift-valley">Rift Valley</Link></li>
                                                        <li><Link to="/destination/afdera">Afdera</Link></li>
                                                    </ul>
                                                </div>
                                            )}
                                        </li>
                                        <li
                                            onMouseEnter={() => handleSubCategoryMouseEnter('Southern')}
                                            onMouseLeave={() => handleSubCategoryMouseLeave('Southern')}
                                        >
                                            <span>Southern Eastern Ethio</span>
                                            {showSubCategories.Southern && (
                                                <div className="sub-dropdown-content">
                                                    <ul>
                                                        <li><Link to="/destination/bale">Bale Mountains</Link></li>
                                                      
                                                    </ul>
                                                </div>
                                            )}
                                        </li>

                                        <li
                                            onMouseEnter={() => handleSubCategoryMouseEnter('Eastern')}
                                            onMouseLeave={() => handleSubCategoryMouseLeave('Eastern')}
                                        >
                                            <span>Eastern Ethiopia </span>
                                            {showSubCategories.Eastern && (
                                                <div className="sub-dropdown-content">
                                                    <ul>
                                                        <li><Link to="/destination/awash-NP">Awash NP</Link></li>
                                                        <li><Link to="/destination/harar">Harar</Link></li>
                                                        <li><Link to="/destination/Oganden">Ogaden</Link></li>

                                                    </ul>
                                                </div>
                                            )}
                                        </li>
                                        <li
                                            onMouseEnter={() => handleSubCategoryMouseEnter('Western')}
                                            onMouseLeave={() => handleSubCategoryMouseLeave('Western')}
                                        >
                                            <span>Western Ethiopia </span>
                                            {showSubCategories.Western && (
                                                <div className="sub-dropdown-content">
                                                    <ul>
                                                        <li><Link to="/destination/bale">Bale</Link></li>
                                                        <li><Link to="/destination/bahirdar">Bahir Dar</Link></li>
                                                        
                                                    </ul>
                                                </div>
                                            )}
                                        </li>

                                        <li
                                            onMouseEnter={() => handleSubCategoryMouseEnter('Centeral')}
                                            onMouseLeave={() => handleSubCategoryMouseLeave('Centeral')}
                                        >
                                            <span>Centeral Ethiopia </span>
                                            {showSubCategories.Centeral && (
                                                <div className="sub-dropdown-content">
                                                    <ul>
                                                        <li>
                                                            <Link to="/destination/AddisAbaba">Addis-Ababa</Link></li>
                                                      
                                                        <li><Link to="/destination/debre-libanos">Debre-Libanos</Link></li>
                                                    </ul>
                                                </div>
                                            )}
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li
                            className="dropdown"
                            onMouseEnter={() => handleMouseEnter(setShowThingsToDo)}
                            onMouseLeave={() => handleMouseLeave(setShowThingsToDo)}
                        >
                            <span className="dropdown-text">
                                <Link to="/">
                                    Things to do <i className={`fas fa-chevron-${showThingsToDo ? 'up' : 'down'}`}></i>
                                </Link>
                            </span>
                            {showThingsToDo && (
                                <div className="dropdown-content">
                                    <ul className='headerDestinationsLists'>
                                        <li><Link to="/todo/Hiking">Hiking</Link></li>
                                        <li><Link to="/todo/Cultural-Tours">Cultural-Tours</Link></li>
                                        <li><Link to="/todo/Photography">Photography</Link></li>
                                        <li><Link to="/todo/Wildlife-safaris">WildlifeSafari</Link></li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li
                            className="dropdown"
                            onMouseEnter={() => handleMouseEnter(setShowAdditionals)}
                            onMouseLeave={() => handleMouseLeave(setShowAdditionals)}
                        >
                            <span className="dropdown-text">
                                <Link to="/additionals/Musics">
                                    Additionals <i className={`fas fa-chevron-${showAdditionals ? 'up' : 'down'}`}></i>
                                </Link>
                            </span>
                            {showAdditionals && (
                                <div className="dropdown-content">
                                    <ul className='headerDestinationsLists'>
                                        <li><Link to="/additionals/foods">Foods</Link></li>
                                        <li><Link to="/additionals/dressings">Dressings</Link></li>
                                        <li><Link to="/additionals/musics">Musics</Link></li>
                                        <li><Link to="/additionals/films">Films</Link></li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li><Link to="/booking">Booking</Link></li>
                        <li><Link to="/register">Register </Link></li>
                        <button   className='loginButton' > <Link to="/login">Login</Link></button>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default function FixedHeader() {
    return (
        <div className='fixed-header-container'>
            <div className='aboveFixed'> 
                <div className='fixed-header-logo'>
                    <Link to="/Wander Ethio">
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>

                <div>
                    <div className="header-section-social ">
                        <div className='que'>
                            <h5><i className="fas fa-phone"> +251 956 319 463</i></h5>
                            <button className='headerAskBtn'>
                                <Link to="/ask">Ask Question</Link>
                            </button>
                        </div>
                        <div className="header-social-links" >
                        <a href="https://www.facebook.com/ethiotourismorg" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
<a href="https://twitter.com/ethiotourismorg" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
<a href="https://www.instagram.com/ethiotourismorg" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
<a href="https://t.me/ethiotourismorg" target="_blank" rel="noopener noreferrer"><i className="fab fa-telegram"></i></a>

                        </div>
                    </div>
                    <hr />
                </div>
            </div>

            <div className='belowFixed'>
                <div className="wanderethio">
                    <span className="highlight">W</span>ander<span className="highlight">E</span>thio
                    <div className="line-below"></div>
                </div>
                <div className='fixed-header-bottom'>
                    <NavHeader />
                </div>
            </div>
        </div>
    );
}
