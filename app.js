'use strict'

// import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
// import MathJax from "./lib/mathjax-config"
import { routes } from "./route/routes.js";
import { authorInfor } from "./common/common.js";

const basedURL = "http://localhost:5500";
const currentURL = window.location.pathname;

console.log(currentURL);

const wrapper = document.getElementById("wrapper");
wrapper.innerHTML = routes[currentURL];

function gridDetect(currentURL) {
    if (currentURL === '/' || currentURL === '/latex') {
        wrapper.style.gridTemplateAreas = `
        "header header"
        "main-content main-content"
        "footer footer"
    `;
        wrapper.innerHTML = routes[currentURL];
    } else {
        wrapper.style.gridTemplateAreas = `
        "header header"
        "main-content side-bar"
        "footer footer"
    `;
        wrapper.innerHTML = routes[currentURL];
    }
}

gridDetect(currentURL);


const navElements = document.getElementsByClassName("nav-element");

for (let i = 0; i < navElements.length; ++i) {
    const child = navElements.item(i).children.item(0);
    const id = child.id;

    child.addEventListener("click", function (e) {
        e.preventDefault();

        // window.location.pathname = `/${id}`;
        window.history.pushState({ page: id }, "", `${basedURL}/${id}`);
        gridDetect(`/${id}`);
    })
}

const contactLogos = document.getElementById("contact-logo").children

for (let i = 0; i < contactLogos.length; ++i) {
    const id = contactLogos[i].id

    if (contactLogos[i].tagName == "IMG") {
        contactLogos.item(i).addEventListener("click", function (e) {
            e.preventDefault();
            const url = authorInfor.contacts[id];
            window.open(url, "_blank");
        })
    }
}

