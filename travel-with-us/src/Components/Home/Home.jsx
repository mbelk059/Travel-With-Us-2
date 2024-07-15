import React, { useState, useEffect } from 'react';
import './home.css';

import heroImage from '../../Assets/hero.png';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { SiTripadvisor } from 'react-icons/si';
import { BsListTask } from 'react-icons/bs';
import { TbApps } from 'react-icons/tb';
import { FaUsers } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

// Import images for search results
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

const destinationImages = {
  'France': franceImage,
  'Japan': japanImage,
  'Morocco': moroccoImage, 
  'United Arab Emirates': uaeImage,
  'Algeria': algeriaImage, 
};

const destinations = [
  { name: 'Paris', country: 'France', pricePerNight: 150 },
  { name: 'Tokyo', country: 'Japan', pricePerNight: 200 },
  { name: 'Alger', country: 'Algeria', pricePerNight: 250 },
  { name: 'Abu Dhabi', country: 'United Arab Emirates', pricePerNight: 500 },
  { name: 'Rabat', country: 'Morocco', pricePerNight: 180 },
];

const Home = () => {
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [price, setPrice] = useState(5000);
  const [currentDate, setCurrentDate] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [numTravelers, setNumTravelers] = useState(1);
  const [isEcoFriendly, setIsEcoFriendly] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 1500 });

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    setCurrentDate(`${year}-${month}-${day}`);
  }, []);

  const handleToggleFilters = () => {
    setShowMoreFilters(!showMoreFilters);
  };

  const handleSearch = () => {
    if (!searchQuery || !selectedDate) {
      alert('Please fill in all the fields');
      return;
    }

    const results = destinations.filter(dest => 
      (dest.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
       dest.country.toLowerCase().includes(searchQuery.toLowerCase())) &&
      dest.pricePerNight <= price
    );
    setSearchResults(results);
  };

  const handleSelectSuggestion = (suggestion) => {
    setSearchQuery(suggestion);
  };

  return (
    <section id="home" className="home">
      <div className="overlay"></div>
      <img src={heroImage} alt="Hero Image" className="hero-image" />

      <div className="homeContent container">
        <div className="textDiv">
          <h1 data-aos="fade-up" className="homeTitle">
            Travel Smarter, Travel With Us
          </h1>
        </div>

        <div className={`cardDiv grid ${showMoreFilters ? 'expanded' : ''}`}>
          <div className="destinationInput">
            <label htmlFor="city">Search your destination:</label>
            <div className="input flex">
              <input 
                type="text" 
                placeholder="Where to?" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                list="destination-suggestions"
              />
              <datalist id="destination-suggestions">
                {destinations.map((dest, index) => (
                  <option key={index} value={dest.name}>{dest.country}</option>
                ))}
              </datalist>
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <input 
                type="date" 
                min={currentDate} 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">${price}</h3>
            </div>
            <div className="input flex">
              <input 
                type="range" 
                max="1000" 
                min="100" 
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
              />
            </div>
          </div>

          <div className="searchOptions flex" onClick={handleToggleFilters}>
            <HiFilter className="icon" />
            <span>MORE FILTERS</span>
          </div>

          {showMoreFilters && (
            <>
              <div className="ecoFriendlyOption">
                <label htmlFor="ecoFriendly">Eco-friendly option:</label>
                <div className="input flex">
                  <input 
                    type="checkbox" 
                    id="ecoFriendly"
                    checked={isEcoFriendly}
                    onChange={(e) => setIsEcoFriendly(e.target.checked)}
                  />
                </div>
              </div>
              <div className="numTravelers">
                <label htmlFor="numTravelers">Number of travelers:</label>
                <div className="input flex">
                  <input
                    type="number"
                    id="numTravelers"
                    min="1"
                    max="10"
                    placeholder="Max 10"
                    value={numTravelers}
                    onChange={(e) => setNumTravelers(e.target.value)}
                  />
                  <FaUsers className="icon" />
                </div>
              </div>
            </>
          )}

          <button className="searchButton" onClick={handleSearch}>Search</button>
        </div>

        {searchResults.length > 0 && (
          <div className="searchResults">
            <button className="closeButton" onClick={() => setSearchResults([])}>×</button>
            <h2>Search Results:</h2>
            <ul>
              {searchResults.map((dest, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 0', borderBottom: '1px solid #ccc' }}>
                  <img src={destinationImages[dest.country]} alt={dest.name} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '5px', marginRight: '1rem' }} />
                  <p style={{ margin: 0, fontSize: '0.9rem' }}>{dest.name}, {dest.country} - ${dest.pricePerNight} per night</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <SiTripadvisor className="icon" />
          </div>

          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;