import React from 'react';
import LogoBrand from '../assets/images/icon-brand-recognition.svg';
import LogoRecords from '../assets/images/icon-detailed-records.svg';
import LogoCustomizable from '../assets/images/icon-fully-customizable.svg';


export const Statistics = () => {
  return (
    <div className='container_statistics'>
      <div className="statistics_title">
        <h1>Advanced Statistics</h1>
        <p>Track how your links are  performing
          across the web with  our advanced statistics dashboard.
        </p>
      </div>

      <section className="statistics_details">
        <span className='line'>
          
        </span>
        <div className="detail-1">
          <figure>
            <img src={LogoBrand} alt="" />
          </figure>

          <div className="detail-info">
            <h2>Brand Recognition</h2>
            <p>Boost your brand recognition with
               each click. Generic links don´t
               mean a thing. Branded links help
               instil confidence in your content.
            </p>
          </div>
        </div>

        <div className="detail-2">
          <figure>
              <img src={LogoRecords} alt="" />
            </figure>

            <div className="detail-info">
              <h2>Detailed Records</h2>
              <p>Gain insights into who is clicking
                 your links. Knowing when and
                 where people engage with your
                 content helps inform better
                 desicions.
              </p>
            </div>
        </div>

        <div className="detail-3">
          <figure>
              <img src={LogoCustomizable} alt="" />
            </figure>

            <div className="detail-info">
              <h2>Fully Customizable</h2>
              <p>Improve brand awareness and
                 content discoverability through
                 customizable links, supercharging
                 audience engagement.
              </p>
            </div>
        </div>

      </section>
    </div>
  )
}
