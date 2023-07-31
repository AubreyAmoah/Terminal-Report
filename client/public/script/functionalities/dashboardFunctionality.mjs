import { logout } from './adminLogout.mjs';
import { getTodayDay, getTodayDate, getTodayMonth, getCurrentYear, getHours, getMinutes, getSeconds } from '../essentials/logics.mjs';

const displayDashboard = () => {
    const alert = document.getElementById('alert');
    const alert_img = document.getElementById('alert_img');
    const notify = document.getElementById('notify');
    const logoutBtn = document.getElementById('logout');

    logoutBtn.addEventListener('click', () => {
        logout(alert, alert_img, notify)
    })
}

const defineDate = () => {
    const day = document.getElementById('day');
    const date = document.getElementById('date');
    const month = document.getElementById('month');
    const year = document.getElementById('year');

    getTodayDay(day);
    getTodayDate(date);
    getTodayMonth(month);
    getCurrentYear(year);

}

const defineTime = () => {
    const hour = document.getElementById('hours');
    const minute = document.getElementById('minutes');
    const second = document.getElementById('seconds');
    getHours(hour);
    getMinutes(minute);
    getSeconds(second);
}

export {displayDashboard, defineDate, defineTime}