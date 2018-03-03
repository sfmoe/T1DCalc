(function (window, document) {

    var calculator = document.getElementById('BolusCalculator'),
        carbIntake = document.getElementById('carbIntake'),
        carbRatio  = document.getElementById('CarbRatio'),
        CarbBolusTotal = document.getElementById('CarbBolusTotal'),
        
        BGL = document.getElementById('BGL'),
        correctionTarget = document.getElementById('correctionTarget'),
        correctionAmount = document.getElementById('correctionAmount'),
        correctionFactor = document.getElementById('correctionFactor'),
        correctionBolusTotal = document.getElementById('correctionBolusTotal'),
        buttonCalcCorrection = document.getElementById('buttonCalcCorrection');
    

     
    buttonCalcCarb.onclick = function(){
        var cbt = (parseFloat(Number(carbIntake.value)) / parseFloat(Number(carbRatio.value))).toFixed(2);
        CarbBolusTotal.innerHTML = cbt;
        insulinBolus();
        return false;
    }

    buttonCalcCorrection.onclick = function(){
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

