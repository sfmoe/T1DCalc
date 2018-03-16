(function (window, document) {

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
        CarbBolusTotal.innerHTML = cbt;


        var correctionAmountTotal = parseFloat(Number(BGL.value)) - parseFloat(Number(correctionTarget.value));
        correctionAmount.value = correctionAmountTotal;
        
        correctionBolusTotal.innerHTML = (parseFloat(Number(correctionAmountTotal)) / parseFloat(Number(correctionFactor.value)) ).toFixed(2);

        insulinBolus();
        return false;
    }


    var insulinBolus = function(){
        var cbl = parseFloat(CarbBolusTotal.innerHTML),
            bglCorrection = parseFloat(correctionBolusTotal.innerHTML);
            if (bglCorrection <=0 ){
                bglCorrection = 0;
            }
    insulinBolusTotal.innerHTML = (cbl+bglCorrection).toFixed(2);

    }
    
}(this, this.document));

