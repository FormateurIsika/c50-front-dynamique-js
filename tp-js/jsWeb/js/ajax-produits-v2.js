
window.onload = function(){

    let eltSelCategorie = document.getElementById("selCategorie");
    
    eltSelCategorie.addEventListener("change",function (evt){
        let categorieChoisie = eltSelCategorie.value;
        console.log("categorie choisie:" +categorieChoisie );
        let url = "./data/products_" + categorieChoisie +".json";
        makeAjaxGetRequest(url,callbackProduitsSucces,callbackError);
    });

}

function callbackProduitsSucces(responseData){
    //console.log("Succes:"+responseData + " " + typeof responseData);
    let tabProduits = JSON.parse(responseData);
    let eltTBody = document.getElementById("tBodyProd");
    tBodyProd.innerHTML="" ; //vider eventuel ancien contenu de <tbody id="tBodyProd">
    for(let i in tabProduits){
        let  newRow = eltTBody.insertRow(-1) ; //new <tr> and .appendChild()
        let newCellCode = newRow.insertCell(0);  //colonne 1 (code)
            newCellCode.innerText = tabProduits[i].code;
        let newCellNom = newRow.insertCell(1);  //colonne 2 (nom)
            newCellNom.innerText = tabProduits[i].nom;
        let newCellPrix = newRow.insertCell(2);  //colonne 3 (prix)
            newCellPrix.innerText = tabProduits[i].prix;
        let newCellDescription = newRow.insertCell(3);  //colonne 4 (description)
            newCellDescription.innerText = tabProduits[i].description;
    }
}

function callbackError(responseData){
    console.log("ERROR:"+responseData);
    let tBodyProd = document.getElementById("tBodyProd");
    tBodyProd.innerHTML="" ; //vider eventuel ancien contenu de <tbody id="tBodyProd">
}