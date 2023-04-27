# Frontend Structure

Now before delving into the structure of the frontend, it would be appropriate to address that the server side elements (aka. what's contained within the "util"-folder), should ideally not be located in the same project, as the frontend (aka. public).
There are various reasons for this, but the main one being that there'd be a clear separation of concerns.

Regardless. Let's proceed with the structure of the frontend.

<br></br>

___
<br>

In this project in particular, there are three noteworthy folders:
1. assets
2. components
3. pages

All of these are static files, and are available to the client.

## assets
In this folder, there are
1. Cascading Style Sheets (CSS)
2. Fonts
3. images
4. javascript (js)

## components
In this folder there are the various reusable pieces of content.

These are used by the template engine (templateEngine.js) to produce the final page rendering.

## pages
In this folder all of the textual content resides.

In this project the structure has been set up as such:

At the top level, there are topics, under each of which is an array of sub-topics.
Within each sub-topic folder, there are between one to three files.

At minimum, there has to be a markdown file (.md), as this is essential for the rendering of the page itself.

However, it isn't always necessary to have corresponding javascript file (.js), as the functionality needs of the given page aren't existent.

Additionally, there might also not be a need for a separate style-sheet file (.css), if all relevant styling is being applied by either the `main.css` or the `markdown.css`.

