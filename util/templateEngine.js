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



function renderListElements(arrayOfStrings, endpoint) {

  let result = "";
  const length = arrayOfStrings.length;

  for (let i = 0; i < length; i++) {
    const currentEndpoint = arrayOfStrings[i];
    const visualElement = capitalizeWords(arrayOfStrings[i]);



    /* Below should be revised, since I need the actual path, in order to make something flexible and dynamic. 
    ${containsAboutAndLoops ? "class=\"active\"" : ""}
    */
    /* let containsAboutAndLoops = false; */
    /* if (arrayOfStrings.includes("about") && arrayOfStrings.includes("loops")) {
      containsAboutAndLoops = true;
    } */


    let link;
    if (currentEndpoint === endpoint || endpoint === "") {
      link = `
      <li>
        <a rel="preload" href="/${currentEndpoint}">${visualElement}</a>
      </li>
      `;
    } else {
      link = `
      <li>
        <a rel="preload" href="/${endpoint}/${currentEndpoint}">${visualElement}</a>
      </li>
      `;
    }

    result += link;
  }

  return result;
}


function capitalizeWords(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
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