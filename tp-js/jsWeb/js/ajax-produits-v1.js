
window.onload = function(){

    let eltBtnAjax = document.getElementById("btnAjaxSearch");
    
    eltBtnAjax.addEventListener("click",function (evt){
        let eltTxtCategorie = document.getElementById("txtCategorie");
        let categorieChoisie = eltTxtCategorie.value;
        console.log("categorie choisie:" +categorieChoisie );
        let url = "./data/products_" + categorieChoisie +".json";
        makeAjaxGetRequest(url,callbackProduitsSucces,callbackError);
    });

}

function callbackProduitsSucces(responseData){
    //console.log("Succes:"+responseData + " " + typeof responseData);
    let tabProduits = JSON.parse(responseData);
    let ulProduits = document.getElementById("ulProduits");
    ulProduits.innerHTML="" ; //vider eventuel ancien contenu de <ul></ul>
    for(i in tabProduits){
        var eltLiProd = document.createElement("li") ; //nouvel <li></li>
        eltLiProd.innerHTML=JSON.stringify(tabProduits[i]);
        ulProduits.appendChild(eltLiProd);
    }
}

function callbackError(responseData){
    console.log("ERROR:"+responseData);
    let ulProduits = document.getElementById("ulProduits");
    ulProduits.innerHTML="" ; //vider eventuel ancien contenu de <ul></ul>
}