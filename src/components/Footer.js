import React from 'react';
import facebook from '../assets/images/icon-facebook.svg';
import twitter from '../assets/images/icon-twitter.svg';
import pinterest from '../assets/images/icon-pinterest.svg';
import instagram from '../assets/images/icon-instagram.svg';


export const Footer = () => {
  return (
    <div className='container_footer'>
      <footer>
        <h1>Shortly</h1>
        <div className="item-1 features">
          <h3>Features</h3>
          <a href="hhtps://">Link Shortening</a>
          <a href="hhtps://">Branded Links</a>
          <a href="hhtps://">Analytics</a>          
        </div>

        <div className="item-2 resources">
            <h3>Resources</h3>
            <a href="hhtps://">Blog</a>
            <a href="hhtps://">Developers</a>
            <a href="hhtps://">Support</a>
        </div>

        <div className="item-3 company">
            <h3>Company</h3>
            <a href="hhtps://">About</a>
            <a href="hhtps://">Our Team</a>
            <a href="hhtps://">Careers</a>
            <a href="hhtps://">Contact</a>
        </div>

        <div className="item-4 redes">
            <a href="facebook.com" ><img src={facebook} alt='facebook' title='facebook' /></a>
            <a href="twitter.com"><img src={twitter} alt='twitter' title='twitter' /></a>
            <a href="pinterest.com"><img src={pinterest} alt='pinteres' title='pinteres' /></a>
            <a href="instagram.com"><img src={instagram} alt='instagram' title='instagram' /></a>
        </div>

      </footer>
    </div>
  )
}
