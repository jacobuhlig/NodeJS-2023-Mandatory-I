import express from "express";
const router = express.Router();


import templateEngine from "../templateEngine.js";


const extension = "about"
const partOfPath = "./public/pages/" + extension;


// Content titles
import subjects from "../subjects/subjects.js";
const topicsNavbar = subjects.getSubjects();
const subTopicsSidebar = subjects.getAbout();


// Rendered content for components
const subTopicsContent = templateEngine.renderListElements(subTopicsSidebar, extension);
const topicsContent = templateEngine.renderListElements(topicsNavbar, "");


// Constructed pages

// General - about
const aboutPath = templateEngine.readPage(partOfPath + "/aboutMe/about.html");

const aboutPage = templateEngine.renderPage(aboutPath, {
    tabTitle: "Mandatory | About",
    subTopics: subTopicsContent,
    topics: topicsContent
});


// theCourse
const theCoursePath = templateEngine.readPage(partOfPath + "/theCourse/theCourse.html");

const theCoursePage = templateEngine.renderPage(theCoursePath, {
    tabTitle: "About | theCourse",
    subTopics: subTopicsContent,
    topics: topicsContent
});



// Endpoints
router.get("/", (req, res) => {
    res.send(aboutPage);
});


router.get("/theCourse/", (req, res) => {
    res.send(theCoursePage);
});



export { router };