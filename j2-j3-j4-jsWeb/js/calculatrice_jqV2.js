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
   $('#cbHisto').prop("checked",false);

   $('#btnAdd').on("click",function(){ calculer('+');  });
   $('#btnMoins').on("click",function(){ calculer('-');  });
   $('#btnMult').on("click",function(){ calculer('*');  });
   $('#btnDiv').on("click",function(){ calculer('/');  });

   $('#cbHisto').on("change",function(evt){ 
       //var estcoche = evt.target.checked;
       var estCoche = $("#cbHisto").prop("checked");
       //var estCoche = ($("#cbHisto").get(0)).checked;
       console.log("estCoche="+estCoche);
        
        if(estCoche)
            $("#bodyCardHisto").addClass("show");
         else
           $("#bodyCardHisto").removeClass("show");
      
   });
});