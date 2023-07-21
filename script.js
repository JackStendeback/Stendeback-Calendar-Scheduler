console.log(dayjs()); 
// How would we make this visible on the screen on top of the calendar?
// currentDay is the ID I want to attach in order to see the date in the proper place.

// Implemented dayjs into a new variable 'currentDate' and connected that to 'currentDay' in my html
const currentDate = dayjs().format("MMMM DD YYYY");
document.getElementById("currentDay").textContent = currentDate;

// When I scroll down, I am presented with time blocks for standard business hours of 9am to 5pm.
