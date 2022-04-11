var p1 = {
    numero : 1 ,
    prenom : "jean" ,
    nom : "bon" ,
    adresse : {
        numero : 12 ,
        rue : "rue Elle",
        codePostal : 75001,
        ville : "Paris"
    }
}

console.log("p1="+p1);
console.log("p1 au format JSON="+JSON.stringify(p1));
console.log("p1.adresse.codePostal="+p1.adresse.codePostal);
console.log("p1.adresse au format json="+JSON.stringify(p1.adresse));

function Cercle(xc,yc,rayon,couleur){
    this.xc = xc;
    this.yc = yc;
    this.rayon = rayon;
    this.couleur = couleur;
    this.display = function(){
        console.log('Cercle de centre (' + this.xc + "," + this.yc + ") " 
                   + " de rayon " + this.rayon + " et de couleur = " + this.couleur)
    }
    this.perimetre = function(){
        return 2 * Math.PI * this.rayon ;
    }
}

var c1 = new Cercle(10,15,100,"blue");
c1.display();
console.log("c1 au format JSON="+JSON.stringify(c1));
console.log("perimetre de c1 =" + c1.perimetre());
//console.log("rayon de c1 =" + c1.rayon); 
console.log("rayon de c1 =" + c1["rayon"]);

var c2 = new Cercle(10,15,200);//couleur non précisée 
//(valeur par défaut "undefined" pour dernier(s) paramètre(s))
console.log("c2 au format JSON="+JSON.stringify(c2));
console.log("couleur de c2 ="+c2.couleur);

c2.epaisseur = 2; //possibilité d'ajouter des attributs et méthodes non prévus
console.log("c2 au format JSON="+JSON.stringify(c2));

/*
Cercle de centre (10,15)  de rayon 100 et de couleur = blue
c1 au format JSON={"xc":10,"yc":15,"rayon":100,"couleur":"blue"}
perimetre de c1 =628.3185307179587
rayon de c1 =100
c2 au format JSON={"xc":10,"yc":15,"rayon":200}
couleur de c2 =undefined
c2 au format JSON={"xc":10,"yc":15,"rayon":200,"epaisseur":2}
*/