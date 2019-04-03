$(document).ready(function () {
  new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true
  });
  //methods
  // fullpage_api.setAllowScrolling(false);

    var line1 = document.getElementById('year');
   
    var typewriter = new Typewriter(line1, {
      loop: true
    });
   
    typewriter.typeString('freshman')
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
      .pauseFor(250)
      .start();
   
    var line2 = document.getElementById('goal');
   
    var typewriter2 = new Typewriter(line2, {
      loop: true
    });
   
    typewriter2.typeString('learn')
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
      .pauseFor(250)
      .start();
});
   
   
   