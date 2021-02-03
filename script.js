//FILTER
let filter = "alle";
let actors;
let container = document.querySelector("#container");
let temp = document.querySelector("template");
const popup = document.querySelector("#popup");

//Load Site + function
document.addEventListener("DOMContentLoaded", getData);

async function getData() {
    const respons = await fetch("actors.json");
    actors = await respons.json();
    addEventListenersToButtons();
    show(actors);
}

function show(actors) {
    //Løber igennem array "actor" fra JSON
    container.innerHTML = "";
    //forEach Loop
    actors.forEach(actor => {
        let fixedMovieName = actor.movie.toLowerCase().replace(" ", "_");
        console.log(fixedMovieName);

        if (filter == "alle" || filter == fixedMovieName) {
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

function addEventListenersToButtons() {
    document.querySelectorAll(".filter").forEach((btn) => {
        btn.addEventListener("click", filterBTNs);
    });
}


//tilføj kategori til knap
function filterBTNs() {
    filter = this.dataset.item;
    document.querySelectorAll(".filter").forEach((btn) => {
        btn.classList.remove("valgt");
    });

    this.classList.add("valgt");
    show(actors);
}


document.querySelector("#close").addEventListener("click", () => popup.style.display = "none");