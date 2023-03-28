import express from "express";
const router = express.Router();


import templateEngine from "../templateEngine.js";


const extension = "loops"
const partOfPath = "./public/pages/" + extension;


import subjects from "../subjects/subjects.js";
const topicsNavbar = subjects.getSubjects();
const subTopicsSidebar = subjects.getLoops();


// Constructed pages
// General
const loopsPath = templateEngine.readPage(partOfPath + "/loopsGeneral/loopsGeneral.html");

// forEach
const forEachPath = templateEngine.readPage(partOfPath + "/forEach/forEach.html");



// Endpoints
router.get("/", (req, res) => {
    const loopsPage = templateEngine.renderPage(loopsPath, {
        tabTitle: "Mandatory | Loops",
        subTopics: templateEngine.renderListElements(subTopicsSidebar, extension),
        topics: templateEngine.renderListElements(topicsNavbar, "")
    });
    res.send(loopsPage);
});



router.get("/forEach/", (req, res) => {
    const forEachPage = templateEngine.renderPage(forEachPath, {
        tabTitle: "Loops | ForEach",
        subTopics: templateEngine.renderListElements(subTopicsSidebar, extension),
        topics: templateEngine.renderListElements(topicsNavbar, "")
    });
    res.send(forEachPage);
});



export { router };