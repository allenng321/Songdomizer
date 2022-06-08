import React from 'react'
import '../assets/css/App.css'
import video from '../assets/bg.mp4'
import Grid from '@mui/material/Grid';
import LeftBar from '../components/LeftBar.js'
import { useSelector, useDispatch } from 'react-redux'
import { changeArtist } from '../redux/artistPlaying'



function App() {

  const currentArtist = useSelector((state) => state.currentArtist.value)
  const dispatch = useDispatch()

  function SetCurrentArtist(artist) {
    dispatch(changeArtist(artist))
  }

  App.SetCurrentArtist = SetCurrentArtist

  return(
    <div id="wrapper">
      <div id="main-content">
          <Grid container spacing={2}>
              <Grid item xs={4}>
                  <LeftBar></LeftBar>
              </Grid>
              <Grid item xs={8} id="right-section">
                  <h2> {currentArtist} </h2>
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



export {App}
