import express from "express";
const router = express.Router();


import templateEngine from "../templateEngine.js";


const extension = "node-and-packages"
const partOfPath = "./public/pages/";
const cssHighlightPath = `<link rel="stylesheet" href="/assets/css/syntax-highlighting.css" />`;
const markdownPath = `<link rel="stylesheet" href="/assets/css/markdown.css" />`;


// Content titles
import subjects from "../subjects/subjects.js";
const topicsNavbar = subjects.getSubjects();
const subTopicsSidebar = subjects.getNodeAndPackages
();



// Rendered content for components
const subTopicsContent = templateEngine.renderListElements(subTopicsSidebar, extension);
const topicsContent = templateEngine.renderListElements(topicsNavbar, "");

function endOfPath(nameOfPage) {
    return `nodeAndPackages/${nameOfPage}/${nameOfPage}.md`;
}





// node-and-packages
const nameOfPage_nodeAndPackages = "nodeAndPackages";
const pathToNodeAndPackages = partOfPath + endOfPath(nameOfPage_nodeAndPackages);
const nodeAndPackagesPath = templateEngine.readMarkdown(pathToNodeAndPackages);

// node.js-and-express
const nameOfPage_nodeAndExpress = "nodeAndExpress";
const pathToNodeAndExpress = partOfPath + endOfPath(nameOfPage_nodeAndExpress);
const nodeAndExpressPath = templateEngine.readMarkdown(pathToNodeAndExpress);

// import-export
const nameOfPage_importExport = "importExport";
const pathToImportExport = partOfPath + endOfPath(nameOfPage_importExport);
const importExportPath = templateEngine.readMarkdown(pathToImportExport);

// package.json-and-node_modules
const nameOfPage_packageJson = "packageJsonAndNodeModules";
const pathToPackageJson = partOfPath + endOfPath(nameOfPage_packageJson);
const packageJsonPath = templateEngine.readMarkdown(pathToPackageJson);

// static-files-in-express
const nameOfPage_staticFiles = "staticFilesInExpress";
const pathToStaticFiles = partOfPath + endOfPath(nameOfPage_staticFiles);
const staticFilesPath = templateEngine.readMarkdown(pathToStaticFiles);

// security-and-performance
const nameOfPage_security = "securityAndPerformance";
const pathToSecurity = partOfPath + endOfPath(nameOfPage_security);
const securityPath = templateEngine.readMarkdown(pathToSecurity);






// Endpoints
// node-and-packages
router.get("/", (req, res) => {
    const nodeAndPackagesPage = templateEngine.renderPage(nodeAndPackagesPath, (req.baseUrl + req.path), nameOfPage_nodeAndPackages, {
        tabTitle: "Mandatory | Node and Packages",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(nodeAndPackagesPage);
});

// node.js-and-express
router.get("/node.js-and-express", (req, res) => {
    const nodeAndExpressPage = templateEngine.renderPage(nodeAndExpressPath, (req.baseUrl + req.path), nameOfPage_nodeAndExpress, {
        tabTitle: "Mandatory | Node.js and Express",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(nodeAndExpressPage);
});

// import-export
router.get("/import-export", (req, res) => {
    const importExportPage = templateEngine.renderPage(importExportPath, (req.baseUrl + req.path), nameOfPage_importExport, {
        tabTitle: "Mandatory | Import and Export",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(importExportPage);
});

// package.json-and-node_modules
router.get("/package.json-and-node_modules", (req, res) => {
    const packageJsonPage = templateEngine.renderPage(packageJsonPath, (req.baseUrl + req.path), nameOfPage_packageJson, {
        tabTitle: "Mandatory | Package.json and Node Modules",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(packageJsonPage);
});

// static-files-in-express
router.get("/static-files-in-express", (req, res) => {
    const staticFilesPage = templateEngine.renderPage(staticFilesPath, (req.baseUrl + req.path), nameOfPage_staticFiles, {
        tabTitle: "Mandatory | Static Files in Express",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(staticFilesPage);
});

// security-and-performance
router.get("/security-and-performance", (req, res) => {
    const securityPage = templateEngine.renderPage(securityPath, (req.baseUrl + req.path), nameOfPage_security, {
        tabTitle: "Mandatory | Security and Performance",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(securityPage);
});



export { router };