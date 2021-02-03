//FILTER
let filter = "alle";
let actors;
let container = document.querySelector("#container");
let temp = document.querySelector("template");
const popop = document.querySelector("#popop");

//URL + ID
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

//Load Site + function
document.addEventListener("DOMContentLoaded", hentData);

async function hentData() {
    const respons = await fetch("actors.json");
    actors = await respons.json();
    // addEventListenersToButtons();
    show(actors);
}

function show(actors) {
    //Løber igennem array "actor" fra JSON
    container.innerHTML = "";
    //forEach Loop
    actors.forEach(actor => {
        if (filter == "alle") {
            console.log(actor);
            const klon = temp.cloneNode(true).content;
            klon.querySelector(".actor").textContent = actor.fullname;
            klon.querySelector(".movie").textContent = actor.movie;

            //EventListener "click" + showDetails
            klon.querySelector("article").addEventListener("click", () => showDetails(actor));

            container.appendChild(klon);

        }
    });
}

//Location.href til Singlview
function showDetails(actor) {
    popup.style.display = "block";
    popup.querySelector(".actor_name").textContent = actor.fullname;
    popup.querySelector(".movie_name").textContent = actor.movie;
}

//tilføj kategori til knap
// function filterBTNs() {
//     filter = this.dataset.item;
//     document.querySelectorAll(".filter").forEach((btn) => {
//         btn.classList.remove("valgt");
//     });

//     this.classList.add("valgt");
//     vis(actors);
// }

document.querySelector("#luk").addEventListener("click", () => popup.style.display = "none");