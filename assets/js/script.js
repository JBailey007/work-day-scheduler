//variables for the dayjs function.
var rootEl = $('#root');
var hoursEl = rootEl.children('div');
var today = dayjs();
var currentHour = dayjs().format('HH');

//function to run the time on the load of the page once the document is ready.
$(document).ready(function () {
    $('#display-time').text(today.format('dddd, MMMM D, YYYY h:mm:ss A'));
function Time(){
    var today = dayjs();
$('#display-time').text(today.format('dddd, MMMM D, YYYY h:mm:ss A'));
}
setInterval(Time, 1000);
});

// function to run through each div and assign a class to each of them based on the time. 
$(".time").each(function () {
    var timeContainer = $(this).attr("id").split("-")[1];
    
    if (currentHour == timeContainer) {
      $(this).addClass("present");
    } else if (currentHour < timeContainer) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (currentHour > timeContainer) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });

// code to take the values that are input to the .timeblock class and add them to the local storage. 
$(".saveBtn").click(function (event) {
  event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);

});

//code to display the saved items back on the page after reload. 
$("#hour-09 .time-block").val(localStorage.getItem("09"));
$("#hour-10 .time-block").val(localStorage.getItem("10"));
$("#hour-11 .time-block").val(localStorage.getItem("11"));
$("#hour-12 .time-block").val(localStorage.getItem("12"));
$("#hour-13 .time-block").val(localStorage.getItem("13"));
$("#hour-14 .time-block").val(localStorage.getItem("14"));
$("#hour-15 .time-block").val(localStorage.getItem("15"));
$("#hour-16 .time-block").val(localStorage.getItem("16"));
$("#hour-17 .time-block").val(localStorage.getItem("17"));
