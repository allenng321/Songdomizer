import {App} from "../components/App";
import { useSelector, useDispatch } from 'react-redux'
import { changeArtist } from '../redux/artistPlaying'

let data = [
  { id: 1, name: "glaive"},
  { id: 2, name: "logic"},
  { id: 3, name: "ericdoa"},
  { id: 4, name: "yxngxr"},
  { id: 5, name: "iann dior"},
  { id: 6, name: "lil uzi vert"},
  { id: 7, name: "juice wrld"},
  { id: 8, name: "rodick porter"}
]

function OnClickBarItem(artist) {
  // print("called")
  App.SetCurrentArtist(artist);

}

export {data, OnClickBarItem}
