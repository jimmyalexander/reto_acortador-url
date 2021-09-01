import React, { useContext, useEffect, useState } from 'react'
import { LinkContext } from '../LinkContext';
import { Loader } from './Loader';
import { Statistics } from './Statistics';
import { ViewConversor } from './ViewConversor';

export const Conversor = () => {
  const {linkCut,setLinkCut} = useContext(LinkContext);
  const [holder, setHolder] = useState('Shorten a link here..')
  const [url, setUrl] = useState('');
  const [urlValue, setUrlValue] = useState('')
  
  useEffect(()=> {
    const Api = async()=> {
      try {
        if(url !== ''){
          const response =await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
          const {result} = await response.json();
          setLinkCut({
            obj : result,
            ok: true,
            loader: false
          })

          setUrlValue('');
        }
      } catch (error) {
        console.error(error);
      }
    }
    Api()
  },[url,setLinkCut])

  
  
  const handleSumbimt  = (e) => {
    e.preventDefault();
    if(urlValue !== ''){
      setUrl(urlValue);
      setLinkCut({
        ...linkCut,
        loader: true
      })
      setHolder('Shorten a link here..');
    }
    else{
      setHolder('Please add a link');
    }
  }
  
  const handleChange = (e) => {
    setUrlValue(e.target.value)
  }

  return (
    <div className='container_link'>

      <div className="container_shorten">
        <form autoComplete='off' onSubmit={  handleSumbimt } action="">
          <input style={{border:`${holder === 'Please add a link'? '1px solid red' : ''}`}} 
            placeholder={holder} 
            onChange={ handleChange }  
            value={urlValue} 
            type="text" 
            name="link" 
            className={holder === 'Please add a link'? 'red': ''} />
          {
            linkCut.loader? <Loader />:<button>Shorten it!</button>
          }
        </form>
      </div>
      
      <ViewConversor />
      <Statistics />
    </div>
  )
}
