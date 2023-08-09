import {loginPage} from './components/loginPage.mjs';
import { registerPage } from './components/registerPage.mjs';
import { dashboardPage } from './components/dashboard.mjs';
import { overviewPage } from './components/overview.mjs';
import { NotFoundPage } from './components/404.mjs';
import { register } from './functionalities/admnRegister.mjs';
import { login } from './functionalities/adminLogin.mjs';
import { updateTime, updateDate } from './essentials/logics.mjs';
import { displayDashboard } from './functionalities/dashboardFunctionality.mjs';
import { getAdminDetails } from './functionalities/adminGetDetails.mjs';
import { overlayComponent } from './components/overlay.mjs';
import { staffOverlayComponent } from './components/staffoverlay.mjs';


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
        // setInterval(updateTime, 1000);
        updateTime();
        updateDate();
        getAdminDetails();
        const content = document.getElementById('content');
        
        overviewPage(content);

        const entityChoice = document.getElementById('entity_choice');
        const entity = document.getElementById('entities');
        const overlay = document.getElementById('overlay');

        

        entity.addEventListener('click', () => {

            overlay.classList.remove('hide__all');
            overlayComponent(overlay);

            const overlayClose = document.getElementById('overlay_close');
            overlayClose.addEventListener('click', () => {
    
    
                overlay.classList.add('hide_all');
            })

            const overlayRoot = document.getElementById('overlay_root');

            console.log(entityChoice.value)

            if (entityChoice.value === 'staff') {
                staffOverlayComponent(overlayRoot);
            }

        })
    } else {
        NotFoundPage();
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
