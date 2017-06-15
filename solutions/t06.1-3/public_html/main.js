document.getElementById('div1').addEventListener(
    'click',
    function(e){
      e.target.style.animationName = 
          e.target.style.animationName == ''?
          'animation1':''
      ;
    }
  );

