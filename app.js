import express from "express";
const app = express();


app.use(express.static("public"));


import templateEngine from "./util/templateEngine.js";

import subjects from "./util/subjects/subjects.js";
const topicsNavbar = subjects.getSubjects();
const subTopicsSidebar = subjects.getLoops();


// Routers

// Loops
import { router as loopsRouter } from "./util/routers/loops.js";
app.use("/loops", loopsRouter);

// About
import { router as aboutRouter } from "./util/routers/about.js";
app.use("/about", aboutRouter);



// Universal - root path for all pages
const extension = "/";
const partOfPath = "./public/pages" + extension;

console.log(topicsNavbar);


// Constructed pages

// Frontpage
const frontpagePath = templateEngine.readPage(partOfPath + "frontpage/frontpage.md");

const frontpagePage = templateEngine.renderFrontpage(frontpagePath, {
  tabTitle: "Mandatory | Welcome",
  cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css" />`,
  topics: templateEngine.renderListElements(topicsNavbar, "")
});



// Endpoints

// Frontpage
app.get("/", (req, res) => {
  res.send(frontpagePage)
});



// Status message
const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("The server is running on port", PORT);
});