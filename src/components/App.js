import React from 'react'

import '../assets/css/App.css'
import video from '../assets/bg.mp4'

function App() {
  return(
    <video loop muted autoPlay id="backgroundVideo">
        <source src={video} type="video/mp4"></source>
    </video>
  );
}

export default App
