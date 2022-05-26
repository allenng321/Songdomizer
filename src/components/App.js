import React from 'react'
import '../assets/css/App.css'
import video from '../assets/bg.mp4'
import Grid from '@mui/material/Grid';
import LeftBar from '../components/LeftBar.js'


function Test(name) {
  console.log("You clicked " + name);
}

function App() {
  return(
    <div id="wrapper">
      <div id="main-content">
          <Grid container spacing={2}>
              <Grid item xs={3}>
                  <LeftBar></LeftBar>
              </Grid>
              <Grid item xs={9}>
                  <h2>The Other Section</h2>
              </Grid>
          </Grid>


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
