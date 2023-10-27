import './style.css';

export function pageLoad() {
    const contactpage = document.createElement("div");
    const header = document.createElement("h1");
    const form = document.createElement("form");
    let content = document.getElementById("content");

    const inputName = document.createElement("input");
    inputName.setAttribute("type", "text");
    inputName.setAttribute("placeholder", "Name");
    inputName.setAttribute("required", "");
    form.appendChild(inputName);

    const inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "email");
    inputEmail.setAttribute("placeholder", "Email");
    inputEmail.setAttribute("required", "");
    form.appendChild(inputEmail);

    const inputPhone = document.createElement("input");
    inputPhone.setAttribute("type", "tel")
    inputPhone.setAttribute("placeholder", "Phone");
    inputPhone.setAttribute("required", "");
    form.appendChild(inputPhone);

    const submitBtn = document.createElement("input");
    submitBtn.setAttribute("type", "submit")
    submitBtn.setAttribute("value", "Submit");
    submitBtn.setAttribute("class", "form-button");
    form.appendChild(submitBtn);

    header.textContent = "Contact Us";

    contactpage.appendChild(header);
    contactpage.appendChild(form);
    contactpage.classList.add('contactpage');

    contactpage.style.color = "var(--red)";

    content.appendChild(contactpage);
}
