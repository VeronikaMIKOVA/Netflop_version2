// Netflop version XMLHttpRequest → objet javascript pour récupérer objet xml ou jason

function chargerNetflopJSON(){
    // Créer un nouvel objet XMLHttpRequest
    let xhr = new XMLHttpRequest();  // xhr = XMLHttpRequest

    // configurer une requête
    // utiliser la méthode 'GET' → pour récupérer des données
    // le nom du fichier à charger 
    // on passera l'option à true → requête asynchrone(ne bloque pas le navigateur et l'execution du code)
    xhr.open('GET', 'netflop.json', true);

    // Définir le questionnaire d'évenements pour le chargement
    xhr.onload = function(){
        // vérification si la requête réussi
        // status 200 → OK(succès)
        if(xhr.status === 200){
            // Parser le JSON avec parse (parser = parcourir, analyser)
            let data = JSON.parse(xhr.responseText);
            console.log(data);
        
            // afficher les différentes catégories
            afficherFilmsJSON(data.netflop.films.film);
            afficherSeriesJSON(data.netflop.series.serie);
            afficherDocumentairesJSON(data.netflop.documentaires.documentaire);
            afficherMangasJSON(data.netflop.mangas.manga);
            afficherAnimesJSON(data.netflop.animes.anime);
            afficherShowsJSON(data.netflop.shows.show);
            afficherConcertsJSON(data.netflop.concerts.concert);
            // afficherDocumentairesXML(data.netflop.series.serie);
        }
        else{
            console.error('Erreur lors du chargement du fichier JSON.');
            console.error('Status: ', xhr.status);
            console.error('Message: ', xhr.statusText);
        }
    };

    // gérer les erreurs réseau
    xhr.onerror = function(){
        console.error('Erreur réseau lors du chargement du fichier JSON');
        alert('Impossible de charger les données. Vérifier votre connexion !');
    };
    // Envoyer la requête
    xhr.send();
}

//________________________________________________________________________________________//

/**
 * Fonction pour afficher les films depuis le document JSON
 * @param {Document} films Document JSON parsé 
 */
function afficherFilmsJSON(films){
    // Récupérer le conteneur HTML où afficher les film
    let container = document.getElementById('filmsPopulaires');
    //Créer un titre pour la section
    let titre = document.createElement('h2');
    titre.textContent = "Films";
    container.appendChild(titre);

    // Parcourir tous les films (attention films est un HTMLCollection, du coup pas un vrai tableau !)
    for(let i = 0; i < films.length; i++){
        let filmCard = creerCarteJson(films[i],"films");
        container.appendChild(filmCard);
    }
    console.log(films);
}

//________________________________________________________________________________________//

/**
 * Fonction pour afficher les series depuis le document JSON
 * @param {Document} series Document JSON parsé
 */
function afficherSeriesJSON(series){
    // Récupérer le conteneur HTML où afficher les series
    let container = document.getElementById("seriesPopulaires");
    //Créer un titre pour la section
    let titre = document.createElement('h2');
    titre.textContent = "Series";
    container.appendChild(titre);

    

    // Parcourir tous les series (attention series est un HTMLCollection, du coup pas un vrai tableau !)
    for(let i = 0; i < series.length; i++){
        let serieCard = creerCarteJson(series[i], "series");
        container.appendChild(serieCard);
    }
    console.log(series);
}

//________________________________________________________________________________________//

/**
 * Fonction pour afficher les documentaires depuis le document JSON
 * @param {Document} documentaires Document JSON parsé
 */
function afficherDocumentairesJSON(documentaires){
    // Récupérer le conteneur HTML où afficher les series
    let container = document.getElementById("documentaires");
    //Créer un titre pour la section
    let titre = document.createElement('h2');
    titre.textContent = "Documentaires";
    container.appendChild(titre);

    

    // Parcourir tous les documentaires (attention documentaires est un HTMLCollection, du coup pas un vrai tableau !)
    for(let i = 0; i < documentaires.length; i++){
        let documentaireCard = creerCarteJson(documentaires[i], "documentaires");
        container.appendChild(documentaireCard);
    }
    console.log(documentaires);
}

//________________________________________________________________________________________//

/**
 * Fonction pour afficher les mangas depuis le document JSON
 * @param {Document} mangas Document JSON parsé
 */
function afficherMangasJSON(mangas){
    // Récupérer le conteneur HTML où afficher les mangas
    let container = document.getElementById("sectionMangas");
    //Créer un titre pour la section
    let titre = document.createElement('h2');
    titre.textContent = "Mangas";
    container.appendChild(titre);

    

    // Parcourir tous les mangas (attention mangas est un HTMLCollection, du coup pas un vrai tableau !)
    for(let i = 0; i < mangas.length; i++){
        let mangaCard = creerCarteJson(mangas[i], "mangas");
        container.appendChild(mangaCard);
    }
    console.log(mangas);
}

//________________________________________________________________________________________//

/**
 * Fonction pour afficher les animes depuis le document JSON
 * @param {Document} animes Document JSON parsé
 */
function afficherAnimesJSON(animes){
    // Récupérer le conteneur HTML où afficher les animes
    let container = document.getElementById("animes");
    //Créer un titre pour la section
    let titre = document.createElement('h2');
    titre.textContent = "Animés";
    container.appendChild(titre);

    

    // Parcourir tous les animes (attention animes est un HTMLCollection, du coup pas un vrai tableau !)
    for(let i = 0; i < animes.length; i++){
        let animeCard = creerCarteJson(animes[i], "animes");
        container.appendChild(animeCard);
    }
    console.log(animes);
}

