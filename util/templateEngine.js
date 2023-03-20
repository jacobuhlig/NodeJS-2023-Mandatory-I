import fs from "fs";
import escape from "escape-html";

function renderPage(page, config={}) {

  const navbar = fs.readFileSync("./public/components/00._navbar/navbar.html").toString()
    .replace("$TAB_TITLE", config.tabTitle || "Mandatory I")
    .replace("$CSS_LINK", config.cssLink || "");

  const sidebar = fs.readFileSync("./public/components/01._sidebar/sidebar.html").toString();
  
  const footer = fs.readFileSync("./public/components/02._footer/footer.html").toString()
    .replace("$FOOTER_YEAR", `© ${new Date().getFullYear()}`);

  return navbar + sidebar + page + footer;
}

function readPage(pagePath) {
  return fs.readFileSync(pagePath).toString();
}

export default {
  renderPage,
  readPage
};