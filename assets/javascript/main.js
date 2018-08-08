


const calculator = document.getElementById('bolus-calculator'),
    log = document.getElementById('Log');
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
    logInsulin = document.getElementById('log-insulin-bolus-results');
    rawInsulinBolus = document.getElementById('raw-total-bolus');



    function clearInput(){
        this.value = '';
    }

    document.addEventListener("DOMContentLoaded", function() {


        /* clear inputs for easier input on mobile */
        carbIntake.addEventListener("focus", clearInput);
        BGL.addEventListener("focus", clearInput);
        showLog();
    });



