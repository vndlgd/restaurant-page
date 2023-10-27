import './style.css';

export function pageLoad() {
    const menupage = document.createElement("div");
    const header = document.createElement("h1");
    const list = document.createElement("ul");
    let content = document.getElementById("content");

    // menu 
    header.textContent = "Our Menu";
    const menu = ["Double-Double", "Cheeseburger", "Hamburger", "French Fries", "Beverages", "Shakes"];

    for (let i = 0; i < menu.length; i++) {
        let li = document.createElement("li");
        console.log(menu[i]);
        li.textContent = menu[i].toUpperCase();
        li.style["list-style-type"] = "none";
        list.style["font-weight"] = "bold";
        list.appendChild(li);
    }

    menupage.style.color = "var(--red)";

    menupage.appendChild(header);
    menupage.appendChild(list);
    menupage.classList.add('menupage');

    content.appendChild(menupage);
}
