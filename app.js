import express from "express";
const app = express();

app.use(express.static("public"));

import templateEngine from "./util/templateEngine.js";
import { getSubjects } from "./util/subjects/subjects.js";
const topicsNavbar = getSubjects();
// Routers



// Universal - root path for all pages
const extension = "/";
const partOfPath = "./public/pages" + extension;

console.log(topicsNavbar);


// Constructed pages

// Frontpage
const frontpagePath = templateEngine.readPage(partOfPath + "frontpage/frontpage.html");


// About page
const aboutPath = templateEngine.readPage(partOfPath + "about/about.html");
const aboutPage = templateEngine.renderPage(aboutPath, {
  tabTitle: "Mandatory | About"
});


// Endpoints
app.get("/", (req, res) => {
  const frontpagePage = templateEngine.renderFrontpage(frontpagePath, {
    tabTitle: "Mandatory | Welcome",
    cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css" />`,
    topics: templateEngine.renderListElements(topicsNavbar, extension.slice(0, -1), req.path)
  });
  res.send(frontpagePage)
});


import { router as loopsRouter } from "./util/routers/loops.js";
// Loops
app.use("/loops", loopsRouter);



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