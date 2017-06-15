var form = document.getElementById('form');
var elements = form.childNodes;

function writeData(){
    var data = {};
    for (var i=0; i<elements.length; i++){
        var element=elements[i];
        if(element.tagName=='INPUT'){
            data[element.name] = element.value;
        }
    }
    localStorage.setItem('data', JSON.stringify(data));
}

function readData(){
    var data = JSON.parse(localStorage.getItem('data'));
    for (var name in data){
        for (var i=0; i<elements.length; i++){
            var element=elements[i];
            if(element.name==name){
                element.value = data[name];
            }
        }
    }
}

document.getElementById('submit').
        addEventListener('click', e=>{
            writeData();
            e.preventDefault();
});
readData();
