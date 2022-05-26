import React from 'react'
import BarItem from './BarItem.js';
import {data} from '../backend/BarItemHandler.js'

function LeftBar () {
  return(
    <div>
      <div id="headline"><h2> YOUR ARTISTS</h2></div>

      <div id="artist-list">
          {data.map((artist) => (
            <BarItem key={artist.id} name={artist.name}></BarItem>
          ))}
      </div>
    </div>
  );
}

export default LeftBar
