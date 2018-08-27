/*
CONTRAINDICATIES:
1. De maximale hartslag <120 sl/min is.
2. Er sprake is van een vertraagd hartfrequentieherstel (<12 sl/min, 1 min na maximale inspanning)
in combinatie met chronotrope incompetentie (Hfmax< 85% Hfmax(verwacht) waarbij
Hfmax(verwacht) = 207-0.7 x leeftijd).

N.B. Bovengenoemde regressievergelijking van Fairbarn et al. 1994 is gebaseerd op referentiepopulaties
met een normaal lichaamsgewicht (dat wil zeggen BMI < 25 kg/m2). De regressievergelijkingen
produceren derhalve normwaarden voor de VO2max die geen rekening houden
met (fors) overgewicht. Met name bij vrouwen met een lichaamslengte < 1,65 m en een BMI >30 kg/m2
ontstaat al gauw een overschatting van de actuele fi theid ten opzicht van de ‘norm’.
Hoewel wetenschappelijk onderzoek hiernaar ontbreekt, zou de geschatte VO2max (op basis van het
maximaal geleverde vermogen) dienen te worden uitgedrukt per kilogram lichaamsgewicht. De
normwaarden voor de VO2max zou men (op theoretische gronden) moeten omrekenen naar een
normgewicht uitgaande van een BMI van 23 kg/m2. De ratio tussen beide geeft dan vervolgens een betere
inschatting van de relatieve fitheid van het individu.
*/
    



document.getElementById('berekenen').addEventListener('click', () => {    
    var leeftijd = document.getElementById('inputLeeftijd').value;
    var gewicht = parseFloat(document.getElementById('inputGewicht').value);
    var geslacht = document.getElementById('inputGeslacht').value;
    var lengte = parseFloat(document.getElementById('inputLengte').value);
    var BMI = gewicht / ((lengte/100) * (lengte/100));
    var WSteepRamp = document.getElementById('maxWatt').value; //maximaal behaald Wattage tijdens hartfrequentieherstel
    var Wmax = 0.65 * (WSteepRamp) - 3.9; //(Wmax): Wmax= 0.65x Wramp-3.9
    var VO2maxEstimated =  (0.0067 * WSteepRamp + 0.358).toFixed(3); //estimated VO2max (L/min) = 0,0067 Wmax – SteepRamp + 0,358
    var VO2maxExpectedMan = (0.023 * lengte) + (0.0117 * gewicht) - (0.031 * leeftijd) - 0.332; //mannen: VO2max (L/min) = (0,023 × ht) + (0,0117 × BW) – (0,031 × leeftijd) – 0,332
    var VO2maxExpectedWoman = (0.0158 * lengte) + (0.00899 * gewicht) - (0.027 * leeftijd) + 0.207; //vrouwen: VO2max (L/min)= (0,0158 × ht) + (0,00899 × BW) – (0,027 × leeftijd) + 0,207
    document.getElementById('outputWmax').placeholder = Wmax.toFixed(0) + " Watt";
    var VO2maxExpectedThis;
     if (geslacht === '1') {
            VO2maxExpectedThis = VO2maxExpectedMan.toFixed(3);
        } else if (geslacht === '2') {            
            VO2maxExpectedThis = VO2maxExpectedWoman.toFixed(3);
        }
     
    document.getElementById('vo2maxGeschat').placeholder = VO2maxEstimated
                + " L/min ("
                + ((VO2maxEstimated*1000)/gewicht).toFixed(1) + " ml/kg/min)";
    
    document.getElementById('vo2maxVerwacht').placeholder = VO2maxExpectedThis
                + " L/min ("
                + ((VO2maxExpectedThis*1000)/gewicht).toFixed(1) + " ml/kg/min)";
    
    document.getElementById('percVerwacht').placeholder = ((VO2maxEstimated / VO2maxExpectedThis) * 100).toFixed(1) + " %"; 
});


