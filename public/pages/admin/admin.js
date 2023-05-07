function autoResize(textarea) {
    // Resets height
    textarea.style.height = "auto";

    // Sets height based on current scrollHeight
    textarea.style.height = textarea.scrollHeight + "px";
}