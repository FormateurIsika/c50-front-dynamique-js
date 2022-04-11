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
console.log("p1.addresse.codePostal="+p1.adresse.codePostal);