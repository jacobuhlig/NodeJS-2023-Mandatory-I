import express from "express";
const app = express();


app.use(express.static("public"));


import templateEngine from "./util/templateEngine.js";

import subjects from "./util/subjects/subjects.js";
const topicsNavbar = subjects.getSubjects();


// Rendered content for components
const topicsContent = templateEngine.renderListElements(topicsNavbar, "");


// Routers
// JS Basics
import { router as jsBasicsRouter } from "./util/routers/jsBasics.js";
app.use("/js-basics", jsBasicsRouter);

// Web Architecture
import { router as webArchitectureRouter } from "./util/routers/webArchitecture.js";
app.use("/web-architecture", webArchitectureRouter);

// Node and Packages
import { router as nodeAndPackagesRouter } from "./util/routers/nodeAndPackages.js";
app.use("/node-and-packages", nodeAndPackagesRouter);

// Security and Performance
import { router as securityAndPerformanceRouter } from "./util/routers/securityAndPerformance.js";
app.use("/security-and-performance", securityAndPerformanceRouter);



// About
// import { router as aboutRouter } from "./util/routers/about.js";
// app.use("/webArchitecture", aboutRouter);



// Universal - root path for all pages
const extension = "/";
const partOfPath = "./public/pages" + extension;


// Constructed pages

// Frontpage
const frontpagePath = templateEngine.readMarkdown(partOfPath + "frontpage/frontpage.md");

const frontpagePage = templateEngine.renderFrontpage(frontpagePath, {
  tabTitle: "Mandatory | Welcome",
  cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css" />`,
  topics: topicsContent
});



// Endpoints

// Frontpage
/* app.get("/", (req, res) => {
  res.send(frontpagePage)
}); */

app.get("/", async (req, res) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const todo = await response.json();
    res.send(todo);
  } catch (error) {
    console.error("Error fetching todo:", error);
    res.status(500).send("Error fetching todo");
  }
});


// Status message
const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("The server is running on port", PORT);
});