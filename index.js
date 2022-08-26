//DEPENDENCIES
import Contact from "./Contact.js";

// CONSTANTS
const contactForm = document.getElementById("contactForm");
const formInfo = document.getElementById("formInfo");
const experiences = document.getElementsByClassName("experience");

// FUNCTIONS
function showMessage (msg) {
  formInfo.innerHTML = "<p>" + msg + "</p>";
}

function clearMessage () {
  formInfo.innerHTML = "";
}

// LOGIC
let hasJob = true;
if (hasJob) {
  // I have a job
  showMessage("Thank your visitin. I am currently employed.");
} else {
  // I need a job
  showMessage("Please look around. I am looking for a position.");
}

let today = new Date(); //Date("08/27/2022");
let dayOfWeek = today.getDay();
if (dayOfWeek === 0 || dayOfWeek === 6){
  showMessage("Happy Weekend!");
}

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const contact = new Contact(contactForm);
    contact.send();
});

for (let x = 0; x < experiences.length; x++) {
  const item = experiences[x];
  item.addEventListener("mouseenter", function (event) {
    event.target.style = "background-color: #ededf5;";
  });
  item.addEventListener("mouseleave", function (event) {
    event.target.style = "";
  });
}
