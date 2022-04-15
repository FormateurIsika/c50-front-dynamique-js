$(function(){
   //fonction anonyme déclenchée automatiquement au chargement de la page
   $("#btnRefresh").on("click",reactualiserTableau);
   $("#inputMaxX").on("input",function (evt){
       //console.log("nouvelle valeur de maxX="+$("#inputMaxX").val());
       //console.log("nouvelle valeur de maxX="+evt.target.value); //.value api DOM
       console.log("nouvelle_valeur de maxX="+$(evt.target).val());//.val() jQuery
   })
})

//function reactualiserTableau(){
var  reactualiserTableau = function (){   
//var  reactualiserTableau =  () => { 
    let minX = Number($("#inputMinX").val());
    let maxX = Number($("#inputMaxX").val());
    let minY=10000;
    let maxY=-10000;
    let pointValues=[]; 
    let n= 10;
    let dx  = (maxX - minX) / n ;
    // enlever les éventuelles anciennes lignes du tableau:
    $("tbody").html("");

    for(let x= minX; x <= maxX; x = x + dx ){
        let y = calculerYselonX(x);
        $("tbody").append("<tr><td>"+x+"</td><td>"+y+"</td></tr>");

        pointValues.push({x:x,y:y});
        if(y<=minY) minY=y;
		if(y>=maxY) maxY=y;
    }
    var dy=(maxY-minY)/100;
    reactualiserCourbe(pointValues,minX,maxX,minY,maxY,dx,dy);
}

function calculerYselonX(x){
    let sY = $("#inputY").val(); //ex: "2*x+1"
    let y = eval(sY); //ex: 3 si x vaut 1
    return y; //ou ...
}

function reactualiserCourbe(pointValues,minX,maxX,minY,maxY,dx,dy){
    var ctx = document.getElementById("myChart").getContext('2d');
    try{
        Chart.instances[0].destroy();
     }
     catch(e){}
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          datasets: [{
            label: 'y=f(x)='+$("#inputY").val(),
            data: pointValues,
            borderColor: [
              'rgba(33, 232, 234, 1)',
              'rgba(33, 232, 234, 1)',
              'rgba(33, 232, 234, 1)',
              'rgba(33, 232, 234, 1)',
              'rgba(33, 232, 234, 1)',
              'rgba(33, 232, 234, 1)'
            ],
            borderWidth: 1
          }],
        },
        options: {
          scales: {
            x: {
              type: 'linear',
              position: 'bottom',
              min: minX,
              max: maxX,
              ticks: {
                stepSize: dx*10,
                fixedStepSize: dx*10,
              }
            },
            yAxes: {
              min: minY,
              max: maxY,
              ticks: {
                stepSize: dy*10,
                fixedStepSize: dy*10,
              }
            }
          }
        }
      });
}


