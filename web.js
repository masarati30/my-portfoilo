// ---------About Me---------
var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
  for (tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab")
}
// -------nav sidemenu------
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
  sidemenu.style.right = "0";
}
function closemenu(){
  sidemenu.style.right = "-200px";
}
// ------Scroll behaviour-----
var navlinks = document.getElementsByClassName('nav-link');
var navcontent = document.getElementsByClassName('nav-content');

function scrollY(navname) {
  for (navlink of navlinks);
}

// --------contact form-------
const scriptURL = 'https://script.google.com/macros/s/AKfycbxOXHpvQcz7M-UcxykKUsDrepnfYFuIOysgeTvLr6Mbo_SGxwSW8kE7uUNNw4Gulf6W/exec'
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message sucessfully sent"
      setTimeout(function()  {
        msg.innerHTML = ""
      }, 5000);
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
