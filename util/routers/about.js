import express from "express";
const router = express.Router();


import templateEngine from "../templateEngine.js";


const extension = "about"
const partOfPath = "./public/pages/" + extension;
const cssHighlightPath = `<link rel="stylesheet" href="/assets/css/syntax-highlighting.css" />`;
const markdownPath = `<link rel="stylesheet" href="/assets/css/markdown.css" />`;


// Content titles
import subjects from "../subjects/subjects.js";
const topicsNavbar = subjects.getSubjects();
const subTopicsSidebar = subjects.getAbout();


// Rendered content for components
const subTopicsContent = templateEngine.renderListElements(subTopicsSidebar, extension);
const topicsContent = templateEngine.renderListElements(topicsNavbar, "");


// Constructed pages

function endOfPath(nameOfPage) {
    return `/${nameOfPage}/${nameOfPage}.md`;
}


// General - about
const nameOfPage_about = "about";
const pathToAbout = partOfPath + endOfPath(nameOfPage_about);
const aboutPath = templateEngine.readMarkdown(pathToAbout);


// theCourse
const nameOfPage_theCourse = "theCourse";
const pathToTheCourse = `${partOfPath}${endOfPath(nameOfPage_theCourse)}`;
const theCoursePath = templateEngine.readMarkdown(pathToTheCourse);



// Endpoints
router.get("/", (req, res) => {
    const aboutPage = templateEngine.renderPage(aboutPath, (req.baseUrl + req.path), nameOfPage_about, {
        tabTitle: "Mandatory | About",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(aboutPage);
});


router.get("/the-course/", (req, res) => {
    const theCoursePage = templateEngine.renderPage(theCoursePath, (req.baseUrl + req.path), nameOfPage_theCourse, {
        tabTitle: "About | theCourse",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(theCoursePage);
});



export { router };