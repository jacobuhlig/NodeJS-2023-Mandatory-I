import express from "express";
const router = express.Router();


import templateEngine from "../templateEngine.js";


const extension = "security-and-performance"
const partOfPath = "./public/pages/";
const cssHighlightPath = `<link rel="stylesheet" href="/assets/css/syntax-highlighting.css" />`;
const markdownPath = `<link rel="stylesheet" href="/assets/css/markdown.css" />`;


// Content titles
import subjects from "../subjects/subjects.js";
const topicsNavbar = subjects.getSubjects();
const subTopicsSidebar = subjects.getSecurityAndPerformance();



// Rendered content for components
const subTopicsContent = templateEngine.renderListElements(subTopicsSidebar, extension);
const topicsContent = templateEngine.renderListElements(topicsNavbar, "");

function endOfPath(nameOfPage) {
    return `securityAndPerformance/${nameOfPage}/${nameOfPage}.md`;
}



// security-and-performance
const nameOfPage_security = "securityAndPerformance";
const pathToSecurity = partOfPath + endOfPath(nameOfPage_security);
const securityPath = templateEngine.readMarkdown(pathToSecurity);

// xss-prevention
const nameOfPage_xss = "xssPrevention";
const pathToXss = partOfPath + endOfPath(nameOfPage_xss);
const xssPath = templateEngine.readMarkdown(pathToXss);

// memory-optimization
const nameOfPage_memory = "memoryOptimization";
const pathToMemory = partOfPath + endOfPath(nameOfPage_memory);
const memoryPath = templateEngine.readMarkdown(pathToMemory);

// ssr-vs.-csr-factors
const nameOfPage_ssr = "ssrVsCsrFactors";
const pathToSsr = partOfPath + endOfPath(nameOfPage_ssr);
const ssrPath = templateEngine.readMarkdown(pathToSsr);

// sanitization-and-npm
const nameOfPage_sanitization = "sanitizationAndNpm";
const pathToSanitization = partOfPath + endOfPath(nameOfPage_sanitization);
const sanitizationPath = templateEngine.readMarkdown(pathToSanitization);




//security-and-performance
router.get("/", (req, res) => {
    const securityPath = templateEngine.renderPage(securityPath
, (req.baseUrl + req.path), nameOfPage_security, {
        tabTitle: "Mandatory | Security & Performance",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(securityPath);
});

// xss-prevention
router.get("/xss-prevention/", (req, res) => {
    const xssPage = templateEngine.renderPage(xssPath, (req.baseUrl + req.path), nameOfPage_xss, {
        tabTitle: "JS Basics | XSS Prevention",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(xssPage);
});

// memory-optimization
router.get("/memory-optimization/", (req, res) => {
    const memoryPage = templateEngine.renderPage(memoryPath, (req.baseUrl + req.path), nameOfPage_memory, {
        tabTitle: "JS Basics | Memory Optimization",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(memoryPage);
});

// ssr-vs.-csr-factors
router.get("/ssr-vs.-csr-factors/", (req, res) => {
    const ssrPage = templateEngine.renderPage(ssrPath, (req.baseUrl + req.path), nameOfPage_ssr, {
        tabTitle: "JS Basics | SSR vs. CSR Factors",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    }); 
    res.send(ssrPage);
});

// sanitization-and-npm
router.get("/sanitization-and-npm/", (req, res) => {

    const sanitizationPage = templateEngine.renderPage(sanitizationPath, (req.baseUrl + req.path), nameOfPage_sanitization, {
        tabTitle: "JS Basics | Sanitization & NPM",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(sanitizationPage);
});



export { router };