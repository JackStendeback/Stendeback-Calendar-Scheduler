// How would we make this visible on the screen on top of the calendar?
// currentDay is the ID I want to attach in order to see the date in the proper place.

// Implemented dayjs into a new variable 'currentDate' and connected that to 'currentDay' in my html
const currentDate = dayjs().format("ddd, MMM D, YYYY h:mm A");
document.getElementById("currentDay").textContent = currentDate;



// When I scroll down, I am presented with time blocks for standard business hours of 9am to 5pm.
// 'Added in HTML'
// created variable for time of day, and a variable for changing the content color.
const currentHour = dayjs().hour();
const contentColor = document.getElementById("hour-1");

// Colors for past, present, and future times.
const pastColor = 'grey';
const presentColor = 'red';
const futureColor = 'green';

// Updating color based on time during work day.


//When I view the time blocks for that day, THEN each time block is color-coded to indicate whether it is in the past, present, or future.

// When I click into a time block, THEN I can enter an event
// This is already working with bootstrap in HTML. Text can be entered, it just doesn't save to local storage just yet, or stay on page refresh.

// When I click the save button for that time block, THEN the text for that event is saved in local storage.
// How do I connect the button & text box?



// When I refresh the page, THEN the saved events persist.
