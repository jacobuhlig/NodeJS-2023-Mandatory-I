// import matter from "gray-matter";
// import escape from "escape-html";
import fs from "fs";
import hljs from "highlight.js";
import {marked} from "marked";

const renderer = new marked.Renderer();

// Override of the default code block rendering
renderer.code = (code, language) => {
  const validLang = !!(language && hljs.getLanguage(language));
  const highlighted = validLang ? hljs.highlight(code, { language }).value : code;
  const langClass = validLang ? ` class="hljs language-${language}"` : ' class="hljs"';
  return `<pre${langClass}><code>${highlighted}</code></pre>`;
};

marked.setOptions({
  renderer,
  highlight: function (code, lang) {
    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: "", // highlight.js css expects a top-level 'hljs' class.
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartypants: false,
  xhtml: false,
});



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
        <a href="/${currentEndpoint}">${visualElement}</a>
      </li>
      `;
    } else {
      link = `
      <li>
        <a href="/${endpoint}/${currentEndpoint}">${visualElement}</a>
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

// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }



function readPage(pagePath) {
  return fs.readFileSync(pagePath).toString();
}



function readMarkdown(pagePath) {
  const markdownContent = fs.readFileSync(pagePath).toString();
  const htmlContent = marked(markdownContent);
  return htmlContent;
}



export default {
  renderPage,
  renderFrontpage,
  renderListElements,
  readPage,
  readMarkdown
};
