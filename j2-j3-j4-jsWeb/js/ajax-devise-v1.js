
window.onload = function(){

    let eltBtnAjax = document.getElementById("btnDeviseViaAjax");
    eltBtnAjax.addEventListener("click",function (evt){
        let url = "./data/devise.json";
        makeAjaxGetRequest(url,callbackDeviseSucces,callbackError);
    });

}

function callbackDeviseSucces(responseData){
    console.log("Succes:"+responseData + " " + typeof responseData);
    let objDevise = JSON.parse(responseData);
    let spanNomMonnaie = document.getElementById("nomMonnaie");
    spanNomMonnaie.innerHTML="<b>"+objDevise.nom+"</b>";
    let spanChangeMonnaie = document.getElementById("changeMonnaie");
    spanChangeMonnaie.innerHTML="<b>"+objDevise.change+"</b>";
}

function callbackError(responseData){
    console.log("ERROR:"+responseData);
}