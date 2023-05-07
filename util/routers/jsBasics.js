import express from "express";
const router = express.Router();


import templateEngine from "../templateEngine.js";


const extension = "js-basics"
const partOfPath = "./public/pages/";
const cssHighlightPath = `<link rel="stylesheet" href="/assets/css/syntax-highlighting.css" />`;
const markdownPath = `<link rel="stylesheet" href="/assets/css/markdown.css" />`;



// Content titles
import subjects from "../subjects/subjects.js";
const topicsNavbar = subjects.getSubjects();
const subTopicsSidebar = subjects.getJSBasics();



// Rendered content for components
const subTopicsContent = templateEngine.renderListElements(subTopicsSidebar, extension);
const topicsContent = templateEngine.renderListElements(topicsNavbar, "");

function endOfPath(nameOfPage) {
    return `jsBasics/${nameOfPage}/${nameOfPage}.md`;
}



// js-basics
const nameOfPage_jsBasics = "jsBasics";
const pathToJsBasics = partOfPath + endOfPath(nameOfPage_jsBasics);
const jsBasicsPath = templateEngine.readMarkdown(pathToJsBasics);

// data-types-and-scoping
const nameOfPage_data = "dataTypesAndScoping";
const pathToData = partOfPath + endOfPath(nameOfPage_data);
const dataPath = templateEngine.readMarkdown(pathToData);

// Functions-&-Callbacks
const nameOfPage_functions = "functionsAndCallbacks";
const pathToFunctions = partOfPath + endOfPath(nameOfPage_functions);
const functionsPath = templateEngine.readMarkdown(pathToFunctions);

// Loop-Methods
const nameOfPage_loops = "loopMethods";
const pathToLoops = partOfPath + endOfPath(nameOfPage_loops);
const loopsPath = templateEngine.readMarkdown(pathToLoops);

// Date-&-Time
const nameOfPage_date = "dateAndTime";
const pathToDate = partOfPath + endOfPath(nameOfPage_date);
const datePath = templateEngine.readMarkdown(pathToDate);



// Endpoints
// js-basics
router.get("/", async (req, res) => {
    const jsBasicsPage = await templateEngine.renderPage(jsBasicsPath, (req.baseUrl + req.path), nameOfPage_jsBasics, {
        tabTitle: "Mandatory | JS Basics",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(jsBasicsPage);
});

// Data-Type-&-Scoping
router.get("/data-types-and-scoping/", async (req, res) => {
    const dataPage = await templateEngine.renderPage(dataPath, (req.baseUrl + req.path), nameOfPage_data, {
        tabTitle: "JS Basics | Data Types & Scoping",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent 
    });
    res.send(dataPage);
});

// Functions-&-Callbacks
router.get("/functions-and-callbacks/", async (req, res) => {
    const functionsPage = await templateEngine.renderPage(functionsPath, (req.baseUrl + req.path), nameOfPage_functions, {
        tabTitle: "JS Basics | Functions & Callbacks",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(functionsPage);
});

// Loop-Methods
router.get("/loop-methods/", async (req, res) => {
    const loopsPage = await templateEngine.renderPage(loopsPath, (req.baseUrl + req.path), nameOfPage_loops, {
        tabTitle: "JS Basics | Loop Methods",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(loopsPage);
});

// Date-&-Time
router.get("/date-and-time/", async (req, res) => {
    const datePage = await templateEngine.renderPage(datePath, (req.baseUrl + req.path), nameOfPage_date, {
        tabTitle: "JS Basics | Date & Time",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(datePage);
});



export { router };