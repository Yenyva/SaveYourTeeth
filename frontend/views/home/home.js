let schedule = document.getElementById("schedule");
schedule.style.display = "none";

let medicalAppointment = document.getElementById("home-form");
medicalAppointment.style.display = "none";

let medicalAppointmentButton = document.querySelector(
  "#medical-appointment-button"
);

let scheduleButton = document.querySelector("#scheduleButton");

let closeButton = document.querySelector("#close-button");

let requestAnAppointmentButton = document.querySelector(
  "#request-an-appointment-button"
);

medicalAppointmentButton.addEventListener("click", function () {
  schedule.style.display = "none";
  medicalAppointment.style.display = "";
});

scheduleButton.addEventListener("click", function () {
  schedule.style.display = "";
  medicalAppointment.style.display = "none";
});

closeButton.addEventListener("click", function () {
  schedule.style.display = "none";
});

requestAnAppointmentButton.addEventListener("click", function (e) {
  e.preventDefault();
  medicalAppointment.style.display = "none";
});
