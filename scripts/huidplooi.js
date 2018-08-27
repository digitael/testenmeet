window.onload=function(){
var naam = document.getElementById('name');
var gewicht = document.getElementById('inputGewicht');
var lengte = document.getElementById('inputLengte');
var geslacht = document.getElementById('inputGeslacht');
var leeftijd = document.getElementById('inputLeeftijd');


var mmGemiddeld = document.getElementsByClassName('mmGemiddeld');
var mmGemiddeldSom = document.getElementById('mmGemiddeldSom');
    
document.getElementById('secondRow').addEventListener('change', function(e) {
    var mm1e = document.getElementsByClassName('mm1e');
    var mm2e = document.getElementsByClassName('mm2e');
    var mm3e = document.getElementsByClassName('mm3e');
    var countFills = [0,0,0,0,0,0,0,0,0,0];
    var sum1 = [0,0,0,0,0,0,0,0,0,0];
    var totalSum = [0,0,0,0,0,0,0,0,0,0]
    
    
    for (var i = 0; i < mm1e.length; i++) {
        if (mm1e[i].value > 0) {
            sum1[i] = parseFloat(mm1e[i].value);
            countFills[i] += 1;
            if (mm2e[i].value > 0) {
                sum1[i] += parseFloat(mm2e[i].value);
                countFills[i] += 1;
                if (mm3e[i].value > 0) {
                    sum1[i] += parseFloat(mm3e[i].value);                    
                    countFills[i] += 1;
                }
            }
        }
        
        if (mm1e[i].value > 0) {
            mmGemiddeld[i].placeholder = (sum1[i] / countFills[i]).toFixed(0);
            totalSum[i] = sum1[i] / countFills[i];
        } else {
            mmGemiddeld[i].placeholder = "";
            totalSum[i] = 0;
        }   
    }
    
    mmGemiddeldSom.placeholder = totalSum.reduce(add, 0).toFixed(0);

    function add(a, b) {
        return a + b;
    } 
});

    var nameTriceps = document.getElementById('nameTriceps');
    var nameSupra = document.getElementById('nameSupra');
    var nameDijbeen = document.getElementById('nameDijbeen');
    var nameAbdominaal = document.getElementById('nameAbdominaal');
    var nameBorst = document.getElementById('nameBorst');
    var nameSub = document.getElementById('nameSub');
    var nameAxil = document.getElementById('nameAxil');
    var nameBiceps = document.getElementById('nameBiceps');
    var nameRug = document.getElementById('nameRug');
    var nameKuit = document.getElementById('nameKuit');
    var knopP3JP = document.getElementById('p3JP');
    var knopP4JP = document.getElementById('p4JP');
    var knopP7JP = document.getElementById('p7JP');
    var knopP4DW =  document.getElementById('p4DW');
    var knopP9P = document.getElementById('p9P');

//--------------3 puntsmeting groene achtergrond bij hover ------//    
knopP3JP.addEventListener('click', function() {
    nameTriceps.style.backgroundColor = 'lightgreen';
    nameSupra.style.backgroundColor = 'lightgreen';
    nameDijbeen.style.backgroundColor = 'lightgreen';
    nameAbdominaal.style.backgroundColor = '#E9ECEF';
    nameBorst.style.backgroundColor = '#E9ECEF';
    nameSub.style.backgroundColor = '#E9ECEF';
    nameAxil.style.backgroundColor = '#E9ECEF';
    nameBiceps.style.backgroundColor = '#E9ECEF';
    nameRug.style.backgroundColor = '#E9ECEF';
    nameKuit.style.backgroundColor = '#E9ECEF';
    knopP3JP.style.backgroundColor = 'green';
    knopP4JP.style.backgroundColor = '#f4003d';
    knopP7JP.style.backgroundColor = '#f4003d';
    knopP4DW.style.backgroundColor = '#f4003d';
    knopP9P.style.backgroundColor = '#f4003d';
});
    
//--------------4 puntsmeting groene achtergrond bij hover ------//    
knopP4JP.addEventListener('click', function() {   
    nameTriceps.style.backgroundColor = 'lightgreen';
    nameSupra.style.backgroundColor = 'lightgreen';
    nameDijbeen.style.backgroundColor = 'lightgreen';
    nameAbdominaal.style.backgroundColor = 'lightgreen';
    nameBorst.style.backgroundColor = '#E9ECEF';
    nameSub.style.backgroundColor = '#E9ECEF';
    nameAxil.style.backgroundColor = '#E9ECEF';
    nameBiceps.style.backgroundColor = '#E9ECEF';
    nameRug.style.backgroundColor = '#E9ECEF';
    nameKuit.style.backgroundColor = '#E9ECEF';
    knopP3JP.style.backgroundColor = '#f4003d';
    knopP4JP.style.backgroundColor = 'green';
    knopP7JP.style.backgroundColor = '#f4003d';
    knopP4DW.style.backgroundColor = '#f4003d';
    knopP9P.style.backgroundColor = '#f4003d';
});
    
//--------------7 puntsmeting groene achtergrond bij hover ------//    
knopP7JP.addEventListener('click', function() {
    nameTriceps.style.backgroundColor = 'lightgreen';
    nameSupra.style.backgroundColor = 'lightgreen';
    nameDijbeen.style.backgroundColor = 'lightgreen';
    nameAbdominaal.style.backgroundColor = 'lightgreen';
    nameBorst.style.backgroundColor = 'lightgreen';
    nameSub.style.backgroundColor = 'lightgreen';
    nameAxil.style.backgroundColor = 'lightgreen';
    nameBiceps.style.backgroundColor = '#E9ECEF';
    nameRug.style.backgroundColor = '#E9ECEF';
    nameKuit.style.backgroundColor = '#E9ECEF';
    knopP3JP.style.backgroundColor = '#f4003d';
    knopP4JP.style.backgroundColor = '#f4003d';
    knopP7JP.style.backgroundColor = 'green';
    knopP4DW.style.backgroundColor = '#f4003d';
    knopP9P.style.backgroundColor = '#f4003d';
    
});
    
//--------------4 puntsmeting DW groene achtergrond bij hover ------//    
knopP4DW.addEventListener('click', function() {    
    nameTriceps.style.backgroundColor = 'lightgreen';
    nameSupra.style.backgroundColor = 'lightgreen';
    nameDijbeen.style.backgroundColor = '#E9ECEF';
    nameAbdominaal.style.backgroundColor = '#E9ECEF';
    nameBorst.style.backgroundColor = '#E9ECEF';
    nameSub.style.backgroundColor = 'lightgreen';
    nameAxil.style.backgroundColor = '#E9ECEF';
    nameBiceps.style.backgroundColor = 'lightgreen';
    nameRug.style.backgroundColor = '#E9ECEF';
    nameKuit.style.backgroundColor = '#E9ECEF';
    knopP3JP.style.backgroundColor = '#f4003d';
    knopP4JP.style.backgroundColor = '#f4003d';
    knopP7JP.style.backgroundColor = '#f4003d';
    knopP4DW.style.backgroundColor = 'green';
    knopP9P.style.backgroundColor = '#f4003d';
});
    
//--------------9 puntsmeting groene achtergrond bij hover ------//    
knopP9P.addEventListener('click', function() { 
    nameTriceps.style.backgroundColor = 'lightgreen';
    nameSupra.style.backgroundColor = 'lightgreen';
    nameDijbeen.style.backgroundColor = 'lightgreen';
    nameAbdominaal.style.backgroundColor = 'lightgreen';
    nameBorst.style.backgroundColor = 'lightgreen';
    nameSub.style.backgroundColor = 'lightgreen';
    nameAxil.style.backgroundColor = '#E9ECEF';
    nameBiceps.style.backgroundColor = 'lightgreen';
    nameRug.style.backgroundColor = 'lightgreen';
    nameKuit.style.backgroundColor = 'lightgreen';
    knopP3JP.style.backgroundColor = '#f4003d';
    knopP4JP.style.backgroundColor = '#f4003d';
    knopP7JP.style.backgroundColor = '#f4003d';
    knopP4DW.style.backgroundColor = '#f4003d';
    knopP9P.style.backgroundColor = 'green';
});
     

    


    

////// berekening 3-punts methode Jackson pollock /////
///////////////////////////////////////////////////////

document.getElementById('berekenButton').addEventListener('click', function(e) {
    var mmGTriceps = parseFloat(document.getElementById('mmG-Triceps').placeholder);
    var mmGSupra = parseFloat(document.getElementById('mmG-Supra').placeholder);
    var mmGDijbeen = parseFloat(document.getElementById('mmG-Dijbeen').placeholder);
    var mmGAbdominaal = parseFloat(document.getElementById('mmG-Abdominaal').placeholder);
    var mmGBorst = parseFloat(document.getElementById('mmG-Borst').placeholder);
    var mmGSub = parseFloat(document.getElementById('mmG-Sub').placeholder);
    var mmGAxil = parseFloat(document.getElementById('mmG-Axil').placeholder);
    var mmGBiceps = parseFloat(document.getElementById('mmG-Biceps').placeholder);
    var mmGRug = parseFloat(document.getElementById('mmG-Rug').placeholder);
    var mmGKuit = parseFloat(document.getElementById('mmG-Kuit').placeholder);
    
    var som3PuntsMeting = mmGTriceps + mmGSupra + mmGDijbeen;
    var uitkomst3Punt = document.getElementById('p3JPUitkomst');
    
    if (leeftijd.value > 1) {    
        if (geslacht.value == 1) {
            var resultaatP3JP = 495 / (1.10938 - (0.0008267 * som3PuntsMeting) + (0.0000016 * som3PuntsMeting * som3PuntsMeting) - (0.0002574 * leeftijd.value)) - 450;
            if (isNaN(resultaatP3JP)) {
                uitkomst3Punt.innerHTML = "vul alle benodige velden in";
            } else {
                uitkomst3Punt.innerHTML = resultaatP3JP.toFixed(1) + "%";            
            }
        } else if (geslacht.value == 2) {
             resultaatP3JP = 495 / (1.089733 - (0.0009245 * som3PuntsMeting) + (0.0000025 * som3PuntsMeting * som3PuntsMeting) - (0.0000979 * leeftijd.value)) - 450;
             if (isNaN(resultaatP3JP)) {
                uitkomst3Punt.innerHTML = "vul alle benodige velden in";
            } else {
                uitkomst3Punt.innerHTML = resultaatP3JP.toFixed(1) + "%";
            }
        } else {
            uitkomst3Punt.innerHTML = "vul het geslacht in";
        }    
    } else {
        uitkomst3Punt.innerHTML = "vul leeftijd in";
    }
    
    var som4PuntsMeting = mmGTriceps + mmGSupra + mmGDijbeen + mmGAbdominaal;
    var uitkomst4Punt = document.getElementById('p4JPUitkomst');

    if (leeftijd.value > 1) {    
        if (geslacht.value == 1) {
            var resultaatP4JP = (0.29288 * som4PuntsMeting) - (0.0005 * (som4PuntsMeting * som4PuntsMeting)) + (0.15845 * leeftijd.value) - 5.76377;
            if (isNaN(resultaatP4JP)) {
                uitkomst4Punt.innerHTML = "vul alle benodige velden in";
            } else {
                uitkomst4Punt.innerHTML = resultaatP4JP.toFixed(1) + "%";            
            }
        } else if (geslacht.value == 2) {
             resultaatP4JP = (0.29669 * som4PuntsMeting) - (0.00043 * (som4PuntsMeting * som4PuntsMeting)) + (0.02963 * leeftijd.value) + 1.4072;
             if (isNaN(resultaatP4JP)) {
                uitkomst4Punt.innerHTML = "vul alle benodige velden in";
            } else {
                uitkomst4Punt.innerHTML = resultaatP4JP.toFixed(1) + "%";
            }
        } else {
            uitkomst4Punt.innerHTML = "vul het geslacht in";
        }    
    } else {
        uitkomst4Punt.innerHTML = "vul leeftijd in";
    }
    
    var som7PuntsMeting = mmGTriceps + mmGSupra + mmGDijbeen + mmGAbdominaal + mmGBorst + mmGSub + mmGAxil;
    var uitkomst7Punt = document.getElementById('p7JPUitkomst');

    if (leeftijd.value > 1) {    
        if (geslacht.value == 1) {
            var resultaatP7JP = 495 / (1.112 - (0.00043499 * som7PuntsMeting) + (0.00000055 * som7PuntsMeting *som7PuntsMeting) - (0.00028826 * leeftijd.value)) - 450;
            if (isNaN(resultaatP7JP)) {
                uitkomst7Punt.innerHTML = "vul alle benodige velden in";
            } else {
                uitkomst7Punt.innerHTML = resultaatP7JP.toFixed(1) + "%";            
            }
        } else if (geslacht.value == 2) {
             resultaatP7JP = 495 / (1.097 - (0.00046971 * som7PuntsMeting) + (0.00000056 * som7PuntsMeting *som7PuntsMeting) - (0.00012828 * leeftijd.value)) - 450;
             if (isNaN(resultaatP7JP)) {
                uitkomst7Punt.innerHTML = "vul alle benodige velden in";
            } else {
                uitkomst7Punt.innerHTML = resultaatP7JP.toFixed(1) + "%";
            }
        } else {
            uitkomst7Punt.innerHTML = "vul het geslacht in";
        }    
    } else {
        uitkomst7Punt.innerHTML = "vul leeftijd in";
    }
    
    var som4PuntsMetingDW = mmGTriceps + mmGSupra + mmGSub + mmGBiceps;
    var uitkomst4PuntDW = document.getElementById('p4DWUitkomst');
    var logOfSum = Math.log10(som4PuntsMetingDW);
    
    switch (true) {
        case (leeftijd.value < 17):
            var densityMan = 1.1533 - (0.0643 * logOfSum);
            var percMan = (495 / densityMan) - 450;
            var densityVrouw = 1.1369 - (0.0598 * logOfSum);
            var percVrouw = (495 / densityVrouw) - 450;
            break;
        case (leeftijd.value < 20):
            var densityMan = 1.1620 - (0.0630 * logOfSum);
            var percMan = (495 / densityMan) - 450;
            var densityVrouw = 1.1549 - (0.0678 * logOfSum);
            var percVrouw = (495 / densityVrouw) - 450;
            break;
        case (leeftijd.value < 30):
            var densityMan = 1.1631 - (0.0632 * logOfSum);
            var percMan = (495 / densityMan) - 450;
            var densityVrouw = 1.1599 - (0.0717 * logOfSum);
            var percVrouw = (495 / densityVrouw) - 450;
            break;
        case (leeftijd.value < 40):
            var densityMan = 1.1422 - (0.0544 * logOfSum);
            var percMan = (495 / densityMan) - 450;
            var densityVrouw = 1.1423 - (0.0632 * logOfSum);
            var percVrouw = (495 / densityVrouw) - 450;
            break;
        case (leeftijd.value < 50):
            var densityMan = 1.1620 - (0.0700 * logOfSum);
            var percMan = (495 / densityMan) - 450;
            var densityVrouw = 1.1333 - (0.0612 * logOfSum);
            var percVrouw = (495 / densityVrouw) - 450;
            break;
        default:
            var densityMan = 1.1715 - (0.0779 * logOfSum);
            var percMan = (495 / densityMan) - 450;
            var densityVrouw = 1.1339 - (0.0645 * logOfSum);
            var percVrouw = (495 / densityVrouw) - 450;
    }
    
    if (geslacht.value == 1) {
        if (isNaN(percMan)) {
           uitkomst4PuntDW.innerHTML = "vul alle benodige velden in";
        } else {
            uitkomst4PuntDW.innerHTML = percMan.toFixed(1) + "%";
        }
        
    } else if (geslacht.value == 2) {
        if (isNaN(percVrouw)) {
           uitkomst4PuntDW.innerHTML = "vul alle benodige velden in";
        } else {
            uitkomst4PuntDW.innerHTML = percVrouw.toFixed(1) + "%"; 
        }
    } else {
        uitkomst4PuntDW.innerHTML = "vul het geslacht in";}
    
    var som9PuntsmMeting = mmGTriceps + mmGSupra + mmGDijbeen + mmGAbdominaal + mmGBorst + mmGSub + mmGBiceps + mmGRug + mmGKuit;    
    var uitkomst9Punt = document.getElementById('p9PUitkomst'); 
    
    var berekening9Punts = (27 * som9PuntsmMeting) / (gewicht.value * 2.2046226218488);
    
    if (gewicht.value > 1) {
        if (leeftijd.value > 1) {
            if (isNaN(berekening9Punts)) {
                uitkomst9Punt.innerHTML = "vul alle benodigde velden in";
            } else {
                uitkomst9Punt.innerHTML = berekening9Punts.toFixed(1) + "%";
            }
        } else {
            uitkomst9Punt.innerHTML = "vul leeftijd in";
        }    
    } else {
        uitkomst9Punt.innerHTML = "vul gewicht in";
    }
    
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}