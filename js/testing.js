$(document).ready(function() {
    $(".test").click(function(event){
      $(this).addClass('test1');
      setTimeout(function(){ 
        $(".test").removeClass('test1');
      }, 5000);

    });
});
