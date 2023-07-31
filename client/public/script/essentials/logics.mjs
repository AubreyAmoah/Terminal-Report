

const date = new Date();

function getTodayDate(element){
    const todayDate = date.getDate();
    element.innerText = todayDate;
}

function getTodayDay(element){
    const dayOfWeek = date.getDay();

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday']

    const dayName = daysOfWeek[dayOfWeek];

    element.innerText = dayName;
}

function getTodayMonth(element){
    const month = date.getMonth();

    const months = ['January', 'February', 'March', 'April','May','June','July', 'August', 'September', 'October', 'November', 'December'];

    const monthName = months[month];

    element.innerText = monthName;
}

function getCurrentYear(element){
    const currentYear = date.getFullYear();
    element.innerText = currentYear;
}

function getHours(element){
    const hours = date.getHours();
    element.innerText = hours;
}

function getMinutes(element){
    const minutes = date.getMinutes();
    element.innerText = minutes;
}

function getSeconds(element){
    const seconds = date.getSeconds();
    element.innerText = seconds;
}

export {getTodayDate, getTodayDay, getTodayMonth, getCurrentYear, getHours, getMinutes, getSeconds}
