function calcula() {
    'use strict';
    var carg, tiem, corr;
    carg = document.getElementById("car").value;
    tiem = document.getElementById("tie").value;

    corr = carg / tiem;
    document.getElementById("cor").value = corr;
}

function borraVals() {
    'use strict';
    document.getElementById("car").value = "";
    document.getElementById("tie").value = "";
    document.getElementById("cor").value = "";
}

function calculaD() {
    'use strict';
    var corr, area, dens;
    corr = document.getElementById("cord").value;
    area = document.getElementById("are").value;

    dens = corr / area;
    document.getElementById("den").value = dens;
}

function borraValsD() {
    'use strict';
    document.getElementById("cord").value = "";
    document.getElementById("are").value = "";
    document.getElementById("den").value = "";
}