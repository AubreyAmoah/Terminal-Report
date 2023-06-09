import { loadingPage } from './loadingPage.mjs';
import { overviewPage } from './overview.mjs';

const root = document.getElementById('root');
let dashboardPage = () => {
    switch (document.readyState) {
        case 'loading':
            loadingPage();
            break;
        case 'interactive':
            return (
                root.innerHTML = `
                    <div class="flex__row--responsive full__height">
                        <div class="side__bar flex__ten flex__column--responsive">
                            <ul class="side__bar--list full__height margin__top flex__column--responsive">
                                <li class="side__bar--list__item flex__column flex__center--align flex__center">
                                    <img class="side__bar--list__item--image" src="/assets/overview-white.png" alt="overview">
                                    <a href="" class="side__bar--list__item--link">Overview</a>
                                </li>
                                <li class="side__bar--list__item flex__column flex__center--align flex__center margin__top--small" >
                                    <img class="side__bar--list__item--image" src="/assets/user-white.png" alt="profile">
                                    <a href="" class="side__bar--list__item--link">Profile</a>
                                </li>
                                <li class="side__bar--list__item flex__column flex__center--align flex__center margin__top--small">
                                    <img class="side__bar--list__item--image" src="/assets/setting-white.png" alt="">
                                    <a href="" class="side__bar--list__item--link">Setting</a>
                                </li>
                
                                <li class="side__bar--list__item flex__column flex__center--align flex__center margin__top--small">
                                    <img class="side__bar--list__item--image" src="/assets/power-white.png" alt="">
                                    <a href="" class="side__bar--list__item--link">Logout</a>
                                </li>
                            </ul>
                        </div>
                        <div class="content flex__ninety">
                            <div class="navbar flex__row flex__end flex__center--align">
                                <div class="flex__row flex__end--align margin__right--small">
                                    <span class="content__text">Friday</span>
                                    <span class="content__text">,</span>
                                    <span class="content__text margin__right--micro">15</span>
                                    <span class="content__text margin__right--micro">January</span>
                                    <span class="content__text margin__right--micro">2023</span>
                                    <span class="content__text--bold">10:45 AM</span>
                                </div>
                            </div>
                            <div class="content__navbar margin__top--mini">
                                <div class="flex__row flex__between flex__end--align">
                                    <h1 class="margin__left--mini">Welcome <span>Larry</span> !</h1>
                                    <div class="flex__row flex__end--align margin__right--mini">
                                        <div class="notification margin__right--big">
                                            <div class="notification__count">0</div>
                                            <img class="content__icon" src="/assets/notification-alt.png" alt="notification">
                                        </div>
                                        <img class="content__icon margin__right--mini" src="/assets/cloudy.png" alt="weather">
                                        <span class="content__text">24&deg;C</span>
                                    </div>
                                </div>
                
                            </div>
                
                            <div id="content" class="grid__three--two margin__top--small margin__left--small margin__right--small">
                                
                            </div>
                        </div>
                    </div>
                `
            )
        case 'complete':
            document.getElementById('register-btn').addEventListener('click', () => {
                window.location.href = '#/register';
            })

            let content = document.getElementById('content');

            overviewPage(content);

            // window.addEventListener('popstate', () => {
            //     switch (window.location.pathname) {
            //         case '#/dasboard/overview':
            //             overviewPage();
            //             break;
            //         default:
            //             overviewPage();
            //     }
            // })

            // window.addEventListener('hashchange', () => {
            //     switch (window.location.hash) {
            //         case '#/dasboard/overview':
            //             overviewPage(content);
            //             break;
            //         default:
            //             overviewPage(content);
            //     }
            // })
            
            // // Trigger a hashchange event to handle the initial route
            // window.dispatchEvent(new HashChangeEvent('hashchange'));
            // break;
    }
}

export {dashboardPage}