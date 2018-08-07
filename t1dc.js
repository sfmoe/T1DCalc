(function (window, document) {

    var menuLink = document.getElementById('menuLink');


    var calculator = document.getElementById('bolus-calculator'),
        carbIntake = document.getElementById('carb-intake'),
        carbRatio  = document.getElementById('carb-ratio'),
        CarbBolusTotal = document.getElementById('carb-bolus-total'),
        
        BGL = document.getElementById('blood-glucose-level'),
        correctionTarget = document.getElementById('correction-target'),
        correctionAmount = document.getElementById('correction-amount'),
        correctionFactor = document.getElementById('correction-factor'),
        correctionBolusTotal = document.getElementById('correction-bolus-total'),
        insulinBolusTotal = document.getElementById('insulin-bolus-total'),
        calculateInsulinBolus = document.getElementById('calculate-insulin-bolus');
        
        
        

    calculateInsulinBolus.onclick = function(){
        var cbt = (parseFloat(Number(carbIntake.value)) / parseFloat(Number(carbRatio.value))).toFixed(2);
        CarbBolusTotal.value = cbt;


        var correctionAmountTotal = parseFloat(Number(BGL.value)) - parseFloat(Number(correctionTarget.value));
        correctionAmount.value = correctionAmountTotal;
        
        correctionBolusTotal.value = (parseFloat(Number(correctionAmountTotal)) / parseFloat(Number(correctionFactor.value)) ).toFixed(2);

        insulinBolus();
        updateValue();
        return false;
    };


    var insulinBolus = function(){
        var cbl = parseFloat(CarbBolusTotal.value),
            bglCorrection = parseFloat(correctionBolusTotal.value);
            if (bglCorrection <=0 ){
                bglCorrection = 0;
            }
    insulinBolusTotal.innerHTML = (cbl+bglCorrection).toFixed(2);

    };



    var updateValue = function(){

        els = calculator.getElementsByTagName("input");
        for (var i = 0; i < els.length; i++) {
            
            
                thisValue = els[i].value;
                elName = els[i].id+"-display";
               document.getElementById(elName).innerHTML = thisValue;
                
            }   
    };
    
    menuLink.onclick = function(){
        document.getElementById('layout').classList.toggle("active");
        return false;
    };


    updateValue();
}(this, this.document));

