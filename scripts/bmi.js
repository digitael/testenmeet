
document.getElementById('firstRow').addEventListener('change', function(e) {
    var gewicht = document.getElementById('inputGewicht').value;
    var lengte = document.getElementById('inputLengte').value;
    var geslacht = document.getElementById('inputGeslacht').value;
    var BMI = gewicht / ((lengte / 100) * (lengte / 100));
    var gezondMin = ((lengte / 100) * (lengte / 100)) * 18.5;
    var gezondMax = ((lengte / 100) * (lengte / 100)) * 24.9;
    var lengteInch = lengte * 0.393700787;
    var BMI22 = ((lengte / 100) * (lengte / 100)) * 22;
//    var hamwiMan = 48 + ((lengte - 152.4) * 1.1);
//    var hamwiVrouw = 45.5 + ((lengte - 152.4) * 0.9);
    var hamwiMan = (48 + ((lengteInch - 60) * 2.7));
    var hamwiVrouw = (45.5 + ((lengteInch - 60) * 2.2));
    if (gewicht > 25 && lengte > 100){
        if (BMI < 18.5) {
        var BMIResultaat = "Ondergewicht";
    } else if (BMI < 25) {
        var BMIResultaat = "Gezond gewicht";
    } else if (BMI < 30) {
        var BMIResultaat = "Overgewicht Graad I";
    } else if (BMI < 40) {
        var BMIResultaat = "Obesitas";
    } else if (BMI < 50) {
        var BMIResultaat = "Morbide Obesitas";
    } else {
        var BMIResultaat = "Super Obesitas";
    }        
        document.getElementById('BMICalculated').placeholder = BMI.toFixed(1) + " (" + BMIResultaat + ")";
    }
    
    if (lengte > 100){
        document.getElementById('BMIMinMax').textContent = 
            gezondMin.toFixed(1) + " - " + gezondMax.toFixed(1) + " kg. (BMI 22 = " + BMI22.toFixed(1) + " kg)";
    }
    
    if (lengte > 152 && geslacht == 1){
        document.getElementById('hamwi').textContent = "Ideaal gewicht volgens Hamwi: " + hamwiMan.toFixed(1) + " kg.";
    } else if (lengte > 152 && geslacht == 2){
        document.getElementById('hamwi').textContent = "Ideaal gewicht volgens Hamwi: " + hamwiVrouw.toFixed(1) + " kg.";
    }
    
    
    
    console.log(BMIResultaat);
});

 