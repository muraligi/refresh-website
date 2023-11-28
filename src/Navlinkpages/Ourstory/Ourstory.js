import React from 'react';
import "../Ourstory/Ourstory.css";

function Ourstory() {
  return (
    <div>
      <div className='story-full-page'>
        <div className='storytop-row'>
        <img className='leftstyimg' src={require("../../images/StoryImages/Storyimg-lefttop.png")} />
        <img className='rightstyimg' src={require("../../images/StoryImages/Storyimg-righttop.png")} />
        </div>
        <div className='white-space-story'>
          <h1>It's so great to meet you.</h1>
          <p>
            We bring quality men's personal care to the modern consumer. Our formulas are made 
            with science-backed, clean ingredients, are 100% vegan, and never tested on animals.
          </p>
        </div>

        <div className='Man-row'>
          <img id="man-img" src={require("../../images/StoryImages/manimg.png")} />
          <div className="white-space-conman">
            <h1>Two Matts, one vision.</h1>
            <p>
             Matt M. (left) spent decades dealing with skin issues from acne, to blemishes
             and redness. The only products that seemed to work were wildly expensive.            
            </p>
            <p>
              Matt T. (right) spent decades building products for some of the best largest and most premium brands in the world (e.g. Tom Ford, Lab Series, etc.).
            </p>
            <p>
             We teamed up to create a world-class offering of men's products leveraging the 
             experience and personal lessons we've learned along the way.
            </p>
            <p>
             We're excited that you're here and hope that you'll join along for the ride.
            </p>
          </div>
        </div>

        <div className="develop-page">
          <h1>
            We’ve taken our passion and developed A+ personal care products for guys 
            everywhere.
          </h1>
          <p>WE PROMISE YOU TWO THINGS:</p>
        </div>

        <div className='promise-area'>
          <div className='left-area'>
          <h1>Better for you.</h1>
          <p>
            We choose the best possible ingredients. Our products are 100% vegan, 
            never tested on animals, and free-of parabens, sulfates, silicon, phthalates, 
            and aluminum.
          </p>
          </div>
          <div className='right-area'>
          <h1>Accessible price.</h1>
          <p>
            We’ve eliminated everything you don’t need and left in only the high-performing 
            essentials. You'll look great and feel even better without ever breaking the bank.
          </p>
          </div>
        </div>
        
        <div className="Man-row">
          <img id="nature-img" src={require("../../images/StoryImages/greamnat.png")} />
          <div className="white-space-connat">
            <h1>Ingredients with integrity.</h1>
            <p>
             We only use the best, most effective ingredients. Our products are 100% vegan,
             certified cruelty-free, and free of parabens, sulfates, phthalates, silicones, and aluminum.
            </p>
          </div>
        </div>

        <div id="pro-row">
          <div className="white-space-pro">
            <h1>Our environmental commitment.</h1>
            <p>
             Our packaging materials are 100% recyclable, and our products are made right 
             here in the USA, eliminating unnecessary transport emissions.
            </p>
          </div>
          <img id="pro-img" src={require("../../images/StoryImages/productboximg.png")} />
        </div>

        <div className='storybot-row'>
        <img className='leftbotimg' src={require("../../images/StoryImages/Storyimg-leftbot.png")} />
        <img className='rightbotimg' src={require("../../images/StoryImages/Storyimg-rightbot.png")} />
        </div>
        <div className='white-space-bot'>
          <h1>Shop the internet's favorite products.</h1>
          <div className='btn-row'>
            <button>For body</button>
            <button>For hair</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Ourstory;