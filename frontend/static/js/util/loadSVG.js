function loadSVG(selector, url) {
    let target = document.querySelector(selector);

    // If SVG is supported
    if (typeof SVGRect != "undefined") {
        // Request the SVG file
        let ajax = new XMLHttpRequest();
        ajax.open("GET", url + ".svg", true);
        ajax.send();

        ajax.onload = function(e) {
            target.innerHTML = ajax.responseText;
        };
    }
    else {
        // fallback to png
        target.innerHTML = "<img class='icon' src='" + url + ".svg' />";
    }
}