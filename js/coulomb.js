function calcula() {
    'use strict';
    var cons, q1, q2, dist, fuer;
    cons = document.getElementById("con").value;
    q1 = document.getElementById("q1").value;
    q2 = document.getElementById("q2").value;
    dist = document.getElementById("dis").value;

    fuer = (cons * q1 * q2) / (dist * dist);
    document.getElementById("fue").value = fuer;
}

function borraVals() {
    'use strict';
    document.getElementById("q1").value = "";
    document.getElementById("q2").value = "";
    document.getElementById("con").value = "";
    document.getElementById("dis").value = "";
    document.getElementById("fue").value = "";
}