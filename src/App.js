import React, { useState } from 'react';
import { LinkContext } from './LinkContext';
import { Principal } from './pages/Principal';
import './style/App.scss';

function App() {
  const [linkCut, setLinkCut] = useState({
    obj: {},
    ok: false,
    loader: false
  })
  return (
    <LinkContext.Provider value={
      {
        linkCut,
        setLinkCut,
      }
    }>
      <Principal />
    </LinkContext.Provider>
  );
}

export default App;
