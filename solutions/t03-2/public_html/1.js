var texts=[];

function getTexts(node){
    if(node.nodeType == Node.TEXT_NODE
      && ['SCRIPT','STYLE','NOSCRIPT'].
      indexOf(node.parentNode.tagName) == -1
    ){
        let text=node.nodeValue.trim();
        if(text != ''){
            texts.push(text);
        }
    }
    for (let i=0; i<node.childNodes.length; i++){
        getTexts(node.childNodes[i]);
    }
}

getTexts(document);
document.write(texts.sort().join('<hr>'));
