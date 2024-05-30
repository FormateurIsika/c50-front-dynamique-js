function calculer(operation){
    var valA = Number($('#inputA').val());
    var valB = Number($('#inputB').val());
    var res=0;
    switch(operation){
        case '+': res=valA + valB; break;
        case '*': res=valA * valB; break;
        case '-': res=valA - valB; break;
        case '/': res=valA / valB; break;
      }
      $('#spanRes').html(res).css("color",res>=0?'blue':'red');
      ajouterDansHistorique(valA,valB,operation,res)
}

function ajouterDansHistorique(a,b,op,res){
    var calcul=""+a+" "+op+" "+b+" = "+res;
    $('#ulHistorique').append("<li>"+calcul+"</li>");
}

$(function() {
   // Code déclenché dès le chargement de la page HTML :
   // $("#spanRes").html("0+0=0");

   $('#btnAdd').on("click",function(){ calculer('+');  });
   $('#btnMoins').on("click",function(){ calculer('-');  });
   $('#btnMult').on("click",function(){ calculer('*');  });
   $('#btnDiv').on("click",function(){ calculer('/');  });

   $('#cbHisto').on("change",function(evt){ 
       var estCoche = evt.target.checked; // api DOM
       //var estCoche = $("#cbHisto").prop("checked"); //api JQ
       //var estCoche = ($("#cbHisto").get(0)).checked; // api DOM apres api js vers api DOM
       console.log("estCoche="+estCoche);
        //V1:
        //$("#ulHistorique").css("display",estCoche?"block":"none");
        /*
        //V2:
        if(estCoche)
            $("#ulHistorique").show();
         else
           $("#ulHistorique").hide();
       */
        //V3 (avec effet ):
        
        if(estCoche)
            //$("#ulHistorique").fadeIn(1800);//400ms par defaut
            $("#ulHistorique").slideDown(800);//400ms par defaut
         else
           //$("#ulHistorique").fadeOut(1800);
           $("#ulHistorique").slideUp(800);//400ms par defaut
        
   });
});