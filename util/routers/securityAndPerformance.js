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

// git
const nameOfPage_git = "git";
const pathToGit = partOfPath + endOfPath(nameOfPage_git);
const gitPath = templateEngine.readMarkdown(pathToGit);

// fetch
const nameOfPage_fetch = "fetch";
const pathToFetch = partOfPath + endOfPath(nameOfPage_fetch);
const fetchPath = templateEngine.readMarkdown(pathToFetch);

// xss-prevention
const nameOfPage_xss = "xssPrevention";
const pathToXss = partOfPath + endOfPath(nameOfPage_xss);
const xssPath = templateEngine.readMarkdown(pathToXss);

// memory-optimization
const nameOfPage_memory = "memoryOptimization";
const pathToMemory = partOfPath + endOfPath(nameOfPage_memory);
const memoryPath = templateEngine.readMarkdown(pathToMemory);

// ssr-vs.-csr
const nameOfPage_ssr = "ssrVsCsr";
const pathToSsr = partOfPath + endOfPath(nameOfPage_ssr);
const ssrPath = templateEngine.readMarkdown(pathToSsr);

// sanitization-and-npm
const nameOfPage_sanitization = "sanitizationAndNpm";
const pathToSanitization = partOfPath + endOfPath(nameOfPage_sanitization);
const sanitizationPath = templateEngine.readMarkdown(pathToSanitization);



//security-and-performance
router.get("/", async (req, res) => {
    const securityPage = await templateEngine.renderPage(securityPath
, (req.baseUrl + req.path), nameOfPage_security, {
        tabTitle: "Mandatory | Security & Performance",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(securityPage);
});

// git
router.get("/git/", async (req, res) => {
    const gitPage = await templateEngine.renderPage(gitPath, (req.baseUrl + req.path), nameOfPage_git, {
        tabTitle: "Security & Performance | Git",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(gitPage);
});

// fetch
router.get("/fetch/", async (req, res) => {
    const fetchPage = await templateEngine.renderPage(fetchPath, (req.baseUrl + req.path), nameOfPage_fetch, {
        tabTitle: "Security & Performance | Fetch",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(fetchPage);
});

// xss-prevention
router.get("/xss-prevention/", async (req, res) => {
    const xssPage = await templateEngine.renderPage(xssPath, (req.baseUrl + req.path), nameOfPage_xss, {
        tabTitle: "Security & Performance | XSS Prevention",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(xssPage);
});

// memory-optimization
router.get("/memory-optimization/", async (req, res) => {
    const memoryPage = await templateEngine.renderPage(memoryPath, (req.baseUrl + req.path), nameOfPage_memory, {
        tabTitle: "Security & Performance | Memory Optimization",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(memoryPage);
});

// ssr-vs.-csr
router.get("/ssr-vs.-csr/", async (req, res) => {
    const ssrPage = await templateEngine.renderPage(ssrPath, (req.baseUrl + req.path), nameOfPage_ssr, {
        tabTitle: "Security & Performance | SSR vs. CSR",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    }); 
    res.send(ssrPage);
});

// sanitization-and-npm
router.get("/sanitization-and-npm/", async (req, res) => {

    const sanitizationPage = await templateEngine.renderPage(sanitizationPath, (req.baseUrl + req.path), nameOfPage_sanitization, {
        tabTitle: "Security & Performance | Sanitization & NPM",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(sanitizationPage);
});



export { router };