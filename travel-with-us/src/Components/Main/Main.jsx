import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './main.css';

import chinaImage from '../../Assets/china.png';
import algeriaImage from '../../Assets/algeria.png';
import netherlandsImage from '../../Assets/netherlands.png';
import japanImage from '../../Assets/japan.png';
import turkeyImage from '../../Assets/turkey.png';
import moroccoImage from '../../Assets/morocco.png';
import peruImage from '../../Assets/peru.png';
import newzealandImage from '../../Assets/newzealand.png';
import icelandImage from '../../Assets/iceland.png';
import malaysiaImage from '../../Assets/malaysia.png';
import spainImage from '../../Assets/spain.png';
import thailandImage from '../../Assets/thailand.png';
import franceImage from '../../Assets/france.png';
import brazilImage from '../../Assets/brazil.png';
import uaeImage from '../../Assets/uae.png';
import boraboraImage from '../../Assets/borabora.png';
import mexicoImage from '../../Assets/mexico.png';
import cubaImage from '../../Assets/cuba.png';
import maldivesImage from '../../Assets/maldives.png';
import famImage from '../../Assets/fam.png';

import { FaCalendarAlt, FaStar, FaDollarSign, FaHeart } from 'react-icons/fa';

const travelPackages = [
    {
        id: 1,
        country: 'Mexico',
        name: 'Barcelo Maya Tropical',
        image: mexicoImage,
        reviews: 500,
        price: 599,
        discount: 25,
    },
    {
        id: 2,
        country: 'Cuba',
        name: 'Paradisus Princesa del Mar',
        image: cubaImage,
        reviews: 743,
        price: 489,
        discount: 20,
    },
    {
        id: 3,
        country: 'Bora Bora',
        name: 'Pearl Beach Resort & Spa',
        image: boraboraImage,
        reviews: 980,
        price: 799,
        discount: 15,
    },
    {
        id: 4,
        country: 'Maldives',
        name: 'Furaveri Maldives',
        image: maldivesImage,
        reviews: 2090,
        price: 999,
        discount: 25,
    },
];

