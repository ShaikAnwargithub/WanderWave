const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Listing = require("./models/listings.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsmate = require("ejs-mate");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsmate);
app.use(express.static(path.join(__dirname, "/public")));

main()
  .then((res) => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

//root route
app.get("/", (req, res) => {
  res.send("Hi you are on ROOT");
});

//index route
app.get("/listings", async (req, res) => {
  alllistings = await Listing.find({});
  res.render("listings/index.ejs", { alllistings });
});

//new route
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

//show route
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
});

//edit route
app.get("/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
});

//update route
app.put("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, req.body);
  res.redirect(`/listings/${id}`);
});

//create route
app.post("/listings", async (req, res) => {
  await Listing.insertOne(req.body);
  res.redirect("/listings");
});

//delete route
app.delete("/listings/:id/delete", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listings");
});

app.listen(8080, () => {
  console.log("server listrning on port 8080");
});
