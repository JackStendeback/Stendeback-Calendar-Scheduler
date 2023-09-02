const currentDay = document.getElementById('current-day');


function checkHour() {
    const currentHour = dayjs().hour();
    const textAreaBackgrounds = document.querySelectorAll('.time-block');

    textAreaBackgrounds.forEach((textAreaBackground) => {
        const timeBlockHour = parseInt(textAreaBackground.id.split('-')[1]);
        const textArea = textAreaBackground.querySelector('.text-area-bg');

        const savedText = localStorage.getItem(`hour-${timeBlockHour}`);
        if (savedText) {
            textArea.value = savedText;
        }

        if (currentHour === timeBlockHour) {
            textArea.classList.add('current');
            textArea.classList.remove('past', 'future');
        } else if (currentHour > timeBlockHour) {
            textArea.classList.add('past');
            textArea.classList.remove('current', 'future');
        } else {
            textArea.classList.add('future');
            textArea.classList.remove('current', 'past');
        }
    });
}

checkHour();
setInterval(checkHour, 60 * 1000);

function updateDateTime() {
    const currentDateTime = dayjs().format('dddd, MMMM D, YYYY h:mm A');
    const currentDayElement = document.getElementById('current-day');
    currentDayElement.innerText = currentDateTime;
}

function saveText(hour) {
    const textArea = document.querySelector(`#hour-${hour} .text-area-bg`);
    const text = textArea.value;
    localStorage.setItem(`hour-${hour}`, text);
}

document.querySelectorAll('.saveBtn').forEach((button) => {
    button.addEventListener('click', (event) => {
        const hour = event.target.closest('.time-block').id.split('-')[1];
        saveText(hour);
    });
});

updateDateTime();


