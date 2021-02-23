function akan() {
  var birthDate = document.getElementById("date").value;
  var gender = document.getElementById("gender").value;
  console.log("birthDate");
  if (!birthDate) {
    alert("You entered an invalid date.");
  }

  var birthMonth;
  var birthDay;
  var year;

  birthMonth = parseInt(birthDate.slice(5, 7));
  birthDay = parseInt(birthDate.slice(8, 10));
  year = parseInt(birthDate.slice(0, 4));
  if (birthDay <= O || birthDay > 31 || birthMonth <= 0 || birthMonth > 12) {
    alert("You entered an invalid date.");
  }
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

  let getDate = new Date(year, birthMonth - 1, birthDay);
  let dayNum = getDate.getDay();
  let dayName = weekDays[dayNum];
  console.log(dayName);

  var akanName;
  if (gender === "male") {
    akanName = maleNames[dayNum];
  } else {
    akanName = femaleNames[day];
  }
  document.getElementById("output").innerHTML =
    "Your akan name is: " + akanName + " meaning you were born on " + dayName;
}
