$(function(){
   //fonction anonyme déclenchée automatiquement au chargement de la page
   //....

})

function reactualiserTableau(){
    let minX ;
    let maxX; 
    //...
    //...
    let n= 10;
    let dx  = (maxX - minX) / n ;
    // enlever les éventuelles anciennes lignes du tableau:
    //...
    for(let x= minX; x <= maxX; x = x + dx ){
        let y = calculerYselonX(x);
        //ajouter une ligne dans le tableau
    }
    //...
}

function calculerYselonX(x){
    let sY = $("#inputY").val(); //ex: "2*x+1"
    let y = eval(sY); //ex: 3 si x vaut 1
    return y; //ou ...
}
