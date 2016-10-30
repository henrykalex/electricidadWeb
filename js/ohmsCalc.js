'use strict';
function ohmCalc(volts, ampers) {
    var ohms = volts / ampers;
    return ohms;
}

function voltCalc(ohms, ampers) {
    var volts = ohms * ampers;
    return volts;
}

function ampCalc(volts, ohms) {
    var ampers = volts / ohms;
    return ampers;
}

function calcula() {
    var vol, amp, ohm, ohms, amps, volts;
    vol = document.getElementById("vol").value;
    amp = document.getElementById("amp").value;
    ohm = document.getElementById("ohm").value;

    if (ohm === "") {
        ohms = ohmCalc(vol, amp);
        document.getElementById("ohm").value = ohms;
    }
    if (amp === "") {
        amps = ampCalc(vol, ohm);
        document.getElementById("amp").value = amps;
    }
    if (vol === "") {
        volts = voltCalc(ohm, amp);
        document.getElementById("vol").value = volts;
    }

}

function borraVals() {
    document.getElementById("vol").value = "";
    document.getElementById("amp").value = "";
    document.getElementById("ohm").value = "";
}