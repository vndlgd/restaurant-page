export function pageLoad() {
    let header = document.createElement("h1");
    let content = document.getElementById("content");

    header.textContent = "RESTAURANT NAME";
    content.appendChild(header);
}
