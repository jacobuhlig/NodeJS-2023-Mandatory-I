import express from "express";
const router = express.Router();


import templateEngine from "../templateEngine.js";
import path from "path";


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
const nameOfPage_loops = "loops";
const pathToLoopsGeneral = partOfPath + `/${nameOfPage_loops}/${nameOfPage_loops}.md`;
const loopsPath = templateEngine.readMarkdown(pathToLoopsGeneral);


// forEach
const nameOfPage_forEach = "forEach";
const pathToForEach = partOfPath + `/${nameOfPage_forEach}/${nameOfPage_forEach}.md`;
const forEachPath = templateEngine.readMarkdown(pathToForEach);



// Endpoints
router.get("/", (req, res) => {
    const loopsPage = templateEngine.renderPage(loopsPath, (req.baseUrl + req.path), nameOfPage_loops, {
        tabTitle: "Mandatory | Loops",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent 
    });
    res.send(loopsPage);
});


router.get("/forEach/", (req, res) => {
    const forEachPage = templateEngine.renderPage(forEachPath, (req.baseUrl + req.path), nameOfPage_forEach, {
        tabTitle: "Loops | ForEach",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(forEachPage);
});



export { router };