import fs from "fs";
import escape from "escape-html";

function renderPage(page, config = {}) {

  const navbar = fs.readFileSync("./public/components/00._navbar/navbar.html").toString()
    .replace("$TAB_TITLE", config.tabTitle || "Mandatory I")
    .replace("$CSS_LINK", config.cssLink || "")
    .replace("$TOPIC_LIST", config.topics || "Topic");;

  const sidebar = fs.readFileSync("./public/components/01._sidebar/sidebar.html").toString()
    .replace("$SUB_TOPIC_LIST", config.subTopics || "SubTopic");

  const topFooter = fs.readFileSync("./public/components/02._footer/topFooter.html").toString()

  const footer = fs.readFileSync("./public/components/02._footer/footer.html").toString()
    .replace("$FOOTER_YEAR", `© ${new Date().getFullYear()}`);

  return navbar + sidebar + page + topFooter + footer;
}


function renderFrontpage(page, config = {}) {

  const navbar = fs.readFileSync("./public/components/00._navbar/navbar.html").toString()
    .replace("$TAB_TITLE", config.tabTitle || "Mandatory I")
    .replace("$CSS_LINK", config.cssLink || "")
    .replace("$TOPIC_LIST", config.topics || "Topic");

  const footer = fs.readFileSync("./public/components/02._footer/footer.html").toString()
    .replace("$FOOTER_YEAR", `© ${new Date().getFullYear()}`);

  return navbar + page + footer;
}


function renderListElements(arrayOfStrings, extension) {

  let length = arrayOfStrings.length;
  let result = "";

  console.log(1, arrayOfStrings);

  for (let i = 0; i < length; i++) {
    const endpoint = arrayOfStrings[i];
    const visualElement = capitalizeFirstLetter(arrayOfStrings[i]);
    const link = `<li><a href="${extension + endpoint}">${visualElement}</a></li>`;
    result += link;
  }

  return result;
}


function capitalizeFirstLetter(string) {

  return string.charAt(0).toUpperCase() + string.slice(1);
}


function readPage(pagePath) {

  return fs.readFileSync(pagePath).toString();
}


export default {
  renderPage,
  renderFrontpage,
  renderListElements,
  readPage
};