function akan() {
  var birthDate = document.getElementById("date").value;
  var gender = document.getElementById("gender").value;
  console.log("birthDate");
  if (!birthDate) {
    alert("You entered an invalid date.");
  }
}
var birthMonth;
birthMonth = parseInt(birthDate.slice(5, 7));
var birthDay;
birthDay = parseInt(birthDate.slice(8, 10));
var year = parseInt(birthDate.slice(0, 4));
if (birthDay <= O || birthDay > 31 || birthMonth <= 0 || birthMonth > 12) {
  alert("You entered an invalid date.");
}
var weekDays;
weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var maleNames;
maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
