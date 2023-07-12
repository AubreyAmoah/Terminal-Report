import {loginPage} from './components/loginPage.mjs';
import { registerPage } from './components/registerPage.mjs';
import { dashboardPage } from './components/dashboard.mjs';


window.addEventListener('hashchange', () => {
    switch (window.location.hash) {
        case '#/':
            loginPage();
            break;
        case '#/register':
            registerPage();
            break;
        case '#/dashboard':
            dashboardPage();
            break;
        default:
            loginPage();
    }
})

// Trigger a hashchange event to handle the initial route
window.dispatchEvent(new HashChangeEvent('hashchange'));