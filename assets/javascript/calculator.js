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
insulinBolusTotal.innerHTML = roundCorrection( ( (cbl+bglCorrection).toFixed(2)) );
rawInsulinBolus.innerHTML = (cbl+bglCorrection).toFixed(2) 
};



var updateValue = function(){

    els = calculator.getElementsByTagName("input");
    for (var i = 0; i < els.length; i++) {
        
        
            thisValue = els[i].value;
            elName = els[i].id+"-display";
           document.getElementById(elName).innerHTML = thisValue;
            
        }   
};

var roundCorrection = function(correction){
    var initialDecimal = parseFloat(correction % 1).toFixed(2);
    var initialWholeNumber = Math.floor(correction);
    
if ( parseFloat(initialDecimal).toFixed(1) >= parseFloat(0.0) && parseFloat(initialDecimal).toFixed(1) <= parseFloat(0.3)){
    
    return initialWholeNumber;
}

if ( parseFloat(initialDecimal).toFixed(1)>= parseFloat(0.4) && parseFloat(initialDecimal).toFixed(1) <= parseFloat(0.7)){
    return (initialWholeNumber + 0.5);
}

if ( parseFloat(initialDecimal).toFixed(1) >= parseFloat(0.8) && parseFloat(initialDecimal).toFixed(1) <= parseFloat(0.9)){

    return parseInt(initialWholeNumber + 1).toFixed(0);
    }


return "error";
}
