var tabVal = [12, 23, 5, 45, 7, 8];
var s = 0;
for(var i = 0 ; i < tabVal.length ; i++){
    s += tabVal[i];
}
console.log("somme = " + s);
//En TP , construire et afficher un autre tableau tabValInv 
//avec les valeurs dans l'ordre inverse (premier devient dernier , etc,)
var tabValInv = [];
for(var i = tabVal.length - 1 ; i >= 0 ; i--){
    tabValInv.push(tabVal[i]);
}
console.log("tableau inversé : tabValInv: " + tabValInv);

//En Tp2, déclencher tabVal.sort() et réafficher le tableau après le tri:
tabVal.sort( function(v1,v2){ return (v1-v2);} ); //tri par ordre croissant 
                                                //via sous fonction de comparison
console.log("tableau trié : tabVal: " + tabVal);

var villesSepareesParpPointVirgule = "Toulouse;Paris;Bordeaux;Amiens;Rouen";
var tabVilles = villesSepareesParpPointVirgule.split(";");
console.log("Ville en position 1 :" + tabVilles[1] );
//...

var saisonsCouleurs = []; // Tableau associatif
saisonsCouleurs["hiver"] = "blanc";
saisonsCouleurs["printemps"] = "vert";
saisonsCouleurs["ete"] = "jaune";
saisonsCouleurs["automne"] = "marron";
for(clef in saisonsCouleurs){
    console.log(clef + " : " + saisonsCouleurs[clef]);
}

var devise1 = {
    code : "M1",
    nom : "Monnaie1",
    change : 0.9
};

//TP à faire (ici ou dans s2Bis.js):
/* construire en syntaxe 'litteral' un objet javascript correspondant à une personne
numero , prenom , nom , 
sous objet adresse comporte lui meme (num, rue , codePostal , ville)
-------
afficher tout l'objet au format JSON
-------
récupérer et afficher le codePostal de l'adresse de la personne
*/

devise1.change = devise1.change + 0.1; // 1.0
devise1["change"] = devise1["change"] + 0.1; // 1.1
console.log("devise1.change = " + devise1.change);
console.log("devise1 (JSON) = " + JSON.stringify(devise1));

function Devise(code, nom, change){
    this.code = code;
    this.nom = nom;
    this.change = change;
    this.display = function(){
        console.log('[' + this.code + "] " 
                   + this.nom + " : " + this.change)
    }
}

var tabDevises = [];
tabDevises.push(new Devise("USD","Dollar",1.0));
tabDevises.push(new Devise("EUR","Euro",0.9));
tabDevises.push(new Devise("GBP","Livre",0.8));
tabDevises.push(new Devise("JPY","Yen",123.0));
for(i in tabDevises){
   tabDevises[i].display();
}

var expression = "2*4+8";
var res = eval(expression); console.log(expression + " = " + res);

console.log("maintenant = " + (new Date()).toTimeString());
function actionDifferee() {
    console.log("plus tard = " + (new Date()).toTimeString());
}
var refAction = actionDifferee;
setTimeout(refAction,5000); // Déclenchement en différé de 5000ms