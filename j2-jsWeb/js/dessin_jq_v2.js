var x1,y1,x2,y2;
var typeFigure = "ligne"; //ou "rectangle" ou "cercle"

$( function(){
    //console.log("ok");
    $("#mycanvas").css("border-width","3px").css("border-style","solid").css("border-color","red")
    $("#selTypeFig").val("ligne"); //selectionner ligne par défaut

    $("#mycanvas").on("mousedown" , (evt)=>{
        x1= (evt.pageX - evt.target.offsetLeft) 
        y1= (evt.pageY - evt.target.offsetTop)
    })

    $("#selTypeFig").on("change" , (evt)=>{
       typeFigure=$("#selTypeFig").val();
       console.log("typeFigure="+typeFigure);
       $("input:radio[value='"+typeFigure+"']")[0].checked = true;
    })

    $("input[name='typeFigRadio'").on("click" , (evt)=>{
        //console.log("evt.target.id"+evt.target.id);
        //typeFigure=evt.target.value; //en version syntaxe DOM
        typeFigure=$(evt.target).val(); //en version syntaxe jQuery
        console.log("typeFigure="+typeFigure);
        $("#selTypeFig").val(typeFigure); //affichage cohérent synchronisé sur liste déroulante
     })

    $("#mycanvas").on("mouseup" , (evt)=>{
         //mémoriser les coordonnées x2,y2
         x2= (evt.pageX - evt.target.offsetLeft) 
         y2= (evt.pageY - evt.target.offsetTop)
         //on dessine une ligne de x1,y1 vers x2,y2
         let eltCanvasDom = $("#mycanvas").get(0);
         var ctx = eltCanvasDom.getContext("2d");
         ctx.beginPath();
         ctx.strokeStyle = "blue";
         switch(typeFigure){
             case "ligne":
                ctx.moveTo(x1,y1);
                ctx.lineTo(x2,y2);
             break;
             case "rectangle":
                let largeur = x2-x1;
                let hauteur = y2-y1;
                ctx.rect(x1,y1,largeur , hauteur);
             break;
             case "cercle":
                let rayon = Math.sqrt( Math.pow(x2-x1,2) + Math.pow(y2-y1,2) );
                ctx.arc(x1,y1,rayon , 0 , 2*Math.PI);
            break;
         }
         ctx.stroke();
          
    })

    $("#mycanvas").on("mousemove" , (evt)=>{
        let x= (evt.pageX - evt.target.offsetLeft) 
        let y= (evt.pageY - evt.target.offsetTop)
        $("#spanX").html(x);
        $("#spanY").html(y);
        //on affiche dans spanX et spanY les coordonnées evt...
    })

    $("#mycanvas").on("mouseleave" , (evt)=>{
        $("#spanX").html("");
        $("#spanY").html("");
    })

    $("#btnEffacer").on("click",()=>{
        let eltCanvasDom = $("#mycanvas").get(0);
        var ctx = eltCanvasDom.getContext("2d");
        ctx.clearRect (0,0,eltCanvasDom.width,eltCanvasDom.height);
    })

})