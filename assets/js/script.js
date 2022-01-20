// Global Variables

// Functions

// save tasks to local storage
function saveTask() {
  console.log($(this).parent());
  const time = $(this).parent().attr("id");
  const task = $(this).siblings("textarea").val();
  localStorage.setItem(time, task);
}

// color change based on hour of the day
function timeChangeColors() {
  const now = moment().hours();
  $(".js-row").each(function () {
    const row = $(this);
    const rowHour = row.data("hour");
    console.log(rowHour);
    if (rowHour < now) {
      $(this).addClass("past");
    } else if (rowHour === now) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}

// Evenlisteners

// Show current date
$("#currentDay").text(moment().format("MMMM Do, YYYY"));

// Grab tasks from Local Storage
$("#hour9 .js-task").val(localStorage.getItem("hour9"));
$("#hour10 .js-task").val(localStorage.getItem("hour10"));
// $("#hour11 .js-task").val(localStorage.getItem("hour11"));
// $("#hour12 .js-task").val(localStorage.getItem("hour12"));
// $("#hour13 .js-task").val(localStorage.getItem("hour13"));
// $("#hour14 .js-task").val(localStorage.getItem("hour14"));
// $("#hour15 .js-task").val(localStorage.getItem("hour15"));
// $("#hour16 .js-task").val(localStorage.getItem("hour16"));

// User clicks save button
$(".js-saveBtn").on("click", saveTask);
timeChangeColors();
