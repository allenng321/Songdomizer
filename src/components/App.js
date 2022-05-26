import React from 'react'

import '../assets/css/App.css'
import video from '../assets/bg.mp4'
import LeftBar from '../components/LeftBar.js'

function App() {
  return(
    <div id="wrapper">
      <div id="main-content">
          {/* <Grid container spacing={2}>
              <Grid item xs={4}>
                  <Item><LeftBar></LeftBar></Item>
              </Grid>
              <Grid item xs={8}>
                  <Item>The Other Section</Item>
              </Grid>
          </Grid> */}
          <LeftBar></LeftBar>
          <div id="headline"><h2> YOUR ARTISTS</h2></div>

      </div>

      <div id="background-video">
        <video loop muted autoPlay>
          <source src={video} type="video/mp4"></source>
        </video>
      </div>
    </div>

  );
}

export default App
