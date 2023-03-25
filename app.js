import express from "express";
const app = express();

app.use(express.static("public"));

import templateEngine from "./util/templateEngine.js";



// Universal - root path for all pages
const partOfPath = "./public/pages/";



// Constructed pages
const frontpagePath = templateEngine.readPage(partOfPath + "frontpage/frontpage.html");
const frontpagePage = templateEngine.renderPage(frontpagePath, {
  tabTitle: "Mandatory | Welcome"
});

const aboutPath = templateEngine.readPage(partOfPath + "about/about.html");
const aboutPage = templateEngine.renderPage(aboutPath, {
  tabTitle: "Mandatory | About"
});


// Endpoints
app.get("/", (req, res) => {
  res.send(frontpagePage)
});

app.get("/about", (req, res) => {
  res.send(aboutPage)
});


// Status message
const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("The server is running on port", PORT);
});