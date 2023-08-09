import { logout } from './adminLogout.mjs';

const displayDashboard = () => {
    const alert = document.getElementById('alert');
    const alert_img = document.getElementById('alert_img');
    const notify = document.getElementById('notify');
    const logoutBtn = document.getElementById('logout');

    logoutBtn.addEventListener('click', () => {
        logout(alert, alert_img, notify)
    })
}

export {displayDashboard}