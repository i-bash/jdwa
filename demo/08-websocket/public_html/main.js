var form=document.getElementById('form');
var button=document.getElementById('button');
var request=document.getElementById('request');

var ws = new WebSocket('ws://localhost:8888/');

ws.onopen = e => {
    button.disabled = false;
    request.disabled = false;
}

ws.onclose = e => {
    button.disabled = true;
    request.disabled = true;
}

ws.onerror = e => {
    alert('error');
    console.log(e);
}

ws.onmessage = e => {
  document.getElementById('response').innerHTML = e.data;
};

form.addEventListener(
    'submit',
    e => {
        ws.send(request.value);
        request.value = '';
        e.preventDefault();
    }
);
