var element = document.getElementById('my-name');
        
element.addEventListener(
  'change',
  function(e){
      setCookie('myname', e.target.value, 7);
  }
);

element.value = getCookie('myname');
