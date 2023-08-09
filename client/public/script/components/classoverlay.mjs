const root = document.getElementById('overlay_root');
let classOverlayComponent = () => {
    return (
        root.innerHTML = `
            <div class="form" id="classes">
                <div class="flex__column">
                    <label class="form__label" for="class_name">Class Name</label>
                    <div class="form__input--container">
                        <img class="form__input--container__logo" src="/assets/mailing.png" alt="email">
                        <input class="form__input--container__input" type="text" name="class_name" id="class_name">
                    </div>
                </div>

                <div class="flex__column margin__top--mini">
                    <label class="form__label" for="short_name">Program</label>
                    <div class="form__input--container">
                        <img class="form__input--container__logo" src="/assets/mailing.png" alt="email">
                        <select class="form__input--container__input" name="short_name" id="short_name">
                            <option value=""></option>
                        </select>
                    </div>
                </div>
            </div>
        `
    )
}

export {classOverlayComponent}