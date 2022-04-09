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
	
	private ProduitBasicDao produitBasicDao = new ProduitBasicDao();
	//ou bien injection via @Inject , @EJB ou @Autowired ou ...
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ServletProduitSelonCategorie() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String categorie = request.getParameter("categorie");
		response.setContentType("application/json");
		PrintWriter out = response.getWriter();
		
		ObjectMapper jacksonObjectMapper = new ObjectMapper();//convertisseur java<-->json
		
		//List<Produit> listeProduits = this.mapProduitSelonCategorie.get(categorie);
		List<Produit> listeProduits = produitBasicDao.getProduitsByCategorie(categorie);
		//NB: on pourrait avec un autre code récupérer la liste
		//des produits dans une base de données (en déléguant à un DAO)
		
		out.println(jacksonObjectMapper.writeValueAsString(listeProduits));
	}

	

}
