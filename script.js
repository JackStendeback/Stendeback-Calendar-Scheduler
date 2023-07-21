console.log(dayjs()); 
// How would we make this visible on the screen on top of the calendar?
// currentDay is the ID I want to attach in order to see the date in the proper place.

// Implemented dayjs into a new variable 'currentDate' and connected that to 'currentDay' in my html
const currentDate = dayjs().format("MMMM DD YYYY");
document.getElementById("currentDay").textContent = currentDate;

// When I scroll down, I am presented with time blocks for standard business hours of 9am to 5pm.
// 'Added in HTML'

//When I view the time blocks for that day, THEN each time block is color-coded to indicate whether it is in the past, present, or future.

// When I click into a time block, THEN I can enter an event
// This is already working with bootstrap in HTML. Text can be entered, it just doesn't save to local storage just yet, or stay on page refresh.

// When I click the save button for that time block, THEN the text for that event is saved in local storage.


// When I refresh the page, THEN the saved events persist.
