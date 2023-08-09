const root = document.getElementById('overlay_root');
let programOverlayComponent = () => {
    return (
        root.innerHTML = `
            <div class="form" id="programme">
                <div class="flex__column">
                    <label class="form__label" for="programme_name">Programme Name</label>
                    <div class="form__input--container">
                        <img class="form__input--container__logo" src="/assets/mailing.png" alt="email">
                        <input class="form__input--container__input" type="text" name="programme_name" id="programme_name">
                    </div>
                </div>

                <div class="flex__column margin__top--mini">
                    <label class="form__label" for="short_name">Short Name</label>
                    <div class="form__input--container">
                        <img class="form__input--container__logo" src="/assets/mailing.png" alt="email">
                        <input class="form__input--container__input" type="text" name="short_name" id="short_name">
                    </div>
                </div>
            </div>
        `
    )
}

export {programOverlayComponent}