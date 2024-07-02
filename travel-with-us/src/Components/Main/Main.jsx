import React from 'react'
import './main.css'

import chinaImage from '../../Assets/china.png';
import algeriaImage from '../../Assets/algeria.png';
import netherlandsImage from '../../Assets/netherlands.png';
import japanImage from '../../Assets/japan.png';
import turkeyImage from '../../Assets/turkey.png';

const Main = () => {
    return (
        <section className='main container section'>

            <div className="infoSection">
                <h2 className="infoHeader">
                    Plan, Book, Travel—It's That Simple
                </h2>
                <div className="infoContent">
                    <div className="infoItem">
                        <h3>Flexible Plans</h3>
                        <p>Enjoy peace of mind with free cancellation up to 24 hours before most bookings.</p>
                    </div>
                    <div className="infoItem">
                        <h3>Expert Recommendations</h3>
                        <p>Get insights from fellow travelers and see honest reviews on flights, hotels, and attractions.</p>
                    </div>
                    <div className="infoItem">
                        <h3>Best Price Guarantee</h3>
                        <p>Explore the world without overspending—find unbeatable prices on all your travel needs.</p>
                    </div>
                </div>
            </div>

            <div className="destinationSection">
                <h2 className="sectionTitle">Explore trending destinations</h2>
                <div className="countryGrid">
                    <div className="countryItem">
                        <img src={chinaImage} alt="China" />
                        <p>China</p>
                    </div>
                    <div className="countryItem">
                        <img src={japanImage} alt="Japan" />
                        <p>Japan</p>
                    </div>
                    <div className="countryItem">
                        <img src={turkeyImage} alt="Turkey" />
                        <p>Turkey</p>
                    </div>
                    <div className="countryItem">
                        <img src={netherlandsImage} alt="Netherlands" />
                        <p>Netherlands</p>
                    </div>
                    <div className="countryItem">
                        <img src={algeriaImage} alt="Algeria" />
                        <p>Algeria</p>
                    </div>
                </div>

                <h2 className="sectionTitle">Check out these beautiful countries</h2>
                <div className="countryGrid">
                    <div className="countryItem">
                        <img src={chinaImage} alt="China" />
                        <p>China</p>
                    </div>
                    <div className="countryItem">
                        <img src={japanImage} alt="Japan" />
                        <p>Japan</p>
                    </div>
                    <div className="countryItem">
                        <img src={turkeyImage} alt="Turkey" />
                        <p>Turkey</p>
                    </div>
                    <div className="countryItem">
                        <img src={netherlandsImage} alt="Netherlands" />
                        <p>Netherlands</p>
                    </div>
                    <div className="countryItem">
                        <img src={algeriaImage} alt="Algeria" />
                        <p>Algeria</p>
                    </div>
                </div>

                <h2 className="sectionTitle">Most visited locations</h2>
                <div className="countryGrid">
                    <div className="countryItem">
                        <img src={chinaImage} alt="China" />
                        <p>China</p>
                    </div>
                    <div className="countryItem">
                        <img src={japanImage} alt="Japan" />
                        <p>Japan</p>
                    </div>
                    <div className="countryItem">
                        <img src={turkeyImage} alt="Turkey" />
                        <p>Turkey</p>
                    </div>
                    <div className="countryItem">
                        <img src={netherlandsImage} alt="Netherlands" />
                        <p>Netherlands</p>
                    </div>
                    <div className="countryItem">
                        <img src={algeriaImage} alt="Algeria" />
                        <p>Algeria</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Main
