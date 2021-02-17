//DOM Element
const time = document.getElementById("time")
const greeting = document.getElementById("greeting")
const name = document.getElementById("name")
const focus = document.getElementById("focus")
  

// Options

const showAmPm = true;
 //show time
 function showTime(){
    let today = new Date() ,
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds(),


    //Set AM or PM
  amPm = hour >= 12 ? 'PM' : 'AM';
    //12hr format
    hour = hour % 12 || 12;
    //Output Time
    time.innerHTML = ` ${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;
    setTimeout(showTime, 1000);
 }
 //add zeros
 function addZero(n) {
    return(parseInt(n, 10) < 10 ? '0' : " ") + n;
 }

 //Set Bacground and Greeting
 function setBgGreet() {
    let today = new Date(),
       hour = today.getHours();
    
    if(hour < 12){
       //Morning    
      //  document.body.style.backgroundImage="url('img/evening .jpg')";
      //  document.body.style.backgroundImage="url('img/afternoon.jpg')";
      document.body.style.backgroundImage = "url('img/morning.jpg') ";    
      document.body.style.backgroundRepeat = " no-repeat"; 
      document.body.style.backgroundSize = "cover"; 
      greeting.textContent =" Good Morning";
    }  else if (hour < 18){
       //Afternoon  
       document.body.style.backgroundImage="url('img/afternoon.jpg')";
       document.body.style.backgroundRepeat = " no-repeat"; 
       document.body.style.backgroundSize = "cover"; 
       greeting.textContent =" Good Afternoon";
    }  else{
       //Evening  
      document.body.style.backgroundImage="url('img/evening .jpg')";
      document.body.style.backgroundRepeat = " no-repeat"; 
      document.body.style.backgroundSize = "cover"; 
      greeting.textContent =" Good Evening  ";
      document.body.style.color ='white';
    }
 }
   //Get Name
function getName(){
   if (localStorage.getItem("name") === null) {
      name.textContent = ` [ Enter Name]`;
   } else {
      name.textContent = localStorage.getItem('name');
   }
}
// Set Name
function setName(e){
   if(e.type === 'keypress'){
      //Make sure enter is pressed
      if (e.which == 13 || e.keyCode == 13) {
         localStorage.setItem("name", e.target.innerText);
         name.blur();
      }
   } else{
      localStorage.setItem("name", e.target.innerText);
   }
}


//Get Focus
function getFocus(){
   if (localStorage.getItem("focus") === null){
      focus.textContent = ` [Enter Focus]`;
   } else {
      focus.textContent = localStorage.getItem('focus');
   }
}
// Set Focus
function setFocus(e){
   if( e.type === 'keypress'){
      //Make sure enter is pressed
      if (e.which == 13 || e.keyCode == 13) {
         localStorage.setItem("focus", e.target.innerText);
         focus.blur();
      }
   } else{
      localStorage.setItem("focus", e.target.innerText);
   }
}
// name.addEventlistener ('keypress', setName);
// name.addEventlistener('blur' , setName);
// focus.addEventlistener('keypress' , setFocus);
// focus.addEventlistener('blur' , setFocus);


 //Run
 showTime();
 setBgGreet();
 getName();
 getFocus();
 getFocus();
