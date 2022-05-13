$(function() {
   /* $('#p1').css('border-width', '3px').css('border-style','solid');
    $("#p2").html("nouveau contenu html du paragraphe p2"); 
    $('p').css('color', 'blue'); // tous les éléments de type p en bleu
    */
    $('#btnEuroToFranc').on('click',function(){
       $("#txtFranc").html( 6.55957 *
                                Number( $("#txtEuro").val()) ) ;
     });
  }); 