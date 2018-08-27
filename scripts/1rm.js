document.getElementById('printButton').addEventListener('click', function() {
    window.print();
});

var buttonBereken = document.getElementById('berekenButton');
var buttonMaakSchema = document.getElementById('schemaButton');
var plusOefening = document.getElementById('plusButton');
var deleteOefening = document.getElementsByClassName('closeCross');
document.getElementById('completeRow4').style.display = 'none';
document.getElementById('schemaButton').style.display = 'none';
document.getElementById('printButton').style.display = 'none';

buttonBereken.addEventListener('click', function(event) {
    document.getElementById('schemaButton').style.display = 'inline-block';
    var kg = document.getElementsByClassName('gewichtKG');
    var hh = document.getElementsByClassName('aantalHH');
    var brz = document.getElementsByClassName('1RMBrzycki');
//    var bae = document.getElementsByClassName('1RMBaechle');
    var epl = document.getElementsByClassName('1RMEpley');
    
    for (var i = 0; i < kg.length; i++) {        
        brz[i].value = (kg[i].value / (1.0278 - (0.0278 * hh[i].value))).toFixed(1) + " kg";
//        bae[i].value = (kg[i].value * (1 + (0.033 * hh[i].value))).toFixed(1) + "kg";
        epl[i].value = (kg[i].value * (1 + (hh[i].value / 30))).toFixed(1) + " kg";
    }
    event.preventDefault();
});

