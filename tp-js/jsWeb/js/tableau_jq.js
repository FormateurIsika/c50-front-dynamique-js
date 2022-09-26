var tabProduits = [
    { ref : 'p1' , nom : 'stylo' , prix : 2.3},
    { ref : 'p2' , nom : 'cahier' , prix : 3.3},
    { ref : 'p3' , nom : 'classeur' , prix : 5.3}
]

$( function(){
   //code déclenché automatiquement au chargement de la page dans le navigateur

   //console.log(tabProduits.length);
   //Tp à faire :
   //ecrire un boucle qui ajoute chaque partie du tabProduits
   //en tant que nouvelle ligne du tableau html.
   //suggestion: on peut appeler .append("<tr>+ ... + </tr>") sur #tBodyProd
   //for(let i =0; i<tabProduits.length; i++){
   for(let i in tabProduits){
        let p = tabProduits[i];
        $("#tBodyProd").append("<tr><td>"+p.ref+"</td><td>"+p.nom+
                                    "</td><td>"+p.prix+"</td></tr>");
   }

}
)