import express from "express";
const router = express.Router();


import templateEngine from "../templateEngine.js";


const extension = "web-architecture"
const partOfPath = "./public/pages/";
const cssHighlightPath = `<link rel="stylesheet" href="/assets/css/syntax-highlighting.css" />`;
const markdownPath = `<link rel="stylesheet" href="/assets/css/markdown.css" />`;


// Content titles
import subjects from "../subjects/subjects.js";
const topicsNavbar = subjects.getSubjects();
const subTopicsSidebar = subjects.getWebArchitecture
();



// Rendered content for components
const subTopicsContent = templateEngine.renderListElements(subTopicsSidebar, extension);
const topicsContent = templateEngine.renderListElements(topicsNavbar, "");

function endOfPath(nameOfPage) {
    return `webArchitecture/${nameOfPage}/${nameOfPage}.md`;
}



// web-architecture
const nameOfPage_webArchitecture = "webArchitecture";
const pathToWebArchitecture = partOfPath + endOfPath(nameOfPage_webArchitecture);
const webArchitecturePath = templateEngine.readMarkdown(pathToWebArchitecture);

// rest-api-and-crud
const nameOfPage_restApi = "restAndCrud";
const pathToRestApi = partOfPath + endOfPath(nameOfPage_restApi);
const restApiPath = templateEngine.readMarkdown(pathToRestApi);

// ssr-vs.-csr
const nameOfPage_ssr = "csrVsSsr";
const pathToSsr = partOfPath + endOfPath(nameOfPage_ssr);
const ssrPath = templateEngine.readMarkdown(pathToSsr);

// frontend-structure
const nameOfPage_frontend = "frontendStructure";
const pathToFrontend = partOfPath + endOfPath(nameOfPage_frontend);
const frontendPath = templateEngine.readMarkdown(pathToFrontend);

// redirection
const nameOfPage_redirection = "redirection";
const pathToRedirection = partOfPath + endOfPath(nameOfPage_redirection);
const redirectionPath = templateEngine.readMarkdown(pathToRedirection);




// Endpoints
// web-architecture
router.get("/", (req, res) => {
    const jsBasicsPage = templateEngine.renderPage(webArchitecturePath, (req.baseUrl + req.path), nameOfPage_webArchitecture, {
        tabTitle: "Mandatory | Web Architecture",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(jsBasicsPage);
});


// rest-and-crud
router.get("/rest-and-crud/", (req, res) => {
    const restApiPage = templateEngine.renderPage(restApiPath, (req.baseUrl + req.path), nameOfPage_restApi, {
        tabTitle: "Web Architecture | REST and CRUD",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(restApiPage);
});

// csr-vs.-ssr
router.get("/csr-vs.-ssr/", (req, res) => {
    const ssrPage = templateEngine.renderPage(ssrPath, (req.baseUrl + req.path), nameOfPage_ssr, {
        tabTitle: "Web Architecture | SSR vs. CSR",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(ssrPage);
});

// frontend-structure
router.get("/frontend-structure/", (req, res) => {
    const frontendPage = templateEngine.renderPage(frontendPath, (req.baseUrl + req.path), nameOfPage_frontend, {
        tabTitle: "Web Architecture | Frontend Structure",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(frontendPage);
});

// redirection
router.get("/redirection/", (req, res) => {
    const redirectionPage = templateEngine.renderPage(redirectionPath, (req.baseUrl + req.path), nameOfPage_redirection, {
        tabTitle: "Web Architecture | Redirection",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(redirectionPage);
});


export { router };