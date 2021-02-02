//FILTER
let filter = "alle";
let actor;
let container = document.querySelector("#container");
let temp = document.querySelector("template");
const popop = document.querySelector("#popop");

//URL + ID
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

//Load Site + function
document.addEventListener("DOMContentLoaded", hentData);
console.log("DOMLOADED")


async function hentData() {
    const respons = await fetch("actors.json");
    actors = await respons.json();
    // addEventListenersToButtons();
    vis(actors);
}

function vis(actors) {
    //Løber igennem array "actor" fra JSON
    container.innerHTML = "";
    //forEach Loop
    actors.forEach(actor => {
        if (filter == "alle") {
            console.log(actor);
            const klon = temp.cloneNode(true).content;
            klon.querySelector(".actor").textContent = actor.fullname;
            klon.querySelector(".movie").textContent = actor.movie;

            //EventListener "click" + visDetaljer
            klon.querySelector("article").addEventListener("click", () => visDetaljer(actor));

            container.appendChild(klon);

        }
    })
    //Alle actors ID
    // actors.forEach(actor => {
    //     if (id == actor.id) {
    //         visDetaljer(actor)
    //     }
    // })
}

//Location.href til Singlview
function visDetaljer(actor) {
    popup.style.display = "block";
    popup.querySelector(".actor_name").textContent = actor.fullname;
    popup.querySelector(".movie_name").textContent = actor.movie;
}

//Kommer fra hentData
// function addEventListenersToButtons() {
//     document.querySelectorAll(".filter").forEach((btn) => {
//         btn.addEventListener("click", filterBTNs);
//     });
// }

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