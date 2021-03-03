
const var1 = 'Variable 1';
let var2 = 'Variable 2';
var var3 = 'Variable 3';

function function1() {
    console.log(var1);
    console.log(var2);
    console.log(var3);

    // var1 = 'VAR1'; Error porque una constante no puede cambiar
    var2 = 'VAR2';
    var3 = 'VAR3';
    function2();
    console.log('Ya terminó la función 1')
}

function function2() {
    console.log(var2);
    console.log(var3);
    console.log('Ya terminó la función 2')
}

function2();
function1();
// function2();