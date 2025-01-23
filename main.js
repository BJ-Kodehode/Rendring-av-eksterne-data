console.log("JavaScript stared");
//finn list lement via class ="film-list"
let listElement = document.querySelector(".film-list")
if(listElement === null){
    throw new Error(" you did not include a element with: film-list")
    
}
let filmCardTemplate = document.querySelector("#film-card-template");
if(filmCardTemplate === null){
    throw new Error("You did not incud a element film-list")
}

let url = "https://ghibliapi.vercel.app/films/"
let response = await fetch(url);
let films = await response.json();

console.log(films);





for (const film of films) {
    // console.log(film.title)

    //lage elementene
    let cardElement = document.createElement("li")
    let headingElement = document.createElement("h2")
    let descriptionElement = document.createElement("p")
    let imageElement = document.createElement("img")

    //sett de sammen
    cardElement.append(headingElement)
    cardElement.append(descriptionElement)
    cardElement.append(imageElement)

    //konfigurere elementene
    cardElement.className="film-card"
    headingElement.textContent = film.title
    descriptionElement.textContent = film.description
    imageElement.src =film.image

    //legg til dokumentet
    listElement.append(cardElement)
    
}