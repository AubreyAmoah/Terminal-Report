const root = document.getElementById('overlay_root');
let subjectOverlayComponent = () => {
    return (
        root.innerHTML = `
            <div class="form" id="subjects">
                <div class="flex__column">
                    <label class="form__label" for="subject_name">Subject Name</label>
                    <div class="form__input--container">
                        <img class="form__input--container__logo" src="/assets/mailing.png" alt="email">
                        <input class="form__input--container__input" type="text" name="subject_name" id="subject_name">
                    </div>
                </div>

                <div class="flex__column margin__top--mini">
                    <label class="form__label" for="subject_code">Subject Code</label>
                    <div class="form__input--container">
                        <img class="form__input--container__logo" src="/assets/mailing.png" alt="email">
                        <input class="form__input--container__input" type="text" name="subject_code" id="subject_code">
                    </div>
                </div>

                <div class="flex__column margin__top--mini">
                    <label class="form__label" for="subject_type">Subject Type</label>
                    <div class="form__input--container">
                        <img class="form__input--container__logo" src="/assets/mailing.png" alt="email">
                        <select class="form__input--container__input" name="subject_type" id="subject_type">
                            <option value="">Core</option>
                            <option value="">Elective</option>
                        </select>
                    </div>
                </div>
            </div>
        `
    )
}

export {subjectOverlayComponent}