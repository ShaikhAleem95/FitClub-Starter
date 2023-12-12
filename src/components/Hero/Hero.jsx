import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";




const Hero = () => {
  return (
    <div className='hero'>
        <div className="left-h">
            <Header/>


        {/* the best add  <span>the best fitness club in town</span> */}
        <div className='the-best-ad'>
          <div></div>
          <span>the best fitness club in town</span>
        </div>

        {/* Hero heading  */}
          
            <div className='hero-text'>
                <div>
                {/* app.css se call kiye stroke-text */}
                  <span className='stroke-text'>shape</span>
                  <span>Your</span>
                </div>
                <div>
                  <span>
                     Ideal body
                  </span>
                </div>
                <div>
                    <span>
                      In here we wil help you to shape and build live up your life to fullest.
                    </span>
                </div>  
            </div>

            {/* end stroke text */}


          {/* figures */}
          <div className="figures">
            <div>
              <span>+140</span>
              <span>expert</span>
            </div>
            <div>
              <span>+978</span>
              <span>members</span>
            </div>
            <div>
              <span>+50</span>
              <span>fitness Programs</span>
            </div>
          </div>
          {/* figures end */}

          {/* hero buttons  */}
          <div className='hero-buttons'>
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More</button>

          </div>
          </div>
          {/* end hero button */}

           {/* right side used */}
             <div className='right-h' >

                <button className='btn'>Join Now</button>

                <div className='heart-rate'>
                  <img src={Heart} alt="" />
                  <span>Heart Rate</span>
                  <span>116 bpn</span>


                </div>

               
              <div class="re"></div>
              <div class="re"></div>





              </div>

              {/* end right side used */}
    </div>
  );
};

export default Hero
