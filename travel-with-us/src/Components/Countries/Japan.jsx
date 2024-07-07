import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './japan.css';  

import japann from '../../Assets/japann.png';
import excel from '../../Assets/excel.png';
import gracery from '../../Assets/gracery.png';
import granvia from '../../Assets/granvia.png';
import hyatt from '../../Assets/hyatt.png';
import inari from '../../Assets/inari.png';
import kinkaku from '../../Assets/kinkaku.png';
import mount from '../../Assets/mount.png';
import palace from '../../Assets/palace.png';
import park from '../../Assets/park.png';
import shibuya from '../../Assets/shibuya.png';
import nano from '../../Assets/nana.png';
import tori from '../../Assets/tori.png';
import marco from '../../Assets/marco.png';

import { FaHeart } from 'react-icons/fa';

const Japan = () => {
    const [likedAttractions, setLikedAttractions] = useState([]);
    const [likedHotels, setLikedHotels] = useState([]);

    const handleLikeToggle = (attraction) => {
        if (likedAttractions.includes(attraction)) {
            setLikedAttractions(likedAttractions.filter((a) => a !== attraction));
        } else {
            setLikedAttractions([...likedAttractions, attraction]);
        }
    };

    const handleHotelLikeToggle = (hotel) => {
        if (likedHotels.includes(hotel)) {
            setLikedHotels(likedHotels.filter((h) => h !== hotel));
        } else {
            setLikedHotels([...likedHotels, hotel]);
        }
    };

    return (
        <>
            <main className="main-content">
                <div id="welcome" className="welcomeSection">
                    <div className="welcomeContent">
                        <div className="welcomeImage">
                            <img src={japann} alt="Japan" />
                        </div>
                        <div className="welcomeText">
                            <h2>Welcome to Japan!</h2>
                            <p>
                            Experience the perfect blend of ancient traditions and cutting-edge modernity in Japan. Explore iconic landmarks, from the historic temples of Kyoto to the bustling streets of Tokyo. Discover breathtaking natural landscapes, savor world-renowned cuisine, and immerse yourself in the rich cultural heritage of this fascinating country. Whether you're seeking adventure, relaxation, or cultural enrichment, Japan offers an unforgettable journey for every traveler.
                            </p>
                            <button className="btnn btnn-primary">Learn more</button>
                            <button className="btnn btnn-secondary">Explore Japan</button>
                        </div>
                    </div>
                </div>

                <section className="destinationSection">
                    <h2 className="sectionTitle">Must see attractions</h2>
                    <div className="countryGrid">
                        {[
                            { src: inari, name: 'Fushimi Inari Taisha' },
                            { src: kinkaku, name: 'Kinkaku-ji' },
                            { src: palace, name: 'Imperial Palace' },
                            { src: mount, name: 'Mount Fuji' },
                            { src: shibuya, name: 'Shibuya Crossing' }
                        ].map((attraction, index) => (
                            <div className="countryItem" key={index} onClick={() => handleLikeToggle(attraction.name)}>
                                <div className="countryImageContainer">
                                    <img src={attraction.src} alt={attraction.name} />
                                    <FaHeart
                                        className={`heartIcon ${likedAttractions.includes(attraction.name) ? 'liked' : ''}`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleLikeToggle(attraction.name);
                                        }}
                                    />
                                </div>
                                <p>{attraction.name}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="destinationSection">
                    <h3 className="sectionTitle">Where to stay</h3>
                    <div className="countryGrid">
                        {[
                            { src: granvia, name: 'Hotel Granvia Tokyo' },
                            { src: gracery, name: 'Hotel Gracery Shinjuku' },
                            { src: hyatt, name: 'Park Hyatt Tokyo' },
                            { src: excel, name: 'Shibuya Excel Hotel Tokyu' },
                            { src: park, name: 'Park Hotel Tokyo' }
                        ].map((hotel, index) => (
                            <div className="countryItem" key={index} onClick={() => handleHotelLikeToggle(hotel.name)}>
                                <div className="countryImageContainer">
                                    <img src={hotel.src} alt={hotel.name} />
                                    <FaHeart
                                        className={`heartIcon ${likedHotels.includes(hotel.name) ? 'liked' : ''}`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleHotelLikeToggle(hotel.name);
                                        }}
                                    />
                                </div>
                                <p>{hotel.name}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="reviews">
                    <h2 className="sectionTitle">Traveler reviews</h2>
                    <div className="review-cards-container">
                        {[
                            { name: 'Tori H.', review: "Tokyo's vibrant energy and neon-lit streets were a sensory delight. The blend of modern technology and ancient temples left a lasting impression.", stars: '★★★★★', time: '20 minutes ago', img: tori },
                            { name: 'Nana B.', review: "Kyoto's serene temples and traditional tea ceremonies offered a peaceful retreat into Japan's rich cultural heritage.", stars: '★★★★☆', time: '58 minutes ago', img: nano },
                            { name: 'Marco F.', review: "Osaka's lively food scene and friendly locals made exploring the city a culinary adventure. The historic castles and bustling markets were highlights of our trip.", stars: '★★★★★', time: '5 hours ago', img: marco }
                        ].map((review, index) => (
                            <div className="review-card" key={index}>
                                <div className="review-header">
                                    <img src={review.img} alt={review.name} className="avatar" />
                                    <h3 className="review-title">{review.name}</h3>
                                </div>
                                <p className="review-text">{review.review}</p>
                                <div className="review-footer">
                                    <div className="stars">{review.stars}</div>
                                    <div className="time">{review.time}</div>
                                </div>
                            </div>
                        ))}
                    </div>
</section>

            </main>

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


        </>
    );
};

export default Japan;