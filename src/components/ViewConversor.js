import React, { useContext, useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { LinkContext } from '../LinkContext';

export const ViewConversor = () => {
  const {linkCut} = useContext(LinkContext);
  const [link, setLink] = useState({
    copied1: false,
    copied2: false,
    copied3: false
  });

  console.log(linkCut)
  return (
    <div className={linkCut.ok && linkCut.loader === false?'container_View active': 'container_View'}>

      <div className='view-1'>
          <input  disabled={true} className='original_link' type='text' value={linkCut.obj.original_link} />
        

        <input defaultValue={linkCut.obj.short_link}
              disabled={true}
              onChange={({target: {value}}) => setLink({value, copied: false})} 
        />

          <CopyToClipboard text={linkCut.obj.short_link}
            onCopy={() => setLink({copied: true})}>
            <span></span>
          </CopyToClipboard>

          <CopyToClipboard text={linkCut.obj.short_link}
            onCopy={() => setLink({copied1: true})}>
            <button style={{background:`${link.copied1? ' hsl(256, 18%, 29%)' : ' hsl(180, 66%, 49%)'}`}} >
              {
                link.copied1? 'Copied!': 'Copy'
              }
            </button>
          </CopyToClipboard>
      </div>

      <div className='view-2'>
        <input  disabled={true} className='original_link' type='text' value={linkCut.obj.original_link} />

        <input defaultValue={linkCut.obj.short_link2}
              disabled={true}
              onChange={({target: {value}}) => setLink({value, copied: false})} 
        />

          <CopyToClipboard text={linkCut.obj.short_link2}
            onCopy={() => setLink({copied2: true})}>
            <span></span>
          </CopyToClipboard>

          <CopyToClipboard text={linkCut.obj.short_link2}
            onCopy={() => setLink({copied2: true})}>
            <button  style={{background:`${link.copied2? ' hsl(256, 18%, 29%)' : ' hsl(180, 66%, 49%)'}`}} >
              {
                link.copied2? 'Copied!': 'Copy'
              }
            </button>
          </CopyToClipboard>
      </div>

      <div className='view-3'>
        <input  disabled={true} className='original_link' type='text' value={linkCut.obj.original_link} />
        
        <input defaultValue={linkCut.obj.short_link3}
              disabled={true}
              onChange={({target: {value}}) => setLink({value, copied: false})} 
        />

          <CopyToClipboard text={linkCut.obj.short_link3}
            onCopy={() => setLink({copied3: true})}>
            <span></span>
          </CopyToClipboard>

          <CopyToClipboard text={linkCut.obj.short_link3}
            onCopy={() => setLink({copied3: true})}>
            <button  style={{background:`${link.copied3? ' hsl(256, 18%, 29%)' : ' hsl(180, 66%, 49%)'}`}} >
              {
                link.copied3? 'Copied!': 'Copy'
              }
            </button>
          </CopyToClipboard>
      </div>

    </div>
  )
}
