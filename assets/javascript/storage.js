logInsulin.onclick = function(){
    addToLog();
    getLog();
};

function addToLog(){
    var corr_bolus = document.getElementById("blood-glucose-level-display").innerHTML;
    var carb_bolus = document.getElementById("carb-intake-display").innerHTML;
    var round_bolus = insulinBolusTotal.innerHTML;
    var raw_bolus = rawInsulinBolus.innerHTML;


    var logItem = {
        "date": currentDateTime(),
        "carbs": carb_bolus,
        "bgl": corr_bolus,
        "insulin bolus": round_bolus
    };

    if(raw_bolus == 0){
        alert("You must do a calculation first");
    }else{
        /* begin the storage  if non exists */
        if(localStorage.getItem('t1dCalc') === null){
            t1dCalc = [];
        }else{
            t1dCalc = JSON.parse(localStorage.getItem('t1dCalc'));
        }
        t1dCalc.push(logItem);
        localStorage.setItem('t1dCalc', JSON.stringify(t1dCalc));
    }
    
};


function currentDateTime(){
    var currentdate = new Date(); 
    var datetime =  currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " "  
                    + ( (currentdate.getHours()%12)? currentdate.getHours()%12 : 12 ) + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds() + " "
                    + (currentdate.getHours() >=12 ? "pm" : "am");

                    return datetime;
;}


function getLog(){
    var localLog = JSON.parse( localStorage.getItem('t1dCalc') ).reverse();
    var logItems = document.getElementById("log-items");
    logItems.innerHTML = "";
    var LogCount = localLog.length;
    localLog.forEach(function(Logitem, Logindex, array) {
    var row = document.createElement("li");
    row.className = "row";
    var log = document.createElement("ul");
    var countli = document.createElement("li");
    countli.innerHTML = LogCount;
    log.appendChild(countli);

        for (var key in Logitem) {
            if (Logitem.hasOwnProperty(key)) {
              var li = document.createElement("li");
              li.clasName = key;  
              li.innerHTML = Logitem[key];
              log.appendChild(li);
            }
        }

        row.appendChild(log);
        logItems.appendChild(row);
        LogCount--;
      });
}