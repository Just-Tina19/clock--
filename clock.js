// Decare variables for the ids//

let hour = document.getElementById("hour");
let mins = document.getElementById("mins");
let sec = document.getElementById("seconds");
let date = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");
let day = document.getElementById("day");


//set interval for the time and set the current time//
setInterval(() => {
    let currentTime = new Date();
    
hour.innerHTML =currentTime.getHours();
mins.innerHTML = currentTime.getMinutes();
seconds.innerHTML = currentTime.getSeconds();
date.innerHTML = currentTime.getDate();
month.innerHTML = currentTime.getMonth() + 1;
year.innerHTML = currentTime.getFullYear();
day.innerHTML = currentTime.getDay();

//set the week days
if (day.innerHTML == 0) {
    document.getElementById("day").innerHTML = "Sun";

  } else if (day.innerHTML == 1) {
    document.getElementById("day").innerHTML  = "Mon";

  } else if(day.innerHTML == 2){
    document.getElementById("day").innerHTML  = "Tue";

  }else if(day.innerHTML == 3){
    document.getElementById("day").innerHTML = "Wed";

  }else if(day.innerHTML== 4){
    document.getElementById("day").innerHTML = "Thur";
  }else if(day.innerHTML == 5){
    document.getElementById("day").innerHTML  = "Fri";

  }else{
    document.getElementById("day").innerHTML  = "Sat";
  }

},1000);





 
 

