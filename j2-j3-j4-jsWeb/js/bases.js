function maPremiereFonctionJavascript(){
    /*
    document.write("texte1 ajouté en fin de page html <br/>")
    document.write("texte2 ajouté en fin de page html <br/>")
    console.log("nouveau message dans console web du navigateur")
    alert("message dans boite d'alerte");
    */
   
   console.log("maPremiereFonctionJavascript appelee");
    var eltDivA = document.getElementById("divA");
    eltDivA.innerHTML="texte HTML dans Zone dont l'id est divA"
}

function f2(){
    console.log("f2 appelee");
 var eltDivB = document.getElementById("divB");
 eltDivB.innerHTML="affichage dans Zone dont l'id est divB";
}

function calculerCarre(){
 var eltInputX = document.getElementById("x");
 var valX = eltInputX.value;
 //console.log("valX="+valX);
 var c = 0; c =valX * valX;
 var eltSpanRes = document.getElementById("res");
 eltSpanRes.innerHTML="<b>"+c+"</b>";
 //eltSpanRes.innerText=c;
}