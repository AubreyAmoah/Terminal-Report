import { loadingPage } from './loadingPage.mjs';
const root = document.getElementById('root');
let registerPage = () => {
    switch (document.readyState){
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
                <form class="form absolute__center " action="">
                    <div class="flex__column">
                        <img class="form__img--alt" src="/assets/login.png" alt="logo">
                    </div>
                    <div class="flex__column">
                        <label class="form__label" for="firstname">Firstname</label>
                        <div class="form__input--container">
                            <img class="form__input--container__logo" src="/assets/login.png" alt="firstname">
                            <input class="form__input--container__input" type="text" name="firstname" id="firstname">
                        </div>
                    </div>
                    <div class="flex__column">
                        <label class="form__label" for="lastname">Lastname</label>
                        <div class="form__input--container">
                            <img class="form__input--container__logo" src="/assets/login.png" alt="lastname">
                            <input class="form__input--container__input" type="text" name="lastname" id="lastname">
                        </div>
                    </div>
                    <div class="flex__column">
                        <label class="form__label" for="newemail">Email</label>
                        <div class="form__input--container">
                            <img class="form__input--container__logo" src="/assets/mailing.png" alt="email">
                            <input class="form__input--container__input" type="email" name="newemail" id="newemail">
                        </div>
                    </div>
                    <div class="flex__column">
                        <label class="form__label" for="newpassword">Password</label>
                        <div class="form__input--container">
                            <img src="/assets/padlock.png" alt="" class="form__input--container__logo">
                            <input class="form__input--container__input" type="password" name="newpassword" id="newpassword">
                        </div>
                    </div>
        
                    <div class="flex__column">
                        <label class="form__label" for="repeatpassword">RepeatPassword</label>
                        <div class="form__input--container">
                            <img src="/assets/padlock.png" alt="" class="form__input--container__logo">
                            <input class="form__input--container__input" type="password" name="repeatpassword" id="repeatpassword">
                        </div>
                    </div>
        
                    <div class="flex__row flex__between margin__top">
                        <button class="form__btn" type="submit">Sign up</button>
                        <a id="back-btn" class="form__link flex__center--align__self" href="">Back</a>
                    </div>
                </form>
                `
            )
        case 'complete':
            document.getElementById('back-btn').addEventListener('click', () => {
                window.location.hash = '#/';
            });
            break;
    }
}

export {registerPage}