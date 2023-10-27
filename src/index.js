import { pageLoad as home } from './home.js';
import { pageLoad as menu } from './menu.js';
import { pageLoad as contact } from './contact.js';
import './style.css';

// create tabs, to switch between content
const tabs = document.createElement("div");
const homeBtn = document.createElement("button");
const menuBtn = document.createElement("button");
const contactBtn = document.createElement("button");
const content = document.getElementById("content");

homeBtn.setAttribute("class", "button");
menuBtn.setAttribute("class", "button");
contactBtn.setAttribute("class", "button");

homeBtn.textContent = "Home";
menuBtn.textContent = "Menu";
contactBtn.textContent = "Contact";

tabs.appendChild(homeBtn);
tabs.appendChild(menuBtn);
tabs.appendChild(contactBtn);
tabs.classList.add("tabs");
content.appendChild(tabs)

// when page first loads, call home()
home();

// select all buttons with the class name "btn"
const buttons = document.querySelectorAll(".button");

// tab switching logic, run the correct 'tab module' 
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (button.textContent === "Home") {
            clear();
            home();
        } else if (button.textContent === "Menu") {
            clear();
            menu()
        } else if (button.textContent === "Contact") {
            clear();
            contact();
        }
    });
});

// wipe out current contents
function clear() {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    content.appendChild(tabs);
}