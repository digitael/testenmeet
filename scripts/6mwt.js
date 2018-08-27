//Formule 1:
//Er zijn normwaarden voor de 6-minuten wandeltest voor gezonde
//volwassenen tussen 50 en 85 jaar.
//De formule om de normwaarden te berekenen is:
//Afstand = 218 + (5,14 × lengte [cm] – 5,32 × leeftijd) – (1,80 × gewicht) + 51,31 × geslacht [1 = man, 0 = vrouw]
//Randvoorwaarden voor het toepassen van deze formule: de lengte van het parcours was 50m

//Formule 2:
//Er zijn normwaarden voor de 6-minuten wandeltest voor gezonde
//volwassenen tussen 40 en 90 jaar.
//Voorspelde afstand (vrouw) = 1266 − (7.80*age) − (5.92*BMI)
//Voorspelde afstand (man) = 1064 − (5.28*age) − (6.55*BMI)
//Randvoorwaarden voor het toepassen van deze formule: de 6MWT wordt afgenomen op een afstand van 10m (dus 20m voor een rondje heen en terug)
//Uitbreiding van de formule met hartslagmeting:
//(niet toepasbaar bij gebruik van beta blocker):
//Voorspelde afstand (vrouw) = 1073 − (6.03*age) − (5.79*BMI) +
//(1.86*HRchange)
//Voorspelde afstand (man) = 878 − (3.60*age) − (6.42*BMI) +
//(1.95*HRchange) 16
//Met behulp van deze normwaarden kan de uitslag van de 6-minuten
//wandeltest worden geïnterpreteerd door het resultaat van de cliënt uit te
//drukken als percentage van het voorspelde aan de hand van leeftijd, geslacht,
//lengte en gewicht. Een score onder de 82% van wat werd voorspeld wordt
//gezien als afwijkend


var formule1;
var formule2;
var formule2metHR;
var hartslagHide = document.getElementsByClassName('hartslagHide');
for (var i = 0; i < hartslagHide.length; i++) {
    hartslagHide[i].style.visibility = 'hidden';
}
var spO2Hide = document.getElementsByClassName('spO2Hide');
for (var i = 0; i < spO2Hide.length; i++) {
    spO2Hide[i].style.visibility = 'hidden';
}

var checkHartslag = document.getElementById('hartslagCheck');
var spO2Check = document.getElementById('zuurstofCheck');

document.getElementById('hartslagCheck').addEventListener('change', function() {
    if (checkHartslag.checked === true) {
        for (var i = 0; i < hartslagHide.length; i++) {
            hartslagHide[i].style.visibility = 'visible';
        }
    } else {
        for (var j = 0; j < hartslagHide.length; j++) {
            hartslagHide[j].style.visibility = 'hidden';
        }
    }
});

document.getElementById('zuurstofCheck').addEventListener('change', function() {
    if (spO2Check.checked === true) {
        for (var i = 0; i < spO2Hide.length; i++) {
            spO2Hide[i].style.visibility = 'visible';
        }
    } else {
        for (var j = 0; j < spO2Hide.length; j++) {
            spO2Hide[j].style.visibility = 'hidden';
        }
    }
});

document.getElementById('buttonBereken').addEventListener('click', function() {
    var naamTestPersoon = document.getElementById('name').value;
    var geslacht = document.getElementById('inputGeslacht').value;
    var leeftijd = document.getElementById('inputLeeftijd').value;
    var gewichtKg = document.getElementById('inputGewicht').value;
    var lengte = document.getElementById('inputLengte').value;
    var BMI = gewichtKg / ((lengte/100) * (lengte/100));
    var lengteParcours = document.getElementById('afstandParcours').value;
    var afstandGelopen = document.getElementById('afstandGelopen').value;
    var hartslagAanvang = document.getElementById('hartslagAanvang').value;
    var hartslagEind = document.getElementById('hartslagEind').value;
    var spO2Aanvang = document.getElementById('spO2Aanvang').value;
    var spO2Eind = document.getElementById('spO2Eind').value;
    var hartslagVerschil = hartslagEind - hartslagAanvang;
    var spO2Verschil = spO2Eind - spO2Aanvang;
    
    document.getElementById('BMI').placeholder = BMI.toFixed(1);
    document.getElementById('HRVerschil').placeholder = hartslagVerschil;
    document.getElementById('spO2Verschil').placeholder = spO2Verschil;
    
    var formule1 = 218 + (5.14 * lengte - 5.32 * leeftijd) - (1.8 * gewichtKg) + 51.31 * geslacht;
    var formule2Vrouw = 1266 - (7.8 * leeftijd) - (5.92 * BMI);
    var formule2Man = 1064 - (5.28 * leeftijd) - (6.55 * BMI);
    var formule2VrouwHR = 1073 - (6.03 * leeftijd) - (5.79 * BMI) + (1.86 * hartslagVerschil);
    var formule2ManHR = 878 - (3.6 * leeftijd) - (6.42 * BMI) + (1.95 * hartslagVerschil);
    
    document.getElementById('formule1Calculated').placeholder = formule1.toFixed(0) + "m (" + (afstandGelopen / (formule1)*100).toFixed(0) + "%)" ;
    
    if (geslacht === 0){
        document.getElementById('formule2Calculated').placeholder = formule2Vrouw.toFixed(0) + "m (" + (afstandGelopen / (formule2Vrouw)*100).toFixed(0) + "%)";
        document.getElementById('formule2HRCalculated').placeholder = formule2VrouwHR.toFixed(0) + "m (" + (afstandGelopen / (formule2VrouwHR)*100).toFixed(0) + "%)";
    } else {
        document.getElementById('formule2Calculated').placeholder = formule2Man.toFixed(0) + "m (" + (afstandGelopen / (formule2Man)*100).toFixed(0) + "%)";
        document.getElementById('formule2HRCalculated').placeholder = formule2ManHR.toFixed(0) + "m (" + (afstandGelopen / (formule2ManHR)*100).toFixed(0) + "%)";        
    }
    
    if (lengteParcours < 30) {
        document.getElementById('formule1Calculated').style.backgroundColor = 'lightgreen';
        document.getElementById('formule2Calculated').style.backgroundColor = '#E9ECEF';
        document.getElementById('formule2HRCalculated').style.backgroundColor = '#E9ECEF';
    } else {
        document.getElementById('formule2Calculated').style.backgroundColor = 'lightgreen';
        document.getElementById('formule2HRCalculated').style.backgroundColor = 'lightgreen';
        document.getElementById('formule1Calculated').style.backgroundColor = '#E9ECEF'
    }
});