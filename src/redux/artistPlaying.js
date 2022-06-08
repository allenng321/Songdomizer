import { createSlice } from '@reduxjs/toolkit'

export const artistPlaying = createSlice({
  name: 'currentArtistPlaying',
  initialState: {
    value: "Select One Artist",
  },
  reducers: {
    changeArtist: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {changeArtist} = artistPlaying.actions

export default artistPlaying.reducer
