const root = document.getElementById('root');
let loginPage = () => {
    return (
        root.innerHTML = `
            <div id="alert" class="alert position__top--center flex__row flex__center--align hide__all">
                <img id='alert_img' class="alert__img margin__right" src="" alt="">
                <p id="notify"></p>
            </div>
            <div class="form absolute__center">
                <div class="flex__column">
                    <img class="form__img flex__center--align__self" src="/assets/login.png" alt="logo">
                </div>
                <div class="flex__column">
                    <label class="form__label" for="email">Email</label>
                    <div class="form__input--container">
                        <img class="form__input--container__logo" src="/assets/mailing.png" alt="email">
                        <input class="form__input--container__input" type="email" name="email" id="email">
                    </div>
                </div>
                <div class="flex__column margin__top--mini">
                    <label class="form__label" for="password">Password</label>
                    <div class="form__input--container">
                        <img src="/assets/padlock.png" alt="" class="form__input--container__logo">
                        <input class="form__input--container__input" type="password" name="password" id="password">
                    </div>
                </div>

                <div class="flex__row flex__between margin__top">
                    <button id="login_btn" class="form__btn" type="submit">Login</button>
                    <a class="form__link flex__center--align__self" href="">Forgot Password</a>
                </div>
                <a id="register-btn" class="form__link margin__top--mini" href="/register">Click to Sign up</a>
            </div>
        `
    )
}

export {loginPage}