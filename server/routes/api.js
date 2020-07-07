const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');

const db = "mongodb://localhost:27017/videoLibrary";
mongoose.Promise = global.Promise;

//Connect
mongoose.connect(db, function(err){
    if(err){
        console.error("Error!"+err)
    }
    else{
        console.log("Mongodb Connected")
    }
});


router.get('/videos', function(req, res){
    console.log("Get Request for all videos");

    Video.find({})
         .exec(function(err, videos){
             if(err){
                 console.log("Error retrieving videos");
             }
             else{
                 res.json(videos);
             }
         });
});

module.exports = router;