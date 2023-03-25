import express from "express";
const router = express.Router();

import templateEngine from "../templateEngine.js";

const extension = "loops/"
const partOfPath = "./public/pages/" + extension;
import { getSubjects } from "../subjects/subjects.js";
const topicsNavbar = getSubjects();
const arrayOfStrings = ["loops", "forEach"];

// Constructed pages
// General
const loopsPath = templateEngine.readPage(partOfPath + "loopsGeneral/loopsGeneral.html");
const loopsPage = templateEngine.renderPage(loopsPath, {
    tabTitle: "Mandatory | Loops",
    subTopics: templateEngine.renderListElements(arrayOfStrings, extension),
    topics: templateEngine.renderListElements(topicsNavbar, extension)
});

// forEach
const forEachPath = templateEngine.readPage(partOfPath + "forEach/forEach.html");
const forEachPage = templateEngine.renderPage(forEachPath, {
    tabTitle: "Loops | ForEach",
    subTopics: templateEngine.renderListElements(arrayOfStrings, extension),
    topics: templateEngine.renderListElements(topicsNavbar, extension)
});


// Enpoints

router.get("/", (req, res) => {
    res.send(loopsPage);
});

router.get("/forEach", (req, res) => {
    res.send(forEachPage);
});


export { router };