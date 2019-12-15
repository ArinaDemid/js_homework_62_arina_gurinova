import React from 'react';
import  '../About/About.css';
import PhotoImage from './AboutPhoto/PhotoImage.jpg';
import PhotoMe from './AboutPhoto/PhotoAbout.jpg';

const AboutUs = () => {
  
  return (
    <div className='About'>
      <img src={PhotoImage} alt="PhotoImage" className="AboutImage"></img>
      <h3 className="AboutTitle">ABOUT</h3>
      <img src={PhotoMe} alt="PhotoMe" className="AboutPhotoMe"></img>
      <p>I am Martijn Barten, specialised in optimising revenue by combining 
        revenue management with marketing strategies. I have more than 15 years 
        experience in developing, implementing and managing revenue management 
        processes and strategies for individual properties and multi-properties.
      </p>
      <br/>
      <p>In 2017, I launched Revfine.com. Revfine stands for refining revenue. 
        Revfine.com is an online magazine for the hotel, hospitality and travel 
        industry with practical tips to optimise revenue. On Revfine.com I share my 
        knowledge and experiences, and I present upcoming trends and technologies 
        that help to innovate the travel industry. Yearly, more than 1 million 
        professionals use the practical tips on Revfine.com to optimise their revenue.
      </p>
      <br/>
      <p>You can find all tips in the categories Revenue Management, Marketing & 
        Distribution and Technology & Software.
      </p>
    </div>
  )
}

export default AboutUs;