import express from "express";
const app = express();


app.use(express.urlencoded({ extended: true }));
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

// login
const loginPagePath = templateEngine.readMarkdown(partOfPath + "login/login.md");

const loginPagePage = templateEngine.renderFrontpage(loginPagePath, {
  tabTitle: "Login | Signup",
  cssLink: `<link rel="stylesheet" href="/pages/login/login.css" />`,
  topics: topicsContent
});

// admin
const adminPagePath = templateEngine.readMarkdown(partOfPath + "admin/admin.md");

const adminPagePage = templateEngine.renderFrontpage(adminPagePath, {
  tabTitle: "Admin | Create",
  cssLink: `<link rel="stylesheet" href="/pages/admin/admin.css" />`,
  topics: topicsContent
});



// Endpoints

// Frontpage
app.get("/", (req, res) => {
  res.send(frontpagePage)
});

// Authentication
app.get("/auth", (req, res) => {
  res.send(loginPagePage)
});

// Admin
app.get("/admin", (req, res) => {
  res.send(adminPagePage)
});


// Login/Signup functionality
const users = [
  { authUsername: "admin", authPassword: "1234", authEmail: "jacobuhlig@gmail.com" }
];

app.post("/login", (req, res) => {
  const inputUsername = req.body.username;
  const inputPassword = req.body.password;
  const validUser = users.find(user => user.authUsername === inputUsername && user.authPassword === inputPassword);
  if (validUser) {
      res.redirect("/admin");
  } else {
      res.redirect("/auth");
  }
});

app.post("/signup", (req, res) => {
  const newUsername = req.body.username;
  const newPassword = req.body.password;
  const newEmail = req.body.email;
  const user = {
    authUsername: newUsername,
    authPassword: newPassword,
    authEmail: newEmail
};
users.push(user);
res.redirect("/auth");
});



// API
app.post("/api/admin", (req, res) => {
  res.redirect(frontpagePage)
});



// Status message
const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("The server is running on port", PORT);
});