var express = require("express");
var app = express();
//Use an environment variable for the port. If none, set to 3000
const PORT = process.env.PORT || 3000;
//if https is used, redirect to http
app.use(function(req, res, next){
   if (req.headers['x-forwarded-proto'] === 'https') {
       res.redirect('http://' + req.hostname + req.url);
   } else {
       next();
   } 
});
//use the static public folder.
app.use(express.static("public"));

app.listen(PORT, process.env.IP, function(){console.log("Roger, roger.")});