buttonMaakSchema.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('completeRow4').style.display = 'block';
    document.getElementById('completeRow5').style.display = 'block';
    document.getElementById('printButton').style.display = 'block';
    var oefNaam = document.getElementsByClassName('oefeningNaam');
    var excName = document.getElementsByClassName('exerciseName');
    var brzArray = document.getElementsByClassName('1RMBrzycki');
    var brzPercArray = document.getElementsByClassName('brzP');
    var eplArray = document.getElementsByClassName('1RMEpley');
    var eplPercArray = document.getElementsByClassName('eplP');
        var brz100P = document.getElementsByClassName('brz100p');
        var brz95P = document.getElementsByClassName('brz95p');
        var brz90P = document.getElementsByClassName('brz90p');
        var brz85P = document.getElementsByClassName('brz85p');
        var brz80P = document.getElementsByClassName('brz80p');
        var brz75P = document.getElementsByClassName('brz75p');
        var brz70P = document.getElementsByClassName('brz70p');
        var brz65P = document.getElementsByClassName('brz65p');
        var brz60P = document.getElementsByClassName('brz60p');
        var brz55P = document.getElementsByClassName('brz55p');
        var brz50P = document.getElementsByClassName('brz50p');
    
        var epl100P = document.getElementsByClassName('epl100p');
        var epl95P = document.getElementsByClassName('epl95p');
        var epl90P = document.getElementsByClassName('epl90p');
        var epl85P = document.getElementsByClassName('epl85p');
        var epl80P = document.getElementsByClassName('epl80p');
        var epl75P = document.getElementsByClassName('epl75p');
        var epl70P = document.getElementsByClassName('epl70p');
        var epl65P = document.getElementsByClassName('epl65p');
        var epl60P = document.getElementsByClassName('epl60p');
        var epl55P = document.getElementsByClassName('epl55p');
        var epl50P = document.getElementsByClassName('epl50p');
    document.getElementById('completeRow5').innerHTML = "";
    excName[0].innerHTML = oefNaam[0].value;
    
    for (var i = 1;i < oefNaam.length;i++) {
        var heleRij2 = document.getElementById('completeRow4').innerHTML;
        var rijHTML2 = $("<div />").html(heleRij2).text();
        $("#completeRow5").append(heleRij2);
        var brz = document.getElementsByClassName('1RMBrzycki');
        var epl = document.getElementsByClassName('1RMEpley');
        var brzValue = (brz[i].value).slice(0, -3);
        var eplValue = (epl[i].value).slice(0, -3);
        excName[i].innerHTML = oefNaam[i].value;   
        brz100P[i].innerHTML = brzValue;
            brz95P[i].innerHTML = (brzValue * .95).toFixed(1);
            brz90P[i].innerHTML = (brzValue * .9).toFixed(1);
            brz85P[i].innerHTML = (brzValue * .85).toFixed(1);
            brz80P[i].innerHTML = (brzValue * .8).toFixed(1);
            brz75P[i].innerHTML = (brzValue * .75).toFixed(1);
            brz70P[i].innerHTML = (brzValue * .7).toFixed(1);
            brz65P[i].innerHTML = (brzValue * .65).toFixed(1);
            brz60P[i].innerHTML = (brzValue * .6).toFixed(1);
            brz55P[i].innerHTML = (brzValue * .55).toFixed(1);
            brz50P[i].innerHTML = (brzValue * .5).toFixed(1);
                
        epl100P[i].innerHTML = eplValue;
            epl95P[i].innerHTML = (eplValue * .95).toFixed(1);
            epl90P[i].innerHTML = (eplValue * .9).toFixed(1);
            epl85P[i].innerHTML = (eplValue * .85).toFixed(1);
            epl80P[i].innerHTML = (eplValue * .8).toFixed(1);
            epl75P[i].innerHTML = (eplValue * .75).toFixed(1);
            epl70P[i].innerHTML = (eplValue * .7).toFixed(1);
            epl65P[i].innerHTML = (eplValue * .65).toFixed(1);
            epl60P[i].innerHTML = (eplValue * .6).toFixed(1);
            epl55P[i].innerHTML = (eplValue * .55).toFixed(1);
            epl50P[i].innerHTML = (eplValue * .5).toFixed(1);
    }
    
    
        
    
    brzPercArray[0].innerHTML = (parseFloat(brzArray[0].value) * .5).toFixed(1);
    brzPercArray[1].innerHTML = (parseFloat(brzArray[0].value) * .55).toFixed(1);
    brzPercArray[2].innerHTML = (parseFloat(brzArray[0].value) * .6).toFixed(1);
    brzPercArray[3].innerHTML = (parseFloat(brzArray[0].value) * .65).toFixed(1);
    brzPercArray[4].innerHTML = (parseFloat(brzArray[0].value) * .7).toFixed(1);
    brzPercArray[5].innerHTML = (parseFloat(brzArray[0].value) * .75).toFixed(1);
    brzPercArray[6].innerHTML = (parseFloat(brzArray[0].value) * .8).toFixed(1);
    brzPercArray[7].innerHTML = (parseFloat(brzArray[0].value) * .85).toFixed(1);
    brzPercArray[8].innerHTML = (parseFloat(brzArray[0].value) * .9).toFixed(1);
    brzPercArray[9].innerHTML = (parseFloat(brzArray[0].value) * .95).toFixed(1); 
    brzPercArray[10].innerHTML = (parseFloat(brzArray[0].value)).toFixed(1);
    
    eplPercArray[0].innerHTML = (parseFloat(eplArray[0].value) * .5).toFixed(1);
    eplPercArray[1].innerHTML = (parseFloat(eplArray[0].value) * .55).toFixed(1);
    eplPercArray[2].innerHTML = (parseFloat(eplArray[0].value) * .6).toFixed(1);
    eplPercArray[3].innerHTML = (parseFloat(eplArray[0].value) * .65).toFixed(1);
    eplPercArray[4].innerHTML = (parseFloat(eplArray[0].value) * .7).toFixed(1);
    eplPercArray[5].innerHTML = (parseFloat(eplArray[0].value) * .75).toFixed(1);
    eplPercArray[6].innerHTML = (parseFloat(eplArray[0].value) * .8).toFixed(1);
    eplPercArray[7].innerHTML = (parseFloat(eplArray[0].value) * .85).toFixed(1);
    eplPercArray[8].innerHTML = (parseFloat(eplArray[0].value) * .9).toFixed(1);
    eplPercArray[9].innerHTML = (parseFloat(eplArray[0].value) * .95).toFixed(1); 
    eplPercArray[10].innerHTML = (parseFloat(eplArray[0].value)).toFixed(1);
   });

plusOefening.addEventListener('click', function(){
  var heleRij = document.getElementById('completeRow1').innerHTML;
  var rijHTML = $("<div />").html(heleRij).text();
  $("#completeRow2").append(heleRij);
    
  
});

document.getElementById('completeRow2').addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG') {
        var buttonEvent = event.target;
        var buttonParent = buttonEvent.parentNode.parentNode.parentNode;
        buttonParent.parentNode.removeChild(buttonParent); 
document.getElementById('completeRow4').style.display = 'none';
document.getElementById('completeRow5').style.display = 'none';
    }
});

document.getElementById('wisButton').addEventListener('click', function() {
   document.getElementById('completeRow2').innerHTML = "";
});



