// const reponse = await fetch("pieces-autos.json");
// const pieces = await reponse.json();

pieces = [
    {
        "id": 1,
        "nom": "Ampoule LED",
        "prix": 60,
        "categorie": "Optiques",
        "image": "https://media.istockphoto.com/id/1150776990/fr/vectoriel/%C3%B0%C3%B0%CE%BCd-%C3%B1%C3%B01-4%C3%B1%C3%B01-2%C3%B01-2%C3%B1%C3%B0-2.jpg?s=612x612&w=0&k=20&c=zRkBMYIHlrpgfOBiKAB7wY6IMdqBonUBKj77ESBeKWY=",
        "description": "Distance d'éclairage : 100 mètres !",
        "disponibilite": true
    },
    {
        "id": 2,
        "nom": "Plaquettes de frein (x4)",
        "prix": 40,
        "categorie": "Freinage",
        "image": "https://static.vecteezy.com/ti/vecteur-libre/p1/1844089-plaquettes-de-frein-vector-design-illustration-isole-sur-fond-blanc-gratuit-vectoriel.jpg",
        "description": "Une qualité de freinage optimale, par tous les temps.",
        "disponibilite": true
    },
    {
        "id": 3,
        "nom": "Ampoule boîte à gants",
        "prix": 5.49,
        "categorie": "Optiques",
        "image": "https://st3.depositphotos.com/30104182/33466/v/600/depositphotos_334667308-stock-illustration-car-glove-compartment-outline-vector.jpg",
        "description": "Pour y voir clair dans l'habitacle.",
        "disponibilite": false
    },
    {
        "id": 4,
        "nom": "Liquide de frein",
        "prix": 9.60,
        "categorie": "Freinage",
        "image": "https://lafya.fr/_next/image?url=%2Fadvices%2Fillustration-freinage.png&w=828&q=75",
        "disponibilite": false
    },
    {
        "id": 5,
        "nom": "Balai d'essuie-glace",
        "prix": 8,
        "image": "https://media.istockphoto.com/id/1388931380/fr/vectoriel/pare-brise-de-voiture-avec-essuie-glaces-vecteur-sur-fond-blanc-isol%C3%A9-eps-10.jpg?s=612x612&w=0&k=20&c=prC54sH_kmu0iXEv1-R1wRLPluMSWcO6og0RTmCXLxQ=",
        "description": "Performances d'essuyage au top ! Longueur : 550 mm.",
        "disponibilite": true
    }
  ]
  
  // Fonction qui génère toute la page web
  function genererPieces(pieces) {
    for (let i = 0; i < pieces.length; i++) {
        // Récupération de l'élément du DOM qui accueillera les fiches
        const sectionFiches = document.querySelector(".fiches");
         
        // Création d’une balise dédiée à une pièce auto
         const pieceElement = document.createElement("article");
         // On crée l’élément img.
         const imageElement = document.createElement("img");
         const nomElement = document.createElement("h2");
         const prixElement = document.createElement("p");
         prixElement.innerText = `Prix: ${pieces[i].prix} (${pieces[i].prix < 35 ? "€" : "€€€"})`;
         const categorieElement = document.createElement("p");
         categorieElement.innerText = pieces[i].categorie ?? "(aucune catégorie)";   
  
         // On accède à l’indice i de la liste pieces pour configurer la source de l’image.
         imageElement.src = pieces[i].image;
         
         // On rattache l’image à pieceElement (la balise article)
         pieceElement.appendChild(imageElement);
         // Idem pour le nom, le prix et la catégorie ...
         pieceElement.appendChild(nomElement);
         pieceElement.appendChild(prixElement);
         pieceElement.appendChild(categorieElement); 
         
         // On rattache la balise article à la section Fiches
         sectionFiches.appendChild(pieceElement); 
  
         // On rattache la balise article au body
         //document.body.appendChild(sectionFiches);
    }
  }
  
  // Premier affichage de la page
  genererPieces(pieces);
  
  // Ajout du listener pour trier les pièces par ordre de prix croissant
  const boutonTrier = document.querySelector('.btn-trier');
  boutonTrier.addEventListener('click', function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(
        (a, b) => a.prix - b.prix
    );
    // Effacement de l'écran et regénération de la page
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
  });
  
  // Ajout du listener pour filtrer les pièces non abordables
  const boutonFilter = document.querySelector('.btn-filtrer');
  boutonFilter.addEventListener('click', function () {
      const piecesFilterees = pieces.filter(piece => piece.prix <= 35 );
      console.log(piecesFilterees);

    // Effacement de l'écran et regénération de la page avec les pièces filtrées uniquement
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFilterees);
  });
  
  // Ajout du listener pour filtrer les pièces non abordables avec l'input range
  const boutonFiltrerRange = document.getElementById('rangePrice');
  boutonFiltrerRange.addEventListener("input", function (e) {
    console.log(e.target.value);
    const piecesFilterees = pieces.filter(piece => piece.prix <= e.target.value);

    // Effacement de l'écran et regénération de la page avec les pièces filtrées uniquement
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFilterees);
    
  })