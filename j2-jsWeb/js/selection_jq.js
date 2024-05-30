var eltDisponibles = [ "js" , "java" , "html" , "css" , "jQuery" , "bootstrap"]

var eltSelectionnes = [];

function suppimerEltDeValeur(tableau,valeurElt){
    for(let i in tableau){
        if(tableau[i]==valeurElt){
            tableau.splice(i,1); break;
        }
    }
}

$(function (){
//A faire en Tp (partie 1):

//remplir #listeDisponibles avec les valeurs de eltDisponibles
for(let i in eltDisponibles){
    $("#listeDisponibles").append("<option>"+eltDisponibles[i]+"</option>")
}
$("#spanEltDisponibles").html(JSON.stringify(eltDisponibles));
$("#spanEltSelectionnes").html(JSON.stringify(eltSelectionnes));


//NB: selection multiple possible sur select si 
//<select multiple id="listeDisponibles" size="12" > coté HTML

//faire passer les éléments sélectionnés d'une liste à l'autre
//selon evenement click sur boutons
$("#btnSelect").on("click",()=>{
    $("#listeDisponibles option:selected").each(function() {
        let valeur = $(this).val();
        //console.log("val sel:" + valeur );
        $("#listeSelections").append("<option>"+valeur+"</option>");
        eltSelectionnes.push(valeur);
        $(this).remove(); suppimerEltDeValeur(eltDisponibles,valeur);
      });
    //console.log("eltDisponibles="+eltDisponibles);
    $("#spanEltDisponibles").html(JSON.stringify(eltDisponibles));
    //console.log("eltSelectionnes="+eltSelectionnes);
    $("#spanEltSelectionnes").html(JSON.stringify(eltSelectionnes));
});

$("#btnDeselect").on("click",()=>{
    $("#listeSelections option:selected").each(function() {
        let valeur = $(this).val();
        //console.log("val sel:" + valeur );
        $("#listeDisponibles").append("<option>"+valeur+"</option>");
        eltDisponibles.push(valeur);
        $(this).remove(); suppimerEltDeValeur(eltSelectionnes,valeur);
      });
   //console.log("eltDisponibles="+eltDisponibles);
   $("#spanEltDisponibles").html(JSON.stringify(eltDisponibles));
   //console.log("eltSelectionnes="+eltSelectionnes);
   $("#spanEltSelectionnes").html(JSON.stringify(eltSelectionnes));
});

//....
});
