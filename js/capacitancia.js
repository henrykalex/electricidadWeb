function calcula() {
    'use strict';
    var epsi, area, dist, capa;
    epsi = document.getElementById("eps").value;
    area = document.getElementById("are").value;
    dist = document.getElementById("dis").value;

    capa = (epsi * area) / dist;
    document.getElementById("cap").value = capa;
}

function borraVals() {
    'use strict';
    document.getElementById("eps").value = "";
    document.getElementById("are").value = "";
    document.getElementById("dis").value = "";
    document.getElementById("cap").value = "";
}

function calculaP() {
    'use strict';
    var capap, qp, pote;
    capap = document.getElementById("capp").value;
    pote = document.getElementById("pot").value;

    qp = capap * pote;
    document.getElementById("qp").value = qp;
}

function borraValsP() {
    'use strict';
    document.getElementById("capp").value = "";
    document.getElementById("pot").value = "";
    document.getElementById("qp").value = "";
}