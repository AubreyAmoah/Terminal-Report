import { loadingPage } from './loadingPage.mjs';

const root = document.getElementById('root');
let loginPage = () => {
    switch (document.readyState) {
        case 'loading':
            loadingPage();
            break;
        case 'interactive':
            return (
                root.innerHTML = `
                    <div class="alert position__top--center flex__row flex__center--align hide__all">
                        <img class="alert__img margin__right" src="" alt="">
                        <h1></h1>
                    </div>
                    <form class="form absolute__center" action="">
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
                            <button class="form__btn" type="submit">Login</button>
                            <a class="form__link flex__center--align__self" href="">Forgot Password</a>
                        </div>
                        <a id="register-btn" class="form__link margin__top--mini" href="">Click to Sign up</a>
                    </form>
                `
            )
        case 'complete':
            document.getElementById('register-btn').addEventListener('click', () => {
                window.location.href = '#/register';

            })
            break;
    }
}

export {loginPage}