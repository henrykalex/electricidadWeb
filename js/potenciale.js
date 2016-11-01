function calcula() {
    'use strict';
    var cons, q, dist, pote;
    cons = document.getElementById("con").value;
    q = document.getElementById("q").value;
    dist = document.getElementById("dis").value;

    pote = (cons * q) / dist;
    document.getElementById("pot").value = pote;
}

function borraVals() {
    'use strict';
    document.getElementById("q").value = "";
    document.getElementById("con").value = "";
    document.getElementById("dis").value = "";
    document.getElementById("pot").value = "";
}