var weekDays;
var maleNames;
var femaleNames;
weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function akan() {
  event.preventDefault();
  var birthDate = document.getElementById("date").value;
  var gender = document.getElementById("gender").value;
  console.log("birthDate");
  if (!birthDate) {
    alert("You entered an invalid date.");
  }
  calculate();
}

function calculate() {
  event.preventDefault();
  var birthMonth;
  var birthDay;
  var year;
  var birthDate = document.getElementById("date").value;
  var gender = document.getElementById("gender").value;
  console.log("birthDate");
  if (!birthDate) {
    alert("You entered an invalid date.");
  }
  birthMonth = parseInt(birthDate.slice(5, 7));
  birthDay = parseInt(birthDate.slice(8, 10));
  year = parseInt(birthDate.slice(0, 4));
  if (birthDay <= 0 || birthDay > 31 || birthMonth <= 0 || birthMonth > 12) {
    alert("You entered an invalid date.");
  }

  let getDate = new Date(year, birthMonth - 1, birthDay);
  let dayNum = getDate.getDay();
  let dayName = weekDays[dayNum];
  console.log(dayName);
  var akanName;
  if (gender === "male") {
    akanName = maleNames[dayNum];
    document.getElementById("display").innerHTML = akanName;
    alert(akanName);
  } else if (gender === "female") {
    akanName = femaleNames[dayNum];
    document.getElementById("display").innerHTML = akanName;
  }
  // document.getElementById("display").innerHTML = akanName;
  // "Your akan name is: " + akanName + " meaning you were born on " + dayName;
}
