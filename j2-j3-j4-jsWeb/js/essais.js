function mesEssais(){
    var prenom="jean";
    var nom ="Bon"
    addMessage("je m'appelle " + prenom + " " + nom);
    var age=33;
    addMessage("j'ai " + age + " ans");
   //à compléter par la suite en Tp 
   //...
   let v;
   addMessage("v=" + v + " dont le type est " + typeof v);
   v="abc";
   addMessage("v=" + v + " dont le type est " + typeof v);
   v=56.8;
   addMessage("v=" + v + " dont le type est " + typeof v);

   let y = 25;
   let ch = "25";
   //En exercice , afficher si les variables y et ch
   //ont simplement memes valeurs 
   //ou bien à la fois mêmes valeurs et meme types
   if(y === ch) addMessage("y et ch ont memes valeurs et memes types");
   else {
    if(y == ch) addMessage("y et ch ont simplement memes valeurs");
      else addMessage("y et ch ont des valeurs diferentes");
   }

   let a="12";
   let b="3";
   //en exercice , calculer c comme addition de a et b
   //v1 : sans conversion numerique
   let c = a+b;
   console.log("c="+c + " sans conversion numerique")
   //v2 : avec conversion numerique
   c=Number(a)+Number(b);
   addMessage("c="+c);
}

