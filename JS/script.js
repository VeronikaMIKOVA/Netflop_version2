// Netflop version XMLHttpRequest → objet javascript pour récupérer objet xml ou jason

function chargerNetflopXml(){
    // Créer un nouvel objet XMLHttpRequest
    let xhr = new XMLHttpRequest();  // xhr = XMLHttpRequest

    // configurer une requête
    // utiliser la méthode 'GET' → pour récupérer des données
    // le nom du fichier à charger 
    // on passera l'option à true → requête asynchrone(ne bloque pas le navigateur et l'execution du code)
    xhr.open('GET', 'netflop.xml', true);

    // Définir le questionnaire d'évenements pour le chargement
    xhr.onload = function(){
        // vérification si la requête réussi
        // status 200 → OK(succès)
        if(xhr.status === 200){
            // Parser le XML avec DOMPARSER (parser = parcourir, analyser)
            let parser = new DOMParser();
            // parse le text xml reçu et convertir en document XML
            // xhr.responseText = le contenu du fichier xml en texte
            // 'text/xml' = type MIME pour indiquer que c'est du XML
            let xmlDoc = parser.parseFromString(xhr.responseText, 'text/xml');

            // afficher les différentes catégories
            afficherFilmsXML(xmlDoc);
            afficherSeriesXML(xmlDoc); 
        }
        else{
            console.error('Erreur lors du chargement du fichier XML.');
            console.error('Status: ', xhr.status);
            console.error('Message: ', xhr.statusText);
        }
    };

    // gérer les erreurs réseau
    xhr.onerror = function(){
        console.error('Erreur réseau lors du chargement du fichier xml');
        alert('Impossible de charger les données. Vérifier votre connexion !');
    };
    // Envoyer la requête
    xhr.send();
}

//________________________________________________________________________________________//

/**
 * Fonction pour afficher les films depuis le document XML
 * @param {Document} xmlDoc Document XML parsé par DOMParser
 */
function afficherFilmsXML(xmlDoc){
    // Récupérer le conteneur HTML où afficher les film
    let container = document.getElementById('filmsPopulaires');
    //Créer un titre pour la section
    let titre = document.createElement('h2');
    titre.textContent = "Films";
    container.appendChild(titre);

    // Récupérer TOUS les elements <film> du XML
    // getElementsByTagName() retourne une collection de tous les elements avec ce nom de balise
    let films = xmlDoc.getElementsByTagName('film');

    // Parcourir tous les films (attention films est un HTMLCollection, du coup pas un vrai tableau !)
    for(let i = 0; i < films.length; i++){
        let filmCard = creerCarteXML(films[i]);
        container.appendChild(filmCard);
    }
    console.log(films);
}

//________________________________________________________________________________________//

/**
 * Fonction pour afficher les series depuis le document XML
 * @param {Document} xmlDoc Document XML parsé par DOMParser
 */
function afficherSeriesXML(xmlDoc){
    // Récupérer le conteneur HTML où afficher les series
    let container = document.getElementById("seriesPopulaires");
    //Créer un titre pour la section
    let titre = document.createElement('h2');
    titre.textContent = "Series";
    container.appendChild(titre);

    // Récupérer TOUS les elements <serie> du XML
    // getElementsByTagName() retourne une collection de tous les elements avec ce nom de balise
    let series = xmlDoc.getElementsByTagName('serie');
    

    // Parcourir tous les series (attention series est un HTMLCollection, du coup pas un vrai tableau !)
    for(let i = 0; i < series.length; i++){
        let serieCard = creerCarteXML(series[i]);
        container.appendChild(serieCard);
    }
    console.log(series);
}

//________________________________________________________________________________________//

/**
 * Fonction générique pour créer une carte affichage à partir d'un élement XML
 * @param {element} item - élement XML (film, série, etc)
 * @returns {HTMLElement} - élement div représentant la carte
 */
function creerCarteXML(item){
    // créer le conteneur de la carte
    // créer une div pour la carte
    let card = document.createElement('div');
    card.className = 'card'; // card.setAttribute("class", "card");

    // RENDRE L'ELEMENT CLIQUABLE
    // Récupérer l'id de l'élement depuis l'attribut id
    let itemId = item.getAttribute('id');
    //Récupérer le nom de la balise XML pour déterminer la catégorie
    let itemType = item.tagName.toLowerCase();
    // Vérifier que l'id existe avant de rendre la card cliquable
    if(itemId && itemType){
    // Ajouter l'événement au click
        card.onclick=function(){
    // Rédiriger vers la page détail avec l'id et le type dynamique
            window.location.href = `HTML/details.html?id=${itemId}&type=${itemType}`;
        };
    }



    // extraire du XML
    // Récupérer le nom depuis la balise <nom>
    let nom = item.getElementsByTagName('nom')[0].textContent;
    
    // récuperer le genre depuis la balise <genre>
    let genre = item.getElementsByTagName('genre')[0].textContent;

    // récuperer le realisateur depuis la balise <realisateur>
    let realisateur = item.getElementsByTagName('realisateur')[0].textContent;
        
    // récuperer la date de sortie depuis la balise <dateSortie>
    let dateSortie = item.getElementsByTagName('dateSortie')[0].textContent

    // récuperer le résumé depuis la balise <resumer>
    // trim() = supprimer les espaces au début et à la fin
    let resumer = item.getElementsByTagName('resumer')[0].textContent.trim();

    //récuperer l'url de l'image depuis la balise <url>
    let url = item.getElementsByTagName('url')[0].textContent;

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
    // executer la function chargerNetflopXML
    chargerNetflopXml();
});

//________________________________________________________________________________________//

