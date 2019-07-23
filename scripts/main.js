function opacity_range(val, max, min) {
  return (val - min) / (max - min);
}

$(document).ready(function () {
  // new fullpage('#fullpage', {
  //   // autoScrolling: true,
  //   // navigation: true,
  //   anchors: ['s1','s2','s3','s4'],
  //   menu: '#menu',
  //   slidesNavigation: true,
  //   licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
  // });
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
    .pauseFor(1500)
    .start();

  var typewriter2 = new Typewriter(line2, {
    loop: true
  });

  typewriter2.pauseFor(1000).typeString('learn')
    .pauseFor(500)
    .deleteAll()
    .pauseFor(250)
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
    .pauseFor(1500)
    .start();

  // document.addEventListener('DOMContentLoaded', function() {
  var parent = document.querySelector('#split_container'),
    topPanel = parent.querySelector('#professional'),
    handle = parent.querySelector('#split_divider'),
    tint2 = document.getElementById('tint_2'),
    tint3 = document.getElementById('tint_3'),
    skewHack = 1000,
    delta = 0;

  parent.addEventListener('mousemove', function (event) {
    // Get the delta between the mouse position and center point.
    delta = (event.clientX - window.innerWidth / 2) * 0.5;

    // Move the handle.
    handle.style.left = event.clientX + delta + 'px';

    // Adjust the top panel width.
    topPanel.style.width = event.clientX + skewHack + delta + 'px';

    width = $(window).width();
    tint_opacity1 = opacity_range(event.clientX, width, 0);
    tint_opacity2 = opacity_range(event.clientX, 0, width);
    tint2.style.background = `rgba(0, 0, 0, ${tint_opacity1})`;
    tint3.style.background = `rgba(0, 0, 0, ${tint_opacity2})`;
  });
  // });

});