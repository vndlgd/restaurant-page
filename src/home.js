import './style.css';

export function pageLoad() {
    const homepage = document.createElement("div")
    const header = document.createElement("h1");
    const description = document.createElement("h2");
    let content = document.getElementById("content");

    header.textContent = "Out-N-In Burger Grill";
    description.textContent = "We serve the best food in town. Come and taste it!"

    homepage.classList.add('homepage');
    homepage.style.color = "var(--red)";

    homepage.appendChild(header);
    homepage.appendChild(description);

    content.appendChild(homepage);

    // TODO:
    // add picture image we have in directory and make it look like website
    // don't worry about CSS right now, focus on the content
}
