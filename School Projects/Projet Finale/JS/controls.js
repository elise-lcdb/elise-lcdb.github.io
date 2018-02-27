
function myFunction() {
    var x = document.getElementById("sub");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function myFunction2() {
    var x = document.getElementById("sub2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
$(document).ready(function(){
    // alert('coucou /o/')
    //scrollTo
    // $('nav ul li a, footer h2 a').click(function(e){
    //  $.scrollTo(this.hash|| 0,1000);
    //  e.preventDefault();
    // //$('nav ul li .sub').hide();
    // });
    //Sous liste
    $('nav ul li .sub').hide();
    $('#wrapper nav ul li a').mouseover(function(){
        $(this).next().slideToggle();
    });
    
    //Accordéon
    $('article p').hide();
    $('article p:first').show();
    $('article h2').wrapInner('<a></a>');
    $('article h2 a').attr('href','#');
    
    $('article h2 a').click(function(){
        var txtimg = $(this).parent('h2').next('p');
        if(!txtimg.is(':visible')){
            $('article p').slideUp();
            txtimg.slideDown();
        }
    });

    //Fancybox
    $("[data-fancybox]").fancybox({
        fullSreen : {
            autoStrart : true
        },
        slideShow : {
            autoStart : true,
            speed     : 1000
        }
    });
});