var express = require("express");
var app = express();
const path = require("path");

// set the view engine to ejs
app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

app.use("/assets", express.static("assets"));

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  res.render("home");
});

app.get("/marketplace", function (req, res) {
  res.render("marketplace");
})

app.get("/burn", function(req, res) {
  res.render("burn");
})

app.get("/mint", function(req, res) {
  res.render("mint");
})

app.get("/profile", function(req, res) {
  res.render("profile");
})

app.get("/collection", function(req, res) {
  res.render("collection");
})

app.get("/nft", function(req, res) {
  res.render('nft');
})


app.listen(8080);
console.log("Server is listening on port 8080");
