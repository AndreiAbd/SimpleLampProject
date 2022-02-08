/* Powered | CoderX ©2021 | Andrei Abd
█▀▀ █▀█ █▀▄ █▀▀ █▀█ ▀▄▀
█▄▄ █▄█ █▄▀ ██▄ █▀▄ █░█
CODER X |تم تصميم الموقع و برمجته من قبل اندريه عبد
mail      :  usr.g0a1@gmial.com
CoderX    :  https://coderx-project.blogspot.com/
Whatsapp  :  +963934820511
Pinterest :  https://www.pinterest.com/andreiabd93/
Instagram :  https://www.instagram.com/andrei_abd/
Linkeden  :  https://www.linkedin.com/in/andreiabd
Facebook  :  https://www.facebook.com/andreiaabd/
Github    :  https://github.com/AndreiAbd
 */
//Disable Right Mouse Click
document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener("keydown", (e) => {
  // USE THIS TO DISABLE CONTROL AND ALL FUNCTION KEYS
  // if (e.ctrlKey || (e.keyCode>=112 && e.keyCode<=123)) {
  // THIS WILL ONLY DISABLE CONTROL AND F12
  if (e.ctrlKey || e.keyCode==123) {
    e.stopPropagation();
    e.preventDefault();
  }
});

//Control Panel
function lightOff(){
    document.getElementById('l0').style.display = 'block';
    document.getElementById('l1').style.display = 'none';
}
function lightOn(){
    document.getElementById('l0').style.display = 'none';
    document.getElementById('l1').style.display = 'block';
// Timer part
var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
    lightOff();
  }else if(document.getElementById('l1').style.display === 'none'){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
    lightOff();
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);
}
//Get Current Year
const d = new Date();
document.getElementById("getCurrentYear").innerHTML = d.getFullYear()
