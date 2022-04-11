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
                   + " de reyon " + this.rayon + " et de couleur = " + this.couleur)
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