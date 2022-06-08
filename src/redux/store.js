import { configureStore } from '@reduxjs/toolkit'
import artistPlayingReducer from './artistPlaying'

export default configureStore({
  reducer: {
    currentArtist: artistPlayingReducer,
  },
})
