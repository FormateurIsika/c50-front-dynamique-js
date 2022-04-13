package tp;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Servlet implementation class ServletProduitSelonCategorie
 */
@WebServlet("/ServletProduitSelonCategorie")
public class ServletProduitSelonCategorie extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	private Map<String,List<Produit>> mapProduitSelonCategorie=null;
       
	public ServletProduitSelonCategorie() {
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

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String categorie = request.getParameter("categorie");
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();

        ObjectMapper jacksonObjectMapper = new ObjectMapper();//convertisseur java<-->json

        List<Produit> listeProduits = this.mapProduitSelonCategorie.get(categorie);
        //NB: on pourrait avec un autre code récupérer la liste
        //des produits dans une base de données (en déléguant à un DAO)

        out.println(jacksonObjectMapper.writeValueAsString(listeProduits));
	}

	
}
