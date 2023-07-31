import {loginPage} from './components/loginPage.mjs';
import { registerPage } from './components/registerPage.mjs';
import { dashboardPage } from './components/dashboard.mjs';
import { overviewPage } from './components/overview.mjs';
import { register } from './functionalities/admnRegister.mjs';
import { login } from './functionalities/adminLogin.mjs';
import { displayDashboard, defineDate, defineTime } from './functionalities/dashboardFunctionality.mjs';
import { getAdminDetails } from './functionalities/adminGetDetails.mjs';


// Function to update the content based on the current route
function updateContent() {
    const path = window.location.pathname;

    if (path === '/') {
        loginPage();

        const loginBtn = document.getElementById('login_btn');

        loginBtn.addEventListener('click', ()=> {
            login()
        })
    } else if (path === '/register') {
        registerPage();

        const registerBtn = document.getElementById('signup_btn');

        registerBtn.addEventListener('click', ()=> {
            register()
        })


    } else if (path === '/dash') {
        dashboardPage();
        displayDashboard();
        setInterval(defineTime, 1000)
        defineDate();
        getAdminDetails();
        const content = document.getElementById('content');
        
        overviewPage(content);
    } else {
        loginPage();
    }
}

// Function to handle navigation and update content when URL changes
function handleRouting() {
    // Call updateContent initially to show the correct content for the current route
    updateContent();

    // Add a click event listener to handle navigation
    document.addEventListener('click', function (event) {
        const target = event.target;

        // Check if the clicked element is an anchor tag
        if (target.tagName.toLowerCase() === 'a') {
            event.preventDefault();

            // Update the URL without reloading the page
            const href = target.getAttribute('href');
            window.history.pushState(null, null, href);

            // Update the content based on the new route
            updateContent();
        }
    });

    // Add a popstate event listener to handle browser back/forward buttons
    window.addEventListener('popstate', function () {
        // Update the content based on the new route
        updateContent();
    });
}

// Call the routing function to set up the initial routing behavior
handleRouting();
