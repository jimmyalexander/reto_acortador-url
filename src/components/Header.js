import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import LogoWorking  from '../assets/images/illustration-working.svg';

export const Header = () => {
  const [active, setActive] = useState(false);

  const handleBurguer = (e) => {
    setActive(!active);
  }
  return (
    <div className='container_header'>

      <header>

        <div className="container_anclas">
          <h1>Shortly</h1>
          <div onClick={ handleBurguer} className='icon_burguer'>
            {
              active?  <AiOutlineClose />
              :<AiOutlineMenu />
            }
          </div>

          <div className={ active?'header_anclas transl': 'header_anclas'}>
            <nav className='nav_links'>
              <ul>
                <a target='blank' href="//">Features</a>
                <a target='blank' href="//">Pricing</a>
                <a target='blank' href="//">Resources</a>
              </ul>
            </nav>

            <nav className="nav_login">
              <ul>
                <a target='blank' href="//">Login</a>
                <a target='blank' className='sign' href="//">Sign Up</a>
              </ul>
            </nav>
          </div>
        </div>

        <div className='main'>
          <div className="container_home">
            <figure>
              <img src={LogoWorking} alt="" />
            </figure>
          </div>

          <div className="container_home-info">
            <h1>More than just <br/> shorter links</h1>
            <p>Build your brand´s recognition and get detailed <br /> insghts on how your links are performing.</p>
            <a target='blank' href="//">Get Started</a>
          </div>
        </div>

      </header>
      
    </div>
  )
}
