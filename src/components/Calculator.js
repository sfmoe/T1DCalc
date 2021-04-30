import React from "react";


class Calculator extends React.Component{


    constructor(props){
    super(props);

    this.state = {
         correctionAmount: 0,
         correctionTarget: process.env.REACT_APP_CORRECTION_TARGET, // to do: change this to get from user settings
         correctionFactor: process.env.REACT_APP_CORRECTION_FACTOR, // to do: change this to get from user settings
         correctionBolusTotal: 0,
         carbRatio:  process.env.REACT_APP_CARB_RATIO,
         carbBolusTotal: 0,
         currentCarb: 0,
         currentBG: 0,
         totalBolus: 0,
         totalBolusRound: 0
      };
      
      this.carbinputEl = React.createRef();
      this.carbRatioEl = React.createRef();
      this.bglevelEL = React.createRef();
      this.calculateCarbBolus = this.calculateCarbBolus.bind(this);
      this.calculateBolus = this.calculateBolus.bind(this);
      this.calculateCorrection = this.calculateCorrection.bind(this);
      this.rawBolus = this.rawBolus.bind(this);

    }

    calculateCarbBolus(){
        this.setState({
            currentCarb: this.carbinputEl.current.value,
        })

        let carbReturn = (parseFloat(Number(this.carbinputEl.current.value)) / parseFloat(Number(this.carbRatioEl.current.value))).toFixed(2);
        // let carbReturn =(Number(this.carbinputEl.current.value) / Number(this.carbRatioEl.currentValue);
        return ( carbReturn )
    }

    calculateCorrection(){


        let correction = ( 
            parseFloat(Number(this.bglevelEL.current.value))  - parseFloat(Number(this.state.correctionTarget))
        );
        let correctionBolus = (
            correction / parseFloat(Number(this.state.correctionFactor))
        ).toFixed(2);

        this.setState({
            currentBG: this.bglevelEL.current.value,
            correctionAmount: correction,
            correctionBolusTotal: correctionBolus
        })        

    };

    rawBolus(){
        let returnTotalBolus = (
            parseFloat(Number(this.state.carbBolusTotal)) + parseFloat(Number(this.state.correctionBolusTotal))
            ).toFixed(2);
        this.setState({
            totalBolus: returnTotalBolus
        });

       
    };

    calculateBolus(event){
        this.setState({carbBolusTotal: this.calculateCarbBolus()})
        this.calculateCorrection();
        /* not sure why i have to set rawBolus inside of settimeout, shouldnt it read the state immediately? */
        setTimeout(()=>{
            this.rawBolus();
        }, 3);

        setTimeout(()=>{
            this.setState({totalBolusRound: Math.round(this.state.totalBolus)})
        }, 3);
        event.preventDefault();   
    };




    render() {
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
            <form onSubmit={this.calculateBolus}>
                <div id="number-input"> 
                    
                    <div id="carb-intake-input">
                    
                    <label htmlFor="carb-intake">Carb Intake</label>
                    <input type="number" id="carb-intake" step="0.01" defaultValue="0" ref={this.carbinputEl}/>
                    /
                    <input name="carb-ratio" id="carb-ratio" type="number" step="0.01" defaultValue={this.state.carbRatio} ref={this.carbRatioEl}/>
                    </div>


                    <div id="blood-glucose-input">
                    <label htmlFor="blood-glucose-level">Blood Glucose Level</label>
                    <input type="number" id="blood-glucose-level" step="0.01" defaultValue="0" ref={this.bglevelEL}/>
                    </div>



                        


                    
                </div>
                <hr/>
            

            

                <fieldset id="insulin-bolus">
                    <legend>Insulin Bolus</legend>
                    <span id="insulin-bolus-total">{this.state.totalBolusRound}</span>
                    
                    <div className="button-container center">
                    <button id="calculate-insulin-bolus" className="button">Calculate</button>
                    <a href="#log" className="button" id="log-insulin-bolus-results">Log Insulin Bolus</a>
                    </div>
                    <hr/>
                </fieldset>
                <h3>Verify the calculations:</h3>
                <fieldset id="carb-bolus-calculations">
                        <legend>Carb Bolus</legend>
                            <span id="carb-intake-display">{this.state.currentCarb}</span> / <span id="carb-ratio-display">{this.state.carbRatio}</span> = <span id="carb-bolus-total-display">{this.state.carbBolusTotal}</span>
                </fieldset>

                <fieldset id="correction-bolus-calculations">
                        <legend>Correction Bolus</legend> 
                        <span id="blood-glucose-level-display">{this.state.currentBG}</span> - <span id="correction-target-display">{this.state.correctionTarget}</span>  =  <span id="correction-amount-display">{this.state.correctionAmount}</span>  / <span id="correction-factor-display">{this.state.correctionFactor}</span> = <span id="correction-bolus-total-display">{this.state.correctionBolusTotal}</span>
                </fieldset>
                <fieldset id="total-raw-calculations">
                    <legend>Raw Insulin Bolus</legend>
                    <span id="raw-total-bolus">{this.state.totalBolus}</span>
                </fieldset>

            </form>
            </div>
        
        </div>
    </section>
    </>
        )}

    }



export default Calculator;
