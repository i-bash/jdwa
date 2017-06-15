document.getElementsByTagName('input')[0].addEventListener(
   'change',
   function(e){
       var today = new Date();
       var birthday = new Date(e.target.value);
       var next = new Date(e.target.value);
       next.setFullYear(today.getFullYear());
       if(next < today){
           next.setFullYear(next.getFullYear()+1);
       }
       var remain = next.getTime() - today.getTime();
       document.getElementById('next').innerHTML=
         next.toDateString();
       document.getElementById('remain').innerHTML=
         Math.round(remain/1000);
   }
);