// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();


  $(function() {
    //caches a jQuery object containing the header element
    var header = $(".site-header");
    var scroller = $('.scroll-to-top');
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 60) {
            header.addClass("active");
            scroller.addClass("active");
            
        } else {
            header.removeClass("active");
            scroller.removeClass("active");
        }
    });
});

function scrollTopAnimated() { 
  $("html, body").animate( 
      { scrollTop: "0" }, 2000); 
} 

$('.scroll-to-top').on('click',  scrollTopAnimated);


$(window).scroll(function() {
$('.counter').each(function() {
  var $this = $(this),
    countTo = $this.attr('data-count');

  $({
    countNum: $this.text()
  }).animate({
      countNum: countTo
    },

    {
      duration: 5000,
      easing: 'linear',
      step: function() {
        $this.text(commaSeparateNumber(Math.floor(this.countNum)));
      },
      complete: function() {
        $this.text(commaSeparateNumber(this.countNum));
        //alert('finished');
      }
    }
  );

});

function commaSeparateNumber(val) {
  while (/(\d+)(\d{3})/.test(val.toString())) {
    val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
  }
  return val;
}
});

$('body').append('<div style="" id="loadingDiv"><div class="loader">Loading...</div></div>');
$(window).on('load', function(){
  setTimeout(removeLoader, 2000);
});
function removeLoader(){
    $( "#loadingDiv" ).fadeOut(500, function() {
      
      $( "#loadingDiv" ).remove(); 
  });  
}