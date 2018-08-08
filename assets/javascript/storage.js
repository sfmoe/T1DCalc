logInsulin.onclick = function(){
    addToLog();
    showLog();
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


function showLog(){
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

            var deleteItem = document.createElement("a");
            deleteItem.href = "#";
            deleteItem.class = "remove-log-item";
            deleteItem.innerHTML = "X";
            deleteItem.setAttribute("data-log-id", LogCount-1);
            deleteItem.className = "deleteItem";
            
                for (var key in Logitem) {
                    if (Logitem.hasOwnProperty(key)) {
                    var li = document.createElement("li");
                    li.clasName = key;  
                    li.innerHTML = Logitem[key];

                    
                    
                    
                    log.appendChild(li);
                    }
                }
                row.appendChild(deleteItem)
                row.appendChild(log);
                logItems.appendChild(row);
                LogCount--;
        });

        var removeLinks = log.getElementsByClassName("deleteItem");
   
        for(var i = 0; i < removeLinks.length; i++)
        {
        
            removeLinks[i].addEventListener('click', function(e){
                e.preventDefault();
                removeFromLog(this.getAttribute("data-log-id"));
    
            });
       
        }
}

function removeFromLog(deleteItemID){
    var localLog = JSON.parse( localStorage.getItem('t1dCalc') );
    
    if(deleteItemID){
        var confirmDelete = confirm("are you sure you want to delete?");
        if(confirmDelete == true){
            localLog.splice(deleteItemID, 1);
            localStorage.setItem('t1dCalc', JSON.stringify(localLog));
        }
        
    }
    
    showLog();
}



window.addEventListener("load", function() {
    showLog();
});