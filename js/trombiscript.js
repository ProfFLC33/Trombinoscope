
var tabNom=['Bontant', 'Cirelli', 'Moustoir', 'Valmont'];
var tabPrenom=['Jean', 'Oscar', 'Sophie', 'Roger'];
var tabPhotos=['Bontant.jpg', 'Cirelli.jpg', 'Moustoir.jpg', 'Valmont.jpg'];

// Les N° de tel à rajouter sont : Bontant 06 22 33 55 66, Cirelli 06 12 34 56 78, Moustoir 06 98 76 54 32 et Valmont 06 12 98 55 12

// affiche le trombinoscope en enntier 
function afficheTrombi() {
	// purge le html contenu dans #trombi
	$("#trombi").html("");

	// boucle affichant chacune des personnes
	for (cpt=0 ; cpt < tabNom.length ; ++cpt) {
		affichePersonne(cpt);
	}

}

// Affiche les infos de la personne d'indice n
function affichePersonne(n) {
	$("#trombi").append(
		"<table>" + 
			"<tr> <td>" +
					"<img src='./images/" + tabPhotos[n] + "' alt='" +  tabPhotos[n] + "' />" +
			"</td> </tr>" +
			"<tr> <td>" +
					tabNom[n] + " " + tabPrenom[n] +
			
		"</table>");
}