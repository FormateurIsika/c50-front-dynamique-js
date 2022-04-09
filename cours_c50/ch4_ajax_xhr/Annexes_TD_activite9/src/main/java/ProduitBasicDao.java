package tp;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ProduitBasicDao {
	
	private Map<String,List<Produit>> mapProduitSelonCategorie=null;

	public ProduitBasicDao() {
		super();
		mapProduitSelonCategorie = new HashMap<>();
        
        List<Produit> produitsPapeterie = new ArrayList<>();
        produitsPapeterie.add(new Produit(1,"cahier",3.4,"grand cahier","papeterie"));
        produitsPapeterie.add(new Produit(2,"stylo",2.4,"stylo bille bleu","papeterie"));
        produitsPapeterie.add(new Produit(3,"gomme",1.4,"gomme blanche","papeterie"));
        mapProduitSelonCategorie.put("papeterie", produitsPapeterie);
        
        List<Produit> produitsOrdinateur = new ArrayList<>();
        produitsOrdinateur.add(new Produit(10,"pc asus",560.4,"portable 15 pouces","ordinateur"));
        produitsOrdinateur.add(new Produit(11,"pc hp",648.4,"pc portable 17 pouces","ordinateur"));
        mapProduitSelonCategorie.put("ordinateur", produitsOrdinateur);
        
        List<Produit> produitsImprimante = new ArrayList<>();
        produitsImprimante.add(new Produit(20,"imprimante xyz",156.4,"imprimante jet encre a4","imprimante"));
       
        mapProduitSelonCategorie.put("imprimante", produitsImprimante);
	}
	
	public List<Produit> getProduitsByCategorie(String categorie) {
		return mapProduitSelonCategorie.get(categorie);
	}

	
	
}
