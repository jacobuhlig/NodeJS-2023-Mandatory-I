import express from "express";
const router = express.Router();


import templateEngine from "../templateEngine.js";


const extension = "loops"
const partOfPath = "./public/pages/" + extension;


// Content titles
import subjects from "../subjects/subjects.js";
const topicsNavbar = subjects.getSubjects();
const subTopicsSidebar = subjects.getLoops();


// Rendered content for components
const subTopicsContent = templateEngine.renderListElements(subTopicsSidebar, extension);
const topicsContent = templateEngine.renderListElements(topicsNavbar, "");


// Constructed pages

// General - loops
const loopsPath = templateEngine.readPage(partOfPath + "/loopsGeneral/loopsGeneral.html");

const loopsPage = templateEngine.renderPage(loopsPath, {
    tabTitle: "Mandatory | Loops",
    subTopics: subTopicsContent,
    topics: topicsContent
});


// forEach
const forEachPath = templateEngine.readPage(partOfPath + "/forEach/forEach.html");

const forEachPage = templateEngine.renderPage(forEachPath, {
    tabTitle: "Loops | ForEach",
    subTopics: subTopicsContent,
    topics: topicsContent
});



// Endpoints
router.get("/", (req, res) => {
    res.send(loopsPage);
});


router.get("/forEach/", (req, res) => {
    res.send(forEachPage);
});



export { router };