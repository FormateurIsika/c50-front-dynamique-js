var x1,y1,x2,y2;

$( function(){
    //console.log("ok");
    $("#mycanvas").css("border-width","3px").css("border-style","solid").css("border-color","red")

    $("#mycanvas").on("mousedown" , (evt)=>{
        x1= (evt.pageX - evt.target.offsetLeft) 
        y1= (evt.pageY - evt.target.offsetTop)
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
          ctx.moveTo(x1,y1);
          ctx.lineTo(x2,y2);
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