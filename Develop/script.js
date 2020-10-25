//VARIABLE DECLARTION
var currentDate = document.getElementById("currentDay");
var timeSlots = document.getElementById("containerId");
var saveButton = document.getElementsByClassName(".saveBtn");

var time = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

//FETCH API

var date = document.createElement("h3");
var time = document.createElement("p");
date.textContent = moment().format("dddd, MMMM Do YYYY");
time.textContent = moment().hours() + ":" + moment().minute();

currentDate.append(date, time);

//CREATING TIMESLOTS
function createTimeSlots() {
  for (var i = 0; i < time.length; i++) {
    var timeList = document.createElement("div");

    timeList.textContent = time[i];
    timeSlots.appendChild(timeList);
  }
}

//EVENTS
$(".saveBtn").on("click", function () {
  //   console.log($(this).siblings(".text").val());
  //   console.log($(this).parent().attr("id"));
  var eventText = document.querySelector(".text").value;

  if (eventText === "") {
    alert("Event text cannot be blank");
  } else {
    alert("Event Saved");
    var saveText = localStorage.getItem(".text");
    var saveTime = localStorage.getItem(".time");
  }

  localStorage.setItem(".time", eventText);
  $(".textContent").text = saveText;
});
//key and value to local storage

// function saveEvent() {
//   var saveText = localStorage.getItem(".text");
//   var saveTime = localStorage.getItem(".time");
// }

//ENTRY POINT
// createTimeSlots();
// getApi();
// saveEvent();
