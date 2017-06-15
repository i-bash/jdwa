function f(){
    document.write('Меня вызвали из функции ' + 
            arguments.callee.caller.name);
}

function g(){
    f();
}

g();
