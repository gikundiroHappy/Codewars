function getCurrentDayAndTime() {
  var currentDate = new Date();
  var currentDay = currentDate.getDay();
  console.log("Today is: ", currentDay);
}

getCurrentDayAndTime();
