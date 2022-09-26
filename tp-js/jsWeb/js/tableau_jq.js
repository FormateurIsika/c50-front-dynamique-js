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
        $("#tBodyProd").append("<tr id='"+ p.ref +"'><td>"+p.ref+"</td><td>"+p.nom+
                                    "</td><td>"+p.prix+"</td></tr>");
        $("#"+p.ref).on("click", function (evt){
            let eltTdDuClick = evt.target; //api DOM
            let parentTr = eltTdDuClick.parentNode;  //api DOM
            console.log("click sur : " + parentTr.id);
            let refProd="?"; 
            let nomProd="?"; 
            let prixProd =0;
            $(parentTr).children("td").each (function (index) {
                //ici (dans une fonction imbriquee dans .each) reférence le ième sous ellement un <td>
                if(index == 0) refProd = $(this).html();
                if(index==1) nomProd = $(this).html(); //api JQ
                if(index==2) prixProd = $(this).html();
            });
            $("#message").html(nomProd + " " + prixProd);  //api JQ
        })
        /*
        let ligne = "<tr>";
        for(let prop in p){ 
            ligne += "<td>" + p[prop] + "</td>";
        }   
        ligne += "</tr>" ;
        $("#tBodyProd").append(ligne); 
        */                     
   }

}
)