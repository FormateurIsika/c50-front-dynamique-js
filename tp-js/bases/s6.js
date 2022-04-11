/* paramètres de enchainerCalculEtAffichage() :
sx = nombre dans une string ,
fctCalcul = reference vers une fonction de calcul
fctAff = reference vers fonction affichage
*/
function enchainerConversionCalculEtAffichage(sx,fctCalcul,fctAff){
    let x = Number(sx);
    let resCalcul = fctCalcul(x);
    let xEtResJson = JSON.stringify({ x: x , res: resCalcul });
    fctAff(xEtResJson);
    }

function diviserPar2(x){
    return x/2;
} 

function multiplierPar2(x){
    return x*2;
} 

function affV1(chose){
    console.log(">>"+chose);
}

function affV2(chose){
    console.log(">>>"+chose+"<<<");
}

enchainerConversionCalculEtAffichage("20" , diviserPar2 , affV1);
enchainerConversionCalculEtAffichage("50" , multiplierPar2 , affV2);
enchainerConversionCalculEtAffichage("50" , 
                                      function(x) { return x*2; } ,
                                      function (chose){ 
                                          console.log("** "+chose+" **");
                                        });
enchainerConversionCalculEtAffichage("50" , 
              (x) => { return x*2; } ,
             (chose) => { console.log("## "+chose+" ##");   }
             );                                        