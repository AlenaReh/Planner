//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist
//desription cannot be blank if statement

// reference to important DOM elements
var timeDisplayEl = $('#time-display');
var saveBtn = document.querySelector(".saveBtn");
var eventDescription = document.querySelector(".description");

// handle displaying the time
function displayTime() {
  var rightNow = moment().format('dddd MMM Mo, YYYY [at] kk:mm:ss a');
  timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);

//variables for linking my rows to current time
var currentTime = Number.parseInt(moment().format("kk:mm"));
  //$('.hour').text(currentTime);
  /*
var fiveAm = Number.parseInt($("#5am").text());
var sixAm = Number.parseInt($("#6am").text());
var sevenAm = Number.parseInt($("#7am").text());
var eightAm = Number.parseInt($("#8am").text());
var nineAm = Number.parseInt($("#9am").text());
var tenAm = Number.parseInt($("#10am").text());
var elevenAm = Number.parseInt($("#11am").text());
var twelveAm = Number.parseInt($("#12pm").text());
var onePm = Number.parseInt($("#1pm").text());
var twoPm = Number.parseInt($("#2pm").text());
var threePm = Number.parseInt($("#3pm").text());
var fourPm = Number.parseInt($("#4pm").text());
var fivePm = Number.parseInt($("#5pm").text());
var sixPm = Number.parseInt($("#6pm").text());
var sevenPm = Number.parseInt($("#7pm").text());
var eightPm = Number.parseInt($("#8pm").text());
var ninePm = Number.parseInt($("#9pm").text());

// Color Coding for past events
if (currentTime > fiveAm) {
  $("#event-5am").removeClass("present future").addClass("past");
}
if (currentTime > sixAm) {
  $("#event-6am").removeClass("present future").addClass("past");
}
if (currentTime > sevenAm) {
  $("#event-7am").removeClass("present future").addClass("past");
}
if (currentTime > eightAm) {
  $("#event-8am").removeClass("present future").addClass("past");
}
if (currentTime > nineAm) {
  $("#event-9am").removeClass("present future").addClass("past");
}
if (currentTime > tenAm) {
  $("#event-10am").removeClass("present future").addClass("past");
}
if (currentTime > elevenAm) {
  $("#event-11am").removeClass("present future").addClass("past");
}
if (currentTime > twelveAm) {
  $("#event-12pm").removeClass("present future").addClass("past");
}
if (currentTime > onePm) {
  $("#event-1pm").removeClass("present future").addClass("past");
}
if (currentTime > twoPm) {
  $("#event-2pm").removeClass("present future").addClass("past");
}
if (currentTime > threePm) {
  $("#event-3pm").removeClass("present future").addClass("past");
}
if (currentTime > fourPm) {
  $("#event-4pm").removeClass("present future").addClass("past");
}
if (currentTime > fivePm) {
  $("#event-5pm").removeClass("present future").addClass("past");
}
if (currentTime > sixPm) {
  $("#event-6pm").removeClass("present future").addClass("past");
}
if (currentTime > sevenPm) {
  $("#event-7pm").removeClass("present future").addClass("past");
}
if (currentTime > eightPm) {
  $("#event-8pm").removeClass("present future").addClass("past");
}
if (currentTime > ninePm) {
  $("#event-9pm").removeClass("present future").addClass("past");
}

// Color Coding for present events
if (currentTime === fiveAm) {
  $("#event-5am").removeClass("past future").addClass("present");
}
if (currentTime === sixAm) {
  $("#event-6am").removeClass("past future").addClass("present");
}
if (currentTime === sevenAm) {
  $("#event-7am").removeClass("past future").addClass("present");
}
if (currentTime === eightAm) {
  $("#event-8am").removeClass("past future").addClass("present");
}
if (currentTime === nineAm) {
  $("#event-9am").removeClass("past future").addClass("present");
}
if (currentTime === tenAm) {
  $("#event-10am").removeClass("past future").addClass("present");
}
if (currentTime === elevenAm) {
  $("#event-11am").removeClass("past future").addClass("present");
}
if (currentTime === twelveAm) {
  $("#event-12pm").removeClass("past future").addClass("present");
}
if (currentTime === onePm) {
  $("#event-1pm").removeClass("past future").addClass("present");
}
if (currentTime === twoPm) {
  $("#event-2pm").removeClass("past future").addClass("present");
}
if (currentTime === threePm) {
  $("#event-3pm").removeClass("past future").addClass("present");
}
if (currentTime === fourPm) {
  $("#event-4pm").removeClass("past future").addClass("present");
}
if (currentTime === fivePm) {
  $("#event-5pm").removeClass("past future").addClass("present");
}
if (currentTime === sixPm) {
  $("#event-6pm").removeClass("past future").addClass("present");
}
if (currentTime === sevenPm) {
  $("#event-7pm").removeClass("past future").addClass("present");
}
if (currentTime === eightPm) {
  $("#event-8pm").removeClass("past future").addClass("present");
}
if (currentTime === ninePm) {
  $("#event-9pm").removeClass("past future").addClass("present");
}

// Color Coding for future events
if (currentTime < fiveAm) {
  $("#event-5am").removeClass("present past").addClass("future");
}
if (currentTime < sixAm) {
  $("#event-6am").removeClass("present past").addClass("future");
}
if (currentTime < sevenAm) {
  $("#event-7am").removeClass("present past").addClass("future");
}
if (currentTime < eightAm) {
  $("#event-8am").removeClass("present past").addClass("future");
}
if (currentTime < nineAm) {
  $("#event-9am").removeClass("present past").addClass("future");
}
if (currentTime < tenAm) {
  $("#event-10am").removeClass("present past").addClass("future");
}
if (currentTime < elevenAm) {
  $("#event-11am").removeClass("present past").addClass("future");
}
if (currentTime < twelveAm) {
  $("#event-12pm").removeClass("present past").addClass("future");
}
if (currentTime < onePm) {
  $("#event-1pm").removeClass("present past").addClass("future");
}
if (currentTime < twoPm) {
  $("#event-2pm").removeClass("present past").addClass("future");
}
if (currentTime < threePm) {
  $("#event-3pm").removeClass("present past").addClass("future");
}
if (currentTime < fourPm) {
  $("#event-4pm").removeClass("present past").addClass("future");
}
if (currentTime < fivePm) {
  $("#event-5pm").removeClass("present past").addClass("future");
}
if (currentTime < sixPm) {
  $("#event-6pm").removeClass("present past").addClass("future");
}
if (currentTime < sevenPm) {
  $("#event-7pm").removeClass("present past").addClass("future");
}
if (currentTime < eightPm) {
  $("#event-8pm").removeClass("present past").addClass("future");
}
if (currentTime < ninePm) {
  $("#event-9pm").removeClass("present past").addClass("future");
}
*/

//Local Storage function
function saveEventDescription (e){
  e.preventDefault();
  console.log("I was clicked", e.target);
  ////// look up .each in jQuery
  eventDescription = $(this).siblings(".description").val();
  var time = $(this).siblings(".hour").attr("id");
  console.log("eventDescription", eventDescription, time);
  //Store
  localStorage.setItem(time, eventDescription);
  // if (getDescription === "") {
  //   alert("Please type in the event description before you submit it");
  // }
}
//On click event
$('.saveBtn').on('click', saveEventDescription);
//Retrieve
// document.querySelector(".description").innerHTML = localStorage.getItem("eventDescription");

//Retrieve All DAta

// .each works similar for loop 
$(".time-block").each(function(){
  var hour = parseInt($(this).children(".hour").attr("id"));
  console.log("time", hour, "current time", currentTime); 
  console.log("description", localStorage.getItem(hour)); 
  $(this).children(".description").val(localStorage.getItem(hour)); 

  //Background color changed
  if(hour < currentTime){
    $(this).removeClass("present future");
    $(this).addClass("past");
  }else if ( hour === currentTime){
    $(this).removeClass("past future");
    $(this).addClass("present");

  }else{
    $(this).removeClass("past present");
    $(this).addClass("future");
  }
})