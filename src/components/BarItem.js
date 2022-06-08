import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {OnClickBarItem} from '../backend/BarItemHandler.js';

function BarItem (props) {
  return (
    <Card sx={{maxHeight: 50, maxWidth: 250, m: 1.75}}
          style={{backgroundColor: "transparent", boxShadow: "none"}}
          >
      <CardContent>
      <h2 onClick={() => OnClickBarItem(props.name)}>
              {props.name}</h2>

      </CardContent>


    </Card>
  );
}

export default BarItem;
