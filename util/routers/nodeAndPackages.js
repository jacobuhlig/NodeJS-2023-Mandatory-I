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
const subTopicsSidebar = subjects.getNodeAndPackages();



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

// npm
const nameOfPage_npm = "npm";
const pathToNpm = partOfPath + endOfPath(nameOfPage_npm);
const npmPath = templateEngine.readMarkdown(pathToNpm);



// Endpoints
// node-and-packages
router.get("/", async (req, res) => {
    const nodeAndPackagesPage = await templateEngine.renderPage(nodeAndPackagesPath, (req.baseUrl + req.path), nameOfPage_nodeAndPackages, {
        tabTitle: "Mandatory | Node and Packages",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(nodeAndPackagesPage);
});

// node.js-and-express
router.get("/node.js-and-express", async (req, res) => {
    const nodeAndExpressPage = await templateEngine.renderPage(nodeAndExpressPath, (req.baseUrl + req.path), nameOfPage_nodeAndExpress, {
        tabTitle: "Node and Packages | Node.js and Express",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(nodeAndExpressPage);
});

// import-export
router.get("/import-export", async (req, res) => {
    const importExportPage = await templateEngine.renderPage(importExportPath, (req.baseUrl + req.path), nameOfPage_importExport, {
        tabTitle: "Node and Packages | Import and Export",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(importExportPage);
});

// package.json-and-node_modules
router.get("/package.json-and-node_modules", async (req, res) => {
    const packageJsonPage = await templateEngine.renderPage(packageJsonPath, (req.baseUrl + req.path), nameOfPage_packageJson, {
        tabTitle: "Node and Packages | Package.json and Node Modules",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(packageJsonPage);
});

// static-files-in-express
router.get("/static-files-in-express", async (req, res) => {
    const staticFilesPage = await templateEngine.renderPage(staticFilesPath, (req.baseUrl + req.path), nameOfPage_staticFiles, {
        tabTitle: "Node and Packages | Static Files in Express",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(staticFilesPage);
});

// npm
router.get("/npm", async (req, res) => {
    const npmPage = await templateEngine.renderPage(npmPath, (req.baseUrl + req.path), nameOfPage_npm, {
        tabTitle: "Node and Packages | NPM",
        cssLink: cssHighlightPath + markdownPath,
        subTopics: subTopicsContent,
        topics: topicsContent
    });
    res.send(npmPage);
});



export { router };