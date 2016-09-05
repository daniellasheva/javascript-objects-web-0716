var playlist= new Object({artist: 'songTitle'}); //all keys are strings


function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle})
}

function removeFromPlaylist (playlist, artist){
  delete playlist[artist];
  return playlist;
}
