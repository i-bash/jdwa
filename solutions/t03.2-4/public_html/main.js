function move(e){
    var theButton = e.target;
    var thisRectangle = e.target.parentNode;
    var otherRectangle = document.getElementById(
        thisRectangle.id == 'r1'?'r2':'r1'
    );
    thisRectangle.removeChild(theButton);
    otherRectangle.appendChild(theButton);
    
    var oldColor = theButton.style.color;
    theButton.style.color = theButton.style.backgroundColor;
    theButton.style.backgroundColor = oldColor;
}

for(var i=1; i<=3; i++){
    document.getElementById('b'+i).
            addEventListener('click', move);
}
