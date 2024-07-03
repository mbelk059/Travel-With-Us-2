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
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [price, setPrice] = useState(5000);

  // scroll animation
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const handleToggleFilters = () => {
    setShowMoreFilters(!showMoreFilters);
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
              <input type="text" placeholder="Where to?" />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">${price}</h3>
            </div>
            <div className="input flex">
              <input type="range" max="10000" min="100" value={price} onChange={(e) => setPrice(e.target.value)} />
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
                  <input type="checkbox" id="ecoFriendly" />
                </div>
              </div>
              <div className="numTravelers">
                <label htmlFor="numTravelers">Number of travelers:</label>
                <div className="input flex">
                  <input type="number" id="numTravelers" min="1" max="10" placeholder="Number of travelers" />
                </div>
              </div>
              <button className="searchButton">Search</button>
            </>
          )}
        </div>

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
