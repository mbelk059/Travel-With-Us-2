import React, { useState } from 'react';
import './main.css'

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

import { FaCalendarAlt, FaStar, FaDollarSign, FaHeart } from 'react-icons/fa';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Main = () => {

    // State to track liked countries
    const [likedCountries, setLikedCountries] = useState([]);

    // Function to handle like/unlike
    const handleLikeToggle = (country) => {
        if (likedCountries.includes(country)) {
            setLikedCountries(likedCountries.filter((c) => c !== country));
        } else {
            setLikedCountries([...likedCountries, country]);
        }
    };

    return (
        <section className='main container section'>

            <div className="infoSection">
                <h2 className="infoHeader">
                    Plan, Book, Travel—It's That Simple
                </h2>
                <div data-aos="fade-up" className="infoContent">
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
                    <div className="countryItem">
                        <div className="countryImageContainer">
                                <img src={chinaImage} alt="China" />
                                <FaHeart
                                    className={`heartIcon ${likedCountries.includes('China') ? 'liked' : ''}`}
                                    onClick={() => handleLikeToggle('China')}
                                />
                            </div>
                            <p>China</p>
                    </div>
                    <div className="countryItem">
                        <img src={japanImage} alt="Japan" />
                            <FaHeart
                                className={`heartIcon ${likedCountries.includes('Japan') ? 'liked' : ''}`}
                                onClick={() => handleLikeToggle('Japan')}
                            />
                        <p>Japan</p>
                    </div>
                    <div className="countryItem">
                        <img src={turkeyImage} alt="Turkey" />
                            <FaHeart
                                className={`heartIcon ${likedCountries.includes('Turkey') ? 'liked' : ''}`}
                                onClick={() => handleLikeToggle('Turkey')}
                            />
                        <p>Turkey</p>
                    </div>
                    <div className="countryItem">
                        <img src={netherlandsImage} alt="Netherlands" />
                        <FaHeart
                                className={`heartIcon ${likedCountries.includes('Netherlands') ? 'liked' : ''}`}
                                onClick={() => handleLikeToggle('Netherlands')}
                            />
                        <p>Netherlands</p>
                    </div>
                    <div className="countryItem">
                        <img src={algeriaImage} alt="Algeria" />
                        <FaHeart
                                className={`heartIcon ${likedCountries.includes('Algeria') ? 'liked' : ''}`}
                                onClick={() => handleLikeToggle('Algeria')}
                            />
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
        

        </section>
    )
}

export default Main
