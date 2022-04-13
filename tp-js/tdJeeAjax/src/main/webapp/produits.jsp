<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
    <title>produits</title>
    <link rel="stylesheet" href="css/styles.css" />
    <script src="js/my_ajax_util.js"></script>
    <script src="js/ajax-produits-v2.js"></script>
</head>
<body>
    <h3 class="c1">produits selon categorie (version avec integration java/jee)</h3>
   categorie: <select id="selCategorie"> 
      <option value="???">choisir une categorie</option>
      <option value="papeterie">papeterie</option>
      <option value="ordinateur">ordinateur</option>
      <option value="imprimante">imprimante</option>
    </select> <br/>
   <hr/>
   Produits de la catégorie sélectionnée: <br/>
     <table border="1" id="tableHtmlProd">
     <thead>
          <tr><th>code</th><th>nom</th><th>prix</th><th>description</th></tr>
      </thead>
     <tbody id="tBodyProd">
      <!-- <tr><td>1</td><td>produit1</td><td>2.45</td><td>descr</td></tr> -->
     </tbody>
     </table> 
    <hr/>
    date=<%=new java.util.Date()%>
    <br/>
    <a href="page2.jsp">vers page 2 (jsp)</a>
</body>
</html>