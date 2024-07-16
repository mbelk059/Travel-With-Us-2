import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import './japan.css';
import { useTranslation } from 'react-i18next';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { HashLink as Link } from 'react-router-hash-link';
import { FaStar } from 'react-icons/fa';

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
import hotel from '../../Assets/hotel.png';
import nano from '../../Assets/nana.png';
import tori from '../../Assets/tori.png';
import marco from '../../Assets/marco.png';

import { FaHeart, FaCheck, FaWifi, FaBed, FaUsers, FaRulerCombined, FaUtensils, FaTimes, FaUndo, FaDollarSign, FaExclamationTriangle } from 'react-icons/fa';

const Japan = () => {
    const { t, i18n } = useTranslation();
    const [likedAttractions, setLikedAttractions] = useState([]);
    const [likedHotels, setLikedHotels] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [bookingConfirmed, setBookingConfirmed] = useState(false); // State to track booking confirmation


    const [reviews, setReviews] = useState([
        { name: 'Tori H.', review: "Tokyo's vibrant energy and neon-lit streets were a sensory delight. The blend of modern technology and ancient temples left a lasting impression.", stars: '★★★★★', time: '20 minutes ago', img: tori },
        { name: 'Nana B.', review: "Kyoto's serene temples and traditional tea ceremonies offered a peaceful retreat into Japan's rich cultural heritage.", stars: '★★★★☆', time: '58 minutes ago', img: nano },
        { name: 'Marco F.', review: "Osaka's lively food scene and friendly locals made exploring the city a culinary adventure. The historic castles and bustling markets were highlights of our trip.", stars: '★★★★★', time: '5 hours ago', img: marco }
    ]);
    const [newReview, setNewReview] = useState({
        name: '',
        review: '',
        stars: '',
        time: 'just now',
        img: marco
    });

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

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleReviewChange = (e) => {
        const { name, value } = e.target;
        setNewReview({ ...newReview, [name]: value });
    };

    const handleStarClick = (star) => {
        // Create a string of stars based on the selected number
        const stars = '★'.repeat(star);
        setNewReview({ ...newReview, stars });
    };

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        setReviews([newReview, ...reviews]);
        setNewReview({ name: '', review: '', stars: '', time: 'just now', img: '' });
    };

    const handleBookingConfirm = () => {
        setBookingConfirmed(true);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const StarRating = ({ starsSelected, onStarClick }) => {
        const totalStars = 5;
        const starArray = Array.from({ length: totalStars }, (_, index) => index + 1);
    
        return (
            <div className="star-rating">
                {starArray.map(star => (
                    <FaStar
                        key={star}
                        className={star <= starsSelected ? 'star-filled' : 'star-hollow'}
                        onClick={() => onStarClick(star)}
                    />
                ))}
            </div>
        );
    };

    

    return (
        <>
            <main className="main-content">
            <div className="language-switcher">
                    <button 
                        onClick={() => changeLanguage('en')} 
                        className={`language-button ${i18n.language === 'en' ? 'active' : ''}`}
                        aria-label="Switch to English"
                        data-tooltip-id="en-lang-tooltip"
                        data-tooltip-content={t('Switch to English')}
                    >
                        EN
                    </button>
                    <Tooltip id="en-lang-tooltip" />
                    <button 
                        onClick={() => changeLanguage('fr')} 
                        className={`language-button ${i18n.language === 'fr' ? 'active' : ''}`}
                        aria-label="Switch to French"
                        data-tooltip-id="fr-lang-tooltip"
                        data-tooltip-content={t('Switch to French')}
                    >
                        FR
                    </button>
                    <Tooltip id="fr-lang-tooltip" />
                </div>

                <div id="welcome" className="welcomeSection">
                    <div className="welcomeContent">
                        <div className="welcomeImage">
                            <img src={japann} alt="Japan" />
                        </div>
                        <div className="welcomeText">
                            <h1>{t('welcomeTitle')}</h1>
                            <p>{t('welcomeText')}</p>
                            <button 
                                className="btnn btnn-primary"
                                data-tooltip-id="learn-more-tooltip"
                                data-tooltip-content={t('Click to learn more about Japan!')}
                            >
                                {t('learnMore')}
                            </button>
                            <Tooltip id="learn-more-tooltip" />
                            <button 
                                className="btnn btnn-secondary"
                                data-tooltip-id="explore-tooltip"
                                data-tooltip-content={t('Click to explore Japan!')}
                            >
                                {t('exploreJapan')}
                            </button>
                            <Tooltip id="explore-tooltip" />
                        </div>
                    </div>
                </div>

                <section className="destinationSection" aria-labelledby="attractions-heading">
                    <h2 id="attractions-heading" className="sectionTitle">{t('attractions')}</h2>
                    <div className="countryGrid">
                        {[
                            { src: inari, name: t('fushimiInari') },
                            { src: kinkaku, name: t('kinkakuji') },
                            { src: palace, name: t('imperialPalace') },
                            { src: mount, name: t('mountFuji') },
                            { src: shibuya, name: t('shibuyaCrossing') }
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
                                        aria-label={likedAttractions.includes(attraction.name) ? t('unlikeAttraction') : t('likeAttraction')}
                                    />
                                </div>
                                <p>{attraction.name}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="destinationSection" aria-labelledby="hotels-heading">
                <h3 id="hotels-heading" className="sectionTitle">{t('whereToStay')}</h3>
                    <div className="countryGrid">
                        {[
                            { src: granvia, name: t('hotelGranviaTokyo') },
                            { src: gracery, name: t('hotelGraceryShinjuku') },
                            { src: hyatt, name: t('parkHyattTokyo') },
                            { src: excel, name: t('shibuyaExcelHotelTokyu') },
                            { src: park, name: t('parkHotelTokyo') }
                        ].map((hotel, index) => (
                            <div className="countryItem" key={index} onClick={() => hotel.name === t('hotelGranviaTokyo') ? openModal() : handleHotelLikeToggle(hotel.name)}>
                                <div className="countryImageContainer">
                                    <img src={hotel.src} alt={hotel.name} />
                                    <FaHeart
                                        className={`heartIcon ${likedHotels.includes(hotel.name) ? 'liked' : ''}`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleHotelLikeToggle(hotel.name);
                                        }}
                                        aria-label={likedHotels.includes(hotel.name) ? t('unlikeHotel') : t('likeHotel')}
                                    />
                                </div>
                                <p>{hotel.name}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="hotelModal" aria-labelledby="modal-title">
                    <div className="modalContent">
                        <div className="imageSection">
                            <img src={hotel} alt={t('hotelGranviaKyotoAlt')} />
                            <h2 id="modal-title">{t('hotelGranviaKyoto')}</h2>
                        </div>
                        <div className="details">
                            <p className="price">{t('pricePerNight', { price: 217 })}</p>
                            <p className='taxes'>{t('includesTaxesAndFees')}</p>
                            <button className="dealButton">{t('greatDeal')}</button>
                            <div className="starss" aria-label={t('fiveStarRating')}>★★★★★</div>
                            <div className="info">
                                <p>{t('hotelDescription')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="booking-info">
                        <div className="booking-option">
                            <label htmlFor="check-in">{t('checkIn')}: </label>
                            <input type="date" id="check-in" />
                            <div className="additional-info">
                                <div className="info-item"><FaCheck /> {t('reserveNowPayLater')}</div>
                                <div className="info-item"><FaWifi /> {t('freeWifi')}</div>
                                <div className="info-item"><FaBed /> {t('oneQueenBed')}</div>
                                <div className="info-item"><FaUsers /> {t('sleepsTwo')}</div>
                                <div className="info-item"><FaRulerCombined /> {t('roomSize')}</div>
                            </div>
                        </div>
                        <div className="booking-option">
                            <label htmlFor="check-out">{t('checkOut')}: </label>
                            <input type="date" id="check-out" />
                            <div className="additional-info">
                                <h3>{t('roomOptions')}</h3>
                                <div className="info-item"><FaUtensils /> {t('breakfastBuffet', { price: 25 })}</div>
                                <div className="info-item"><FaTimes /> {t('noExtras')}</div>
                                <p className="info-item small-green">{t('fullyRefundable', { date: 'Wed, Jun 26' })}</p>
                                <p className="info-item small-green">{t('noPrepayment')}</p>
                            </div>
                        </div>
                        <div className="booking-option">
                            <label htmlFor="travellers">{t('travellers')}: </label>
                            <select id="travellers">
                                <option value="1">{t('oneTraveller')}</option>
                                <option value="2">{t('twoTravellers')}</option>
                                <option value="3">{t('threeTravellers')}</option>
                                <option value="4">{t('fourTravellers')}</option>
                                <option value="5">{t('fiveTravellers')}</option>
                                <option value="6">{t('sixPlusTravellers')}</option>
                            </select>
                        </div>
                    </div>
                    <div className="actions">
                        {bookingConfirmed ? (
                            <p>{t('bookingConfirmed')}</p>
                        ) : (
                            <>
                                <button onClick={closeModal} className="closeButton">{t('close')}</button>
                                <div className="info-item only-left"><FaExclamationTriangle /> {t('onlyTwoLeft')}</div>
                                <button onClick={handleBookingConfirm} className="bookButton">{t('bookNow')}</button>
                            </>
                        )}
                    </div>
                </Modal>

                <section className="reviews" aria-labelledby="reviews-heading">
                    <h2 id="reviews-heading" className="sectionTitle">{t('travelerReviews')}</h2>
                    <div className="review-cards-container">
                        {reviews.map((review, index) => (
                            <div className="review-card" key={index}>
                                <div className="review-header">
                                    <img src={review.img} alt={review.name} className="avatar" />
                                    <h3 className="review-title">{review.name}</h3>
                                </div>
                                <p className="review-text">{review.review}</p>
                                <div className="review-footer">
                                    <div className="stars" aria-label={t('starRating', { stars: review.stars.length })}>{review.stars}</div>
                                    <div className="time">{review.time}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <form className="review-form" onSubmit={handleReviewSubmit}>
                        <h3>{t('leaveReview')}</h3>
                        <div className="form-group">
                            <label htmlFor="name">{t('name')}</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={newReview.name}
                                onChange={handleReviewChange}
                                required
                                aria-required="true"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="review">{t('review')}</label>
                            <textarea
                                id="review"
                                name="review"
                                value={newReview.review}
                                onChange={handleReviewChange}
                                required
                                aria-required="true"
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label>{t('rating')}</label>
                            <StarRating starsSelected={newReview.stars.length} onStarClick={handleStarClick} />
                        </div>
                        <button 
                            type="submit" 
                            className="btnn btnn-primary"
                            data-tooltip-id="submit-review-tooltip"
                            data-tooltip-content={t('Click to submit your review!')}
                        >
                            {t('submitReview')}
                        </button>
                        <Tooltip id="submit-review-tooltip" />
                    </form>
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
                        <li><Link smooth to="#discover">Destinations</Link></li>
                        <li><Link smooth to="#packages">Packages</Link></li>
                        <li><Link smooth to="#about">Blog</Link></li>
                    </ul>
                </div>
                <div className='footerSection'>
                    <h4>Help</h4>
                    <ul>
                        <li><Link smooth to="#about">FAQ</Link></li>
                        <li><Link smooth to="#about">Contact Us</Link></li>
                        <li><Link smooth to="#about">Support Center</Link></li>
                    </ul>
                </div>
                <div className='footerSection'>
                    <h4>About</h4>
                    <ul>
                        <li><Link smooth to="#about">Our Story</Link></li>
                        <li><Link smooth to="#about">Team</Link></li>
                        <li><Link smooth to="#about">Careers</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
        
        </>
    );
};

export default Japan;