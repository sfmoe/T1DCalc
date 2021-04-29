

function Calculator() {

return (
    <>
    <section id="Calculator">
    <div className="header">
        <h1>Calculator</h1>
        <hr />
        <h2>Ratios</h2>
        <div className="CurrentRatio">
            {/* current ratio */}
        </div>
    </div>

    <div className="content">
        <div id="bolus-calculator">
            <div id="number-input"> 
                
                <div id="carb-intake-input">
                <label htmlFor="carb-intake">Carb Intake</label>
                <input type="number" id="carb-intake" step="0.01" defaultValue="0" />
                /
                <input name="carb-ratio" id="carb-ratio" type="number" step="0.01" defaultValue="12" />
                </div>


                <div id="blood-glucose-input">
                <label htmlFor="blood-glucose-level">Blood Glucose Level</label>
                <input type="number" id="blood-glucose-level" step="0.01" defaultValue="0" />
                </div>



                    
                    <input type="hidden" id="carb-bolus-total" defaultValue="0" />  
                 
                    <input type="hidden" id="correction-target" defaultValue="120" />  
                    <input type="hidden" id="correction-amount" defaultValue="0" />  
                    <input type="hidden" id="correction-factor" defaultValue="140" />  
                    <input type="hidden" id="correction-bolus-total" defaultValue="0" />  

                
            </div>
            <hr/>
           

           

            <fieldset id="insulin-bolus">
                <legend>Insulin Bolus</legend>
                <span id="insulin-bolus-total">0</span>
                
                <div className="button-container center">
                <button id="calculate-insulin-bolus" className="button">Calculate</button>
                <button id="log-insulin-bolus-results">Log Insulin Bolus</button>
                </div>
                <hr/>
            </fieldset>

            <fieldset id="carb-bolus-calculations">
                    <legend>Carb Bolus</legend>
                        <span id="carb-intake-display">0</span> / <span id="carb-ratio-display">0</span> = <span id="carb-bolus-total-display">0</span>
            </fieldset>

            <fieldset id="correction-bolus-calculations">
                    <legend>Correction Bolus</legend> 
                    <span id="blood-glucose-level-display">0</span> - <span id="correction-target-display">0</span>  = <span id="correction-amount-display">0</span>  / <span id="correction-factor-display">0</span> = 
                    <span id="correction-bolus-total-display">0</span>
            </fieldset>
            <fieldset id="total-raw-calculations">
                <legend>Raw Insulin Bolus</legend>
                <span id="raw-total-bolus">0</span>
             </fieldset>
        </div>
      
    </div>
</section>
</>
)

}

export default Calculator;
