function displayDate() {;
  document.getElementById("waktu").innerHTML = Date();
  }

function formSent() {
  alert("Your data has been sent! Please contact me via e-mail first : hopatricia1711@gmail.com");
}

function anotherFormSent() {
  alert("Note : Please wait for 2 x 24 hours for response. Thank you :D");
}

function mouseOverSendMe(obj) {
  obj.style.cssText="background: white; border-radius: 10px; border: 2px double white; padding: 15px 20px 15px 20px; color:black; cursor: pointer; font-weight: bold; text-decoration: none; transition-duration: 0.4s; width: 120px; text-align: center; ";
  obj.innerHTML = "Send Me!"
}

function mouseOutSend(obj) {
  obj.style.cssText="background: none; border-radius: 10px; border: 2px double white; padding: 15px 20px 15px 20px; color:white; cursor: pointer; font-weight: bold; text-decoration: none; transition-duration: 0.4s; width: 90px; text-align: center;";
  obj.innerHTML = "Send!"
}

function mouseOverToAchievement(obj) {
  obj.style.cssText="background: white; border-radius: 10px; border: 2px double white; padding: 15px 20px 15px 20px; color:black; cursor: pointer; font-weight: bold; text-decoration: none; transition-duration: 0.4s; width: 190px; text-align: center;";
  obj.innerHTML = "Go to Achievement";
}

function mouseOverToCollegeLife(obj) {
  obj.style.cssText="background: white; border-radius: 10px; border: 2px double white; padding: 15px 20px 15px 20px; color:black; cursor: pointer; font-weight: bold; text-decoration: none; transition-duration: 0.4s; width: 190px; text-align: center";
  obj.innerHTML = "Go to College Life";
}


function mouseOverToSkill(obj) {
  obj.style.cssText="background: white; border-radius: 10px; border: 2px double white; padding: 15px 20px 15px 20px; color:black; cursor: pointer; font-weight: bold; text-decoration: none; transition-duration: 0.4s; width: 170px; text-align: center";
  obj.innerHTML = "Go to Skill";
}

function mouseOverToMyProject(obj) {
  obj.style.cssText="background: white; border-radius: 10px; border: 2px double white; padding: 15px 20px 15px 20px; color:black; cursor: pointer; font-weight: bold; text-decoration: none; transition-duration: 0.4s; width: 190px; text-align: center";
  obj.innerHTML = "Go to My Project"
}

function mouseOverToContactMe(obj) {
  obj.style.cssText="background: white; border-radius: 10px; border: 2px double white; padding: 15px 20px 15px 20px; color:black; cursor: pointer; font-weight: bold; text-decoration: none; transition-duration: 0.4s; width: 190px; text-align: center;";
  obj.innerHTML = "Go to Contact Me"
}

function mouseOutHere(obj) {
  obj.style.cssText="background: none; border-radius: 10px; border: 2px double white; padding: 15px 20px 15px 20px; color:white; cursor: pointer; font-weight: bold; text-decoration: none; transition-duration: 0.4s; width: 90px; text-align: center; display: flex; justify-content: center; align-items: center;";
  obj.innerHTML = "Next";
}

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const all = document.body;

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});


var loader = document.querySelector("#preloader");
console.log(loader);

window.addEventListener('load', vanish);

function vanish() {
  loader.classList.add("dissapear");
}