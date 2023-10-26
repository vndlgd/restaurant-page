export function pageLoad() {
    const header = document.createElement("h1");
    const image = document.createElement('img');
    let content = document.getElementById("content");

    header.textContent = "Restaurant Name";

    content.appendChild(header);
    content.appendChild(image);
}
