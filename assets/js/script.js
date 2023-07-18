// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var rootEl = $('#root');
var hoursEl = rootEl.children('div');
var today = dayjs();
var currentHour = dayjs().format('HH');

$(document).ready(function () {

    $('#display-time').text(today.format('dddd, MMMM D, YYYY h:mm:ss A'));
console.log(currentHour);

function Time(){
    var today = dayjs();
$('#display-time').text(today.format('dddd, MMMM D, YYYY h:mm:ss A'));
}
setInterval(Time, 1000);
});

$(".time-div").each(function () {
    var timeDiv = $(this).attr("id").split("-")[1];
    
    if (currentHour == timeDiv) {
      $(this).addClass("present");
      $(this).children(".description").addClass("white-text");
    } else if (currentHour < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (currentHour > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });

    

      // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    // look up how to get the input - input from the particular div. That is how to get the input and then save to local storage. 

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.