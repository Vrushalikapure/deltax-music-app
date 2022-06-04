const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

var upload = require('../middleware/middleware');
// /**
//  *  @description Root Route
//  *  @method GET /
//  */
route.get('/', services.homeRoutes);

// /**
//  *  @description add users
//  *  @method GET /add-user
//  */
route.get('/add-song', services.add_song)

// /**
//  *  @description for update user
//  *  @method GET /update-user
//  */
// route.get('/update-user', services.update_user)


// API
route.post('/api/songs', upload.single('image'), controller.createSong);
route.post('/api/artists', controller.createArtists);
route.get('/api/songs', controller.findSongs);
route.get('/api/artists', controller.findArtists);
// route.put('/api/songs/:id', controller.updateSong);
// route.put('/api/artists/:id', controller.updateArtist);
route.delete('/api/songs/:id', controller.deleteSong);
route.delete('/api/artists/:id', controller.deleteArtist);
route.get('/api/songs/top', controller.findTop10Songs);
route.get('/api/artists/top', controller.findTop10Artists);
route.put('/api/songs/rating', controller.updateSongRating);


module.exports = route