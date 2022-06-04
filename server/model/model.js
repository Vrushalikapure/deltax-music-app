const mongoose = require('mongoose');

var Artist = new mongoose.Schema({
    name : {
        type : String,
        required: true,
        unique: true
    },
    DOB : {
        type: String,
        required: true,
    },
    Desc : String,
    rating : Number,
    songs : {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Song'
          }],
          required: true
    },
})

var Song = new mongoose.Schema({
    img  :  Buffer,
    name : {
        type : String,
        required: true,
        unique: true
    },
    DOR : {
        type: String,
        required: true,
    },
    artists : {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Artist'
          }],
          required: true
    },
    rating : Number
})

const SongDb = mongoose.model('Song', Song);
const ArtistDb = mongoose.model('Artist', Artist);

module.exports = {SongDb, ArtistDb};