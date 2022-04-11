var tabVal = [12, 23, 5, 45, 7, 8];
var s = 0;

for(let i = 0 ; i < tabVal.length ; i++){
    s += tabVal[i];
}
console.log("somme = " + s);


//en java , les tableaux ont des tailles fixes , ici 20: 
//double tabNum[] = new double[20];

//en javascript , les tableaux ont des tailles flexibles;
var tabNum = []; //tableau vide au depart
tabNum[0]=23;
tabNum[1]=45; //possible en javascript , impossible en java
tabNum.push(67); //ajoute une valeur à la fin du tableau 
                 //ici en position 2 (equivalent du .add() de java)
console.log("tabNum="+tabNum) ; 
console.log("tabNum="+JSON.stringify(tabNum)) ; 

//===============

var a=6;
var b=3;
var c = eval ("2*a+b");
console.log("c="+c);
console.log("now=     "+new Date());

function callbackDate(){
    console.log('en differe : ' + new Date())
}

setTimeout(callbackDate , 5000); //5000 ms = 5s

var saisonsCouleurs = []; // Tableau associatif
saisonsCouleurs["hiver"] = "blanc";
saisonsCouleurs["printemps"] = "vert";
saisonsCouleurs["ete"] = "jaune";
saisonsCouleurs["automne"] = "marron";

for(let key in saisonsCouleurs){
    console.log(key+ " : " + saisonsCouleurs[key]);
}

var devise1 = {
    code : "M1",
    nom : "Monnaie1",
    change : 0.9
};

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

//retrier les éléments du tableau des devises
//selon l'ordre croissants des taux de change:
tabDevises.sort((d1,d2)=>d1.change - d2.change);
//tabDevises.sort((d1,d2)=>d1.code.localeCompare(d2.code));

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