const Main = () => {
    const navigate = useNavigate();
    const [likedCountries, setLikedCountries] = useState([]);

    const handleLikeToggle = (country) => {
        if (likedCountries.includes(country)) {
            setLikedCountries(likedCountries.filter((c) => c !== country));
        } else {
            setLikedCountries([...likedCountries, country]);
        }
    };

    const handleImageClick = (country) => {
        navigate(`/${country.toLowerCase()}`); // Navigate to the country route dynamically
    };

    return (
        <section id="discover" className='main container section'>
            <div className="infoSection">
                <h2 className="infoHeader">Plan, Book, Travel—It's That Simple</h2>
                <div className="infoContent" data-aos="fade-up">
                    <div className="infoItem">
                        <FaCalendarAlt className="infoIcon" />
                        <h3>Flexible Plans</h3>
                        <p>Enjoy peace of mind with free cancellation up to 24 hours before most bookings.</p>
                    </div>
                    <div className="infoItem">
                        <FaStar className="infoIcon" />
                        <h3>Expert Recommendations</h3>
                        <p>Get insights from fellow travelers and see honest reviews on flights, hotels, and attractions.</p>
                    </div>
                    <div className="infoItem">
                        <FaDollarSign className="infoIcon" />
                        <h3>Best Price Guarantee</h3>
                        <p>Explore the world without overspending—find unbeatable prices on all your travel needs.</p>
                    </div>
                </div>
            </div>

            <div className="destinationSection">
                <h2 className="sectionTitle">Explore trending destinations</h2>
                <div className="countryGrid">
                    <div className="countryItem" onClick={() => handleImageClick('China')}>
                        <div className="countryImageContainer">
                            <img src={chinaImage} alt="China" />
                            <FaHeart
                                className={`heartIcon ${likedCountries.includes('China') ? 'liked' : ''}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleLikeToggle('China');
                                }}
                            />
                        </div>
                        <p>China</p>
                    </div>
                    <div className="countryItem" onClick={() => handleImageClick('Japan')}>
                        <div className="countryImageContainer">
                            <img src={japanImage} alt="Japan" />
                            <FaHeart
                                className={`heartIcon ${likedCountries.includes('Japan') ? 'liked' : ''}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleLikeToggle('Japan');
                                }}
                            />
                        </div>
                        <p>Japan</p>
                    </div>
                    <div className="countryItem" onClick={() => handleImageClick('Turkey')}>
                        <div className="countryImageContainer">
                            <img src={turkeyImage} alt="Turkey" />
                            <FaHeart
                                className={`heartIcon ${likedCountries.includes('Turkey') ? 'liked' : ''}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleLikeToggle('Turkey');
                                }}
                            />
                        </div>
                        <p>Turkey</p>
                    </div>
                    <div className="countryItem" onClick={() => handleImageClick('Netherlands')}>
                        <div className="countryImageContainer">
                            <img src={netherlandsImage} alt="Netherlands" />
                            <FaHeart
                                className={`heartIcon ${likedCountries.includes('Netherlands') ? 'liked' : ''}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleLikeToggle('Netherlands');
                                }}
                            />
                        </div>
                        <p>Netherlands</p>
                    </div>
                    <div className="countryItem" onClick={() => handleImageClick('Algeria')}>
                        <div className="countryImageContainer">
                            <img src={algeriaImage} alt="Algeria" />
                            <FaHeart
                                className={`heartIcon ${likedCountries.includes('Algeria') ? 'liked' : ''}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleLikeToggle('Algeria');
                                }}
                            />
                        </div>
                        <p>Algeria</p>
                    </div>
                </div>

                <h2 className="sectionTitle">Check out these beautiful countries</h2>
                <div className="countryGrid">
                    <div className="countryItem">
                        <img src={moroccoImage} alt="Morocco" />
                        <FaHeart
                            className={`heartIcon ${likedCountries.includes('Morocco') ? 'liked' : ''}`}
                            onClick={() => handleLikeToggle('Morocco')}
                        />
                        <p>Morocco</p>
                    </div>
                    <div className="countryItem">
                        <img src={newzealandImage} alt="New Zealand" />
                        <FaHeart
                            className={`heartIcon ${likedCountries.includes('New Zealand') ? 'liked' : ''}`}
                            onClick={() => handleLikeToggle('New Zealand')}
                        />
                        <p>New Zealand</p>
                    </div>
                    <div className="countryItem">
                        <img src={malaysiaImage} alt="Malaysia" />
                        <FaHeart
                            className={`heartIcon ${likedCountries.includes('Malaysia') ? 'liked' : ''}`}
                            onClick={() => handleLikeToggle('Malaysia')}
                        />
                        <p>Malaysia</p>
                    </div>
                    <div className="countryItem">
                        <img src={peruImage} alt="Peru" />
                        <FaHeart
                            className={`heartIcon ${likedCountries.includes('Peru') ? 'liked' : ''}`}
                            onClick={() => handleLikeToggle('Peru')}
                        />
                        <p>Peru</p>
                    </div>
                    <div className="countryItem">
                        <img src={icelandImage} alt="Iceland" />
                        <FaHeart
                            className={`heartIcon ${likedCountries.includes('Iceland') ? 'liked' : ''}`}
                            onClick={() => handleLikeToggle('Iceland')}
                        />
                        <p>Iceland</p>
                    </div>
                </div>

                <h2 className="sectionTitle">Most visited locations</h2>
                <div className="countryGrid">
                    <div className="countryItem">
                        <img src={spainImage} alt="Spain" />
                        <FaHeart
                            className={`heartIcon ${likedCountries.includes('Spain') ? 'liked' : ''}`}
                            onClick={() => handleLikeToggle('Spain')}
                        />
                        <p>Spain</p>
                    </div>
                    <div className="countryItem">
                        <img src={thailandImage} alt="Thailand" />
                        <FaHeart
                            className={`heartIcon ${likedCountries.includes('Thailand') ? 'liked' : ''}`}
                            onClick={() => handleLikeToggle('Thailand')}
                        />
                        <p>Thailand</p>
                    </div>
                    <div className="countryItem">
                        <img src={franceImage} alt="France" />
                        <FaHeart
                            className={`heartIcon ${likedCountries.includes('France') ? 'liked' : ''}`}
                            onClick={() => handleLikeToggle('France')}
                        />
                        <p>France</p>
                    </div>
                    <div className="countryItem">
                        <img src={brazilImage} alt="brazil" />
                        <FaHeart
                            className={`heartIcon ${likedCountries.includes('Brazil') ? 'liked' : ''}`}
                            onClick={() => handleLikeToggle('Brazil')}
                        />
                        <p>Brazil</p>
                    </div>
                    <div className="countryItem">
                        <img src={uaeImage} alt="uae" />
                        <FaHeart
                            className={`heartIcon ${likedCountries.includes('UAE') ? 'liked' : ''}`}
                            onClick={() => handleLikeToggle('UAE')}
                        />
                        <p>United Arab Emirates</p>
                    </div>
                </div>
            </div>

            <div id="packages" className="packageSection">
                <h2 className="infoHeader">Explore Our Travel Packages</h2>
                <div className="packageGrid">
                    {travelPackages.map((pkg) => (
                        <div className="packageItem" key={pkg.id}>
                            <img src={pkg.image} alt={pkg.country} />
                            <div className="packageDetails">
                                <h3>{pkg.name}</h3>
                                <p>{pkg.country}</p>
                                <p>({pkg.reviews} Reviews)</p>
                                <p>CAD ${pkg.price} per night <span className="discount">Save {pkg.discount}%</span></p>
                                <p>Includes taxes and fees</p>
                                <button className="bookButton" onClick={() => handleImageClick(pkg.country)}>Book Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div id="packages" className="packageSection">
                <h2 className="infoHeader">About</h2>
            </div>

            <div id="about" className="aboutSection">
                <div className="aboutContent">
                    <div className="aboutText">
                        <h2>Travel With Us: Your Gateway to Unforgettable Journeys</h2>
                        <p>
                            At Travel With Us, we believe that every journey should be a memorable adventure. 
                            Our mission is to make travel planning simple, enjoyable, and accessible for everyone. 
                            Whether you're a seasoned traveler or planning your first trip, we're here to help you 
                            discover new destinations, book the best flights and accommodations, and create experiences 
                            that will last a lifetime.
                        </p>
                    </div>
                    <div className="aboutImage">
                        <img src={famImage} alt="Family traveling" />
                    </div>
                </div>
            </div>

            <footer className='footer'>
                <div className='footerContent'>
                    <div className='footerSection'>
                        <h4>Travel With Us</h4>
                        <p>Your trusted travel partner.</p>
                    </div>
                    <div className='footerSection'>
                        <h4>Explore</h4>
                        <ul>
                            <li>Destinations</li>
                            <li>Packages</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className='footerSection'>
                        <h4>Help</h4>
                        <ul>
                            <li>FAQ</li>
                            <li>Contact Us</li>
                            <li>Support Center</li>
                        </ul>
                    </div>
                    <div className='footerSection'>
                        <h4>About</h4>
                        <ul>
                            <li>Our Story</li>
                            <li>Team</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                </div>
            </footer>


        </section>
    )
}

export default Main;
