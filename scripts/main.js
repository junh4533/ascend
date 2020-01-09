function opacity_range(val, max, min) {
  return (val - min) / (max - min);
}

$(window).on('load', function () {
  setTimeout(function(){
    //deferred onload
    $('#newsletter-modal').modal('show');
  }, 3000);
 
});

$(document).ready(function () {

  // $('#homepage-toast').toast({
  //   delay: 8000
  // })

  // $('#homepage-toast').toast('show');

  

  $('#fullpage').fullpage();
  var line1 = document.getElementById('year');
  var line2 = document.getElementById('goal');

  var typewriter = new Typewriter(line1, {
    loop: true
  });

  typewriter.pauseFor(1000).typeString('freshman')
    .pauseFor(250)
    .deleteAll()
    .pauseFor(250)
    .typeString('sophomore')
    .pauseFor(250)
    .deleteAll()
    .pauseFor(250)
    .typeString('junior')
    .pauseFor(250)
    .deleteAll()
    .pauseFor(250)
    .typeString('senior')
    .pauseFor(250)
    .deleteAll()
    .pauseFor(250)
    .typeString('student')
    .pauseFor(2500)
    .start();

  var typewriter2 = new Typewriter(line2, {
    loop: true
  });

  typewriter2.pauseFor(1000).typeString('learn')
    .pauseFor(500)
    .deleteAll()
    .pauseFor(500)
    .typeString('grow')
    .pauseFor(1250)
    .deleteAll()
    .pauseFor(250)
    .typeString('achieve')
    .pauseFor(250)
    .deleteAll()
    .pauseFor(250)
    .typeString('succeed')
    .pauseFor(250)
    .deleteAll()
    .pauseFor(250)
    .typeString('<strong style="color:orange">Ascend</strong>')
    .pauseFor(2500)
    .start();

  function viewport_query(viewport) {
    if (viewport.matches) { // viewport width > 1200px (not mobile device)
      var parent = document.querySelector('#split_container'),
        topPanel = parent.querySelector('#professional_panel'),
        handle = parent.querySelector('#split_divider'),
        tint_professional = document.getElementById('tint_professional'),
        tint_social = document.getElementById('tint_social'),
        skewHack = 1000,
        delta = 0;

      parent.addEventListener('mousemove', function (event) {
        // Get the delta b/w mouse position and center point.
        delta = (event.clientX - window.innerWidth / 2) * 0.5;

        // Move the handle.
        handle.style.left = event.clientX + delta + 'px';

        // Adjust the top panel width.
        topPanel.style.width = event.clientX + skewHack + delta + 'px';

        width = $(window).width();
        tint_opacity1 = opacity_range(event.clientX, 0, width) * .7;
        tint_opacity2 = opacity_range(event.clientX, width, 0) * .7;
        // console.log(tint_opacity1)
        tint_social.style.background = "rgba(0, 0, 0, ${tint_opacity1})";
        tint_professional.style.background = "rgba(0, 0, 0, ${tint_opacity2})";
      });
    } else {
      $("#social").before($("#social_enrichment")); //move social enrichment heading before its description
      tint_social.style.background = "rgba(0, 0, 0, .5)";
      tint_professional.style.background = "rgba(0, 0, 0, .5)";
    }
  }

  var viewport = window.matchMedia("(min-width: 1200px)")
  viewport_query(viewport) // Call listener function at run time
  viewport.addListener(viewport_query) // Attach listener function on state changes

});