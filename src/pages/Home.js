import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/whitebg.jpg';
import breitling from '../assets/breitling.jpg';
import bvlgari from '../assets/bvlgari.jpg';
import cartier from '../assets/cartier.jpg';
import chopard from '../assets/chopard.jpg';
import longines from '../assets/longines.jpg';
import omega from '../assets/omega.jpg';
import patek from '../assets/patek.jpg';
import rolex from '../assets/rolex.jpg';
import seiko from '../assets/seiko.jpg';
import tissot from '../assets/tissot.jpg';
import watch1 from '../assets/watch1.jfif';
import watch2 from '../assets/watch2.jfif';
import watch3 from '../assets/watch3.jfif';
import watch4 from '../assets/watch4.jfif';
import watch5 from '../assets/watch5.jfif';
import watch7 from '../assets/watch7.jpg';


import '../styles/Home.css';

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer'>
        <div className='home-intro'>
        <h1>ZÜRICH</h1>
        <p>Timeless elegance on your wrist:</p> <p>Exquisite collection of pre-owned luxury watches</p>
        <Link to='/collection'>
          <button>Collection</button>
        </Link>
        </div>
        
        <div className="container">
        <div className="full-view"></div>
        <div className="preview-list">
            <ul>
                <li>
                    <input type="radio" id="tab-1" name="gallery-group"/>
                    
                    <label for="tab-1">
                        <div class="tab">
                            <img src={watch1} />
                        </div>
                    </label>

                    <div class="content">
                        <img src={watch1} />
                    </div>
                </li>

                <li>
                    <input type="radio" id="tab-2" name="gallery-group"/>
                    <label for="tab-2">
                        <div class="tab">
                            <img src={watch2}/>
                        </div>
                    </label>
                    <div class="content">
                        <img src={watch2} />
                    </div>
                </li>

                <li>
                    <input type="radio" id="tab-3" name="gallery-group"/>
                    <label for="tab-3">
                        <div class="tab">
                            <img
                                src={watch3} />
                        </div>
                    </label>
                    <div class="content">
                        <img
                            src={watch3} />
                    </div>
                </li>
              
                <li>
                    <input type="radio" id="tab-5" name="gallery-group"/>
                    <label for="tab-5">
                        <div class="tab">
                            <img
                                src={watch5}/>
                        </div>
                    </label>
                    <div class="content">
                            <img src={watch5} />
                        </div>
                </li>
                <li>
                    <input type="radio" id="tab-6" name="gallery-group"/>
                    <label for="tab-6">
                        <div class="tab">
                            <img
                                src={watch4}/>
                        </div>
                    </label>
                    <div class="content">
                            <img src={watch4} />
                        </div>
                </li>
                <li>
                    <input type="radio" id="tab-7" name="gallery-group"/>
                    <label for="tab-7">
                        <div class="tab">
                            <img
                                src={watch7}/>
                        </div>
                    </label>
                    <div class="content">
                            <img src={watch7} />
                        </div>
                </li>
            </ul>
        </div>
    </div>
        
        <div className='slideshow'>
          <img src={breitling} /> 
          <img src={bvlgari} /> 
          <img src={cartier} /> 
          <img src={chopard} /> 
          <img src={longines} /> 
          <img src={omega} /> 
          <img src={patek} /> 
          <img src={rolex} /> 
          <img src={seiko} /> 
          <img src={tissot} /> 
          <img src={breitling} /> 
          <img src={bvlgari} /> 
          <img src={cartier} /> 
          <img src={chopard} /> 
          <img src={longines} /> 
        </div>
      </div>
    </div>
  );
}

export default Home;
