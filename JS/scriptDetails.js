
// // RENDRE L'ELEMENT CLIQUABLE
// // Récupérer l'id de l'élement depuis l'attribut id
// let itemId = item.getAttribute('id');
// //Récupérer le nom de la balise XML pour déterminer la catégorie
// let itemType = item.tagname.toLowerCase();
// // Vérifier que l'id existe avant de rendre la card cliquable
// if(itemId && itemType){
// // Ajouter l'événement au click
//     card.onclick=function(){
// // Rédiriger vers la page détail avec l'id et le type dynamique
//         window.location.href = `detail.html ? id=${itemId} & type =${itemType}`;
//     };
// }

//________________________________________________________________________________________//
function getUrlParams(){
    let params = new URLSearchParams(window.location.search);
    return {
        id: params.get('id'), //ce sont des objets
        type: params.get('type')
    };
}

//________________________________________________________________________________________//

function chargerItemDetail(){
    let urlParams = getUrlParams();
    let itemId = urlParams.id;
    let itemType = urlParams.type;

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
            let item = chercherItemParType(xmlDoc, itemId, itemType);

            console.log(item);

            // afficher les différentes items
            afficherDetailItem(item, itemType);
            
            console.log(xmlDoc);
            
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

function chercherItemParType(xmlDoc, itemId, itemType){
    //on va chercher l'élement dans notre xml par son type (films, series, etc ...)
    let items = xmlDoc.getElementByTagName(itemType);
    // parcourt la liste des items
    for(let i = 1; i < items.lenght; i++){
        let item = items[i];
        // on vérifie si l'item a un attribut id
        if(item.hasAttribute('id') && item.getAttribut('id') === itemId){
            return item;
        }
    };
    return null;
}

//________________________________________________________________________________________//

function afficherDetailItem(item, itemType){
    let url = getXmlValue(item,'url');
}