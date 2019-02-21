checkStatus();
function validate(){
    const from = document.querySelector("#origin");
    const to = document.querySelector("#destination");
    const date = document.querySelector("#flight-date");
    const adults = document.querySelector("#adults");
    const kids = document.querySelector("#kids");
    const babys = document.querySelector("#babys");

    if(from.value.trim() ==""){
        alert("Error: Input is empty!");
        from.focus();
        return false;
    }
    if(to.value.trim() ==""){
        alert("Error: Input is empty!");
        to.focus();
        return false;
    }
    if(date.value.trim() ==""){
        alert("Error: Input is empty!");
        date.focus();
        return false;        
    }
    var ToDate = new Date();
    if (new Date(date.value).getTime() < ToDate.getTime()) {
          alert("The Date must be Bigger or Equal to today date");
          date.focus();
          return false;
    }
    if( adults.value + kids.value + babys.value <=0){
        alert("Error: Any passenger registered");
        adults.focus();
        return false; 
    }
    return true;

}

function checkStatus(){
    if(window.location.search.substr(1)!=""){

        document.querySelector("#tickets-form").classList.toggle("hidden");
        const searching=document.createElement("h2");
        searching.textContent="Sent Successfuly: Searching...";
        document.querySelector(".tickets").append(searching);
    }
}


