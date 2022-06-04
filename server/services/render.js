const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    const one = 'http://localhost:3000/api/songs/top';
    const two = 'http://localhost:3000/api/artists/top';
    const top10Songs = axios.get(one);
    const top10Artists = axios.get(two);

    axios.all([top10Songs, top10Artists]).then(axios.spread((...responses) => {
        const responseTop10Songs = responses[0]
        const responseTop10Artists = responses[1]
        // use/access the results 
        // console.log(responseTop10Songs.data[0].img.data.toString('base64'));
        // console.log(responseTop10Artists.data);
        res.render('index', { songs : responseTop10Songs.data, artists : responseTop10Artists.data });
      })).catch(errors => {
        // react on errors.
        res.send(errors);
      })
}

exports.add_song = (req, res) =>{
  axios.get('http://localhost:3000/api/artists')
        .then(function(response){
          res.render('add_song', { artists : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

// exports.update_user = (req, res) =>{
//     axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
//         .then(function(userdata){
//             res.render("update_user", { user : userdata.data})
//         })
//         .catch(err =>{
//             res.send(err);
//         })
// }