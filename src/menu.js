export function pageLoad() {
    let header = document.createElement("h1");
    let content = document.getElementById("content");

    header.textContent = "Menu";
    content.appendChild(header);
}
