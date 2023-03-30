import express from "express";
const router = express.Router();


import templateEngine from "../templateEngine.js";


const extension = "loops"
const partOfPath = "./public/pages/" + extension;
const cssHighlightPath = `<link rel="stylesheet" href="/assets/css/syntax-highlighting.css" />`;
const markdownPath = `<link rel="stylesheet" href="/assets/css/markdown.css" />`;


// Content titles
import subjects from "../subjects/subjects.js";
const topicsNavbar = subjects.getSubjects();
const subTopicsSidebar = subjects.getLoops();


// Rendered content for components
const subTopicsContent = templateEngine.renderListElements(subTopicsSidebar, extension);
const topicsContent = templateEngine.renderListElements(topicsNavbar, "");


// Constructed pages

// General - loops
const loopsPath = templateEngine.readMarkdown(partOfPath + "/loopsGeneral/loopsGeneral.md");

const loopsPage = templateEngine.renderPage(loopsPath, {
    tabTitle: "Mandatory | Loops",
    cssLink: cssHighlightPath + markdownPath,
    subTopics: subTopicsContent,
    topics: topicsContent
});


// forEach
const forEachPath = templateEngine.readMarkdown(partOfPath + "/forEach/forEach.md");

const forEachPage = templateEngine.renderPage(forEachPath, {
    tabTitle: "Loops | ForEach",
    cssLink: cssHighlightPath + markdownPath,
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