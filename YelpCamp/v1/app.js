var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req,res){
  res.render("landing");
});

app.get("/campgrounds", function(req, res){
  var campgrounds = [
    {name: "Dhaka", image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Dhaka_%2832709975263%29.jpg"},
    {name: "Rajshahi", image: "https://www.motorcyclevalley.com/images/locations/rajshahi.jpg"},
    {name: "Borishal", image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Guthia_mosque%2CBarisal.jpg"}
  ]

  res.render("campgrounds", {campgrounds: campgrounds});
})
app.listen(3000, function(req, res){
  console.log("YelpCamp server is running!");
});
