const root = document.getElementById('root');
let dashboardPage = () => {
    return (
        root.innerHTML = `
        <div class="overlay hide__all" id="overlay"></div>
        <div id="alert" class="alert position__top--center flex__row flex__center--align hide__all">
            <img id='alert_img' class="alert__img margin__right" src="" alt="">
            <p id="notify"></p>
        </div>
        <div class="flex__row--responsive full__height">
            <div class="side__bar flex__ten flex__column--responsive">
                <ul class="side__bar--list full__height margin__top flex__column--responsive">
                    <li class="side__bar--list__item flex__column flex__center--align flex__center">
                        <img class="side__bar--list__item--image" src="/assets/overview-white.png" alt="overview">
                        <span class="side__bar--list__item--link">Overview</span>
                    </li>
                    <li class="side__bar--list__item flex__column flex__center--align flex__center margin__top--small" >
                        <img class="side__bar--list__item--image" src="/assets/user-white.png" alt="profile">
                        <span class="side__bar--list__item--link">Profile</span>
                    </li>
                    <li class="side__bar--list__item flex__column flex__center--align flex__center margin__top--small">
                        <img class="side__bar--list__item--image" src="/assets/setting-white.png" alt="">
                        <span href="" class="side__bar--list__item--link">Setting</span>
                    </li>

                    <li id="logout" class="side__bar--list__item flex__column flex__center--align flex__center margin__top--small">
                        <img class="side__bar--list__item--image" src="/assets/power-white.png" alt="">
                        <span class="side__bar--list__item--link">Logout</span>
                    </li>
                </ul>
            </div>
            <div class="content flex__ninety">
                <div class="navbar flex__row flex__end flex__center--align">
                    <div class="flex__row flex__end--align margin__right--small">
                        <span id="dateDisplay" class="content__text margin__right--micro"></span>
                        <span id="timeDisplay"></span>
                    </div>
                </div>
                <div class="content__navbar margin__top--mini">
                    <div class="flex__row flex__between flex__end--align">
                        <h1 class="content__heading margin__left--mini">Welcome <span id="admin_name"></span> !</h1>
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

                <div id="content" class="workspace grid__three--two margin__top--small margin__left--small margin__right--small">

                </div>
            </div>
        </div>
        `
    )
}


export {dashboardPage}