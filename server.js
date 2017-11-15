var express = require('express');
// var cors = require('cors');
// create our app
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};


var app = express();
// app.use(cors());
//add functionality to express application

const PORT = process.env.PORT || 3000;

//comment out if testing local 
// app.use(function (req, res, next){
//     if (req.headers['x-forwarded-proto'] === 'http') {
//         next();
//     } else {
//         res.redirect('http://' + req.hostname + req.url);
//     }
// });


app.use(function (req, res, next){
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
         next();
    }
});

app.use(allowCrossDomain);

app.use(express.static('public'));



app.listen(PORT , function () {
	console.log('Express server is up on port ' + PORT );
});