//________________________________________________________________________________________//

/**
 * Fonction pour afficher les shows depuis le document JSON
 * @param {Document} shows Document JSON parsé
 */
function afficherShowsJSON(shows){
    // Récupérer le conteneur HTML où afficher les shows
    let container = document.getElementById("shows");
    //Créer un titre pour la section
    let titre = document.createElement('h2');
    titre.textContent = "Shows";
    container.appendChild(titre);

    

    // Parcourir tous les shows (attention shows est un HTMLCollection, du coup pas un vrai tableau !)
    for(let i = 0; i < shows.length; i++){
        let showCard = creerCarteJson(shows[i], "shows");
        container.appendChild(showCard);
    }
    console.log(shows);
}

//________________________________________________________________________________________//

/**
 * Fonction pour afficher les concerts depuis le document JSON
 * @param {Document} concerts Document JSON parsé
 */
function afficherConcertsJSON(concerts){
    // Récupérer le conteneur HTML où afficher les concerts
    let container = document.getElementById("concerts");
    //Créer un titre pour la section
    let titre = document.createElement('h2');
    titre.textContent = "Concerts";
    container.appendChild(titre);

    

    // Parcourir tous les concerts (attention concerts est un HTMLCollection, du coup pas un vrai tableau !)
    for(let i = 0; i < concerts.length; i++){
        let concertCard = creerCarteJson(concerts[i], "concerts");
        container.appendChild(concertCard);
    }
    console.log(concerts);
}

//________________________________________________________________________________________//

/**
 * Fonction générique pour créer une carte affichage à partir d'un élement XML
 * @param {element} item - élement XML (film, série, etc)
 * @returns {HTMLElement} - élement div représentant la carte
 */
function creerCarteJson(item){
    // créer le conteneur de la carte
    // créer une div pour la carte
    let card = document.createElement('div');
    card.className = 'card'; // card.setAttribute("class", "card");

    // extraire du JSON
    // Récupérer le nom depuis l'id "nom"
    let nom = item.nom[0].textContent;
    
    // récuperer le genre depuis l'id "genre"
    let genre = item.genre[0].textContent;

    // récuperer le realisateur depuis l'id "nom"
    let realisateur = item.realisateur[0].textContent;
        
    // récuperer la date de sortie depuis l'id "nom"
    let dateSortie = item.dateSortie[0].textContent;

    // récuperer le résumé depuis l'id "nom"
    // trim() = supprimer les espaces au début et à la fin
    let resumer = item.resumer[0].textContent;

    //récuperer l'url de l'image depuis l'id "nom"
    let url = item.url;

        // créer un élement img (dans index.html) pour afficher l'image
        let img = document.createElement('img');
        // définir la source de l'image
        img.src = url; // img.setAttribute("src", url);
        img.alt = nom; // img.setAttribute("alt", nom);
        img.className = 'card-image'; // img.setAttribute("class", "card-image");

        // créer le conteneur pour les informations
        // créer un div pour contenir toutes les infos textuelles (dans index.html)
        let infoDiv = document.createElement('div');
        infoDiv.className = 'card-info'; // infoDiv.setAttribute("class", "card-info");
        
            // créer le titre
            // créer un elément H3 pour le titre
            let titreElement = document.createElement('h3');
            // intégrer le "nom" correspondant entre les balises <h3> 
            titreElement.textContent = nom;

            // créer l'élement genre
            // créer un paragraphe pour le genre
            let genreElement = document.createElement('p');
            // innerHTML permet d'insérer du html
            genreElement.innerHTML = '<strong>Genre : </strong>' + genre;

            // créer l'élement réalisateur
            // créer un paragrephe pour le réalisateur
            let realisateurElement = document.createElement('p');
            realisateurElement.innerHTML = '<strong>Réalisateur : </strong>' +realisateur;

            // créer l'élement date de sortie
            // créer un paragraphe pour la date de sortie
            let dateElement = document.createElement('p');
            dateElement.innerHTML = '<strong>Date de sortie : </strong>' +dateSortie;

            // créer le conteneur du résumé
            // créer un div pour contenir le résumé et le bouton
            let resumerContainer = document.createElement('div');
            resumerContainer.className = 'resume-container';

                // créer l'élement résumé
                // créer le paragraphe pour le résumé
                let resumerElement = document.createElement('p');
                resumerElement.className = 'resume';
                resumerElement.innerHTML = '<strong>Résumé : </strong>' +resumer;
                // ajouter le résumé au conteneur du résumé
                resumerContainer.appendChild(resumerElement);

            // assembler tous les elements
            // ajouter tous les elements au conteneur d'information
            infoDiv.appendChild(titreElement);
            infoDiv.appendChild(genreElement);
            infoDiv.appendChild(realisateurElement);
            infoDiv.appendChild(dateElement);
            infoDiv.appendChild(resumerContainer);

        // on ajoute l'image et les informations à la carte
        card.appendChild(img);
        card.appendChild(infoDiv);

    // on retourne la carte complète
    return card;
};

/**
 * Charger les données lorsque le dom est complétement chargé
 * DOMContentLoaded = évenement declenché lorsque le html est prêt
 */
document.addEventListener('DOMContentLoaded', function(){
    console.log("le DOM est chargé, lancement de netflop avec DOMParser...");
    // executer la function chargerNetflopJSON
    chargerNetflopJSON();
});

//________________________________________________________________________________________//

