(()=>{"use strict";function t(){const t=document.createElement("h1"),e=document.createElement("img");let n=document.getElementById("content");t.textContent="Restaurant Name",n.appendChild(t),n.appendChild(e)}const e=document.createElement("button"),n=document.createElement("button"),o=document.createElement("button"),c=document.getElementById("content");function d(){for(;c.firstChild;)c.removeChild(c.lastChild);c.appendChild(e),c.appendChild(n),c.appendChild(o)}e.setAttribute("class","button"),n.setAttribute("class","button"),o.setAttribute("class","button"),e.textContent="Home",n.textContent="Menu",o.textContent="Contact",c.appendChild(e),c.appendChild(n),c.appendChild(o),t(),document.querySelectorAll(".button").forEach((function(e){e.addEventListener("click",(function(){"Home"===e.textContent?(d(),t()):"Menu"===e.textContent?(d(),function(){let t=document.createElement("h1"),e=document.getElementById("content");t.textContent="Menu",e.appendChild(t)}()):"Contact"===e.textContent&&(d(),function(){let t=document.createElement("h1"),e=document.getElementById("content");t.textContent="Contact Us",e.appendChild(t)}())}))}))})();