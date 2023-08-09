const root = document.getElementById('overlay_root');
let studentOverlayComponent = () => {
    return (
        root.innerHTML = `
            <div class="form">
                <div class="flex__column">
                    <label class="form__label" for="student_fname">First Name</label>
                    <div class="form__input--container">
                        <img class="form__input--container__logo" src="/assets/mailing.png" alt="email">
                        <input class="form__input--container__input" type="text" name="student_fname" id="student_fname">
                    </div>
                </div>

                <div class="flex__column margin__top--mini">
                    <label class="form__label" for="student_lname">Last Name</label>
                    <div class="form__input--container">
                        <img class="form__input--container__logo" src="/assets/mailing.png" alt="email">
                        <input class="form__input--container__input" type="text" name="student_lname" id="student_lname">
                    </div>
                </div>

                <div class="flex__column margin__top--mini">
                    <label class="form__label" for="student_mname">Middle Name (optional)</label>
                    <div class="form__input--container">
                        <img class="form__input--container__logo" src="/assets/mailing.png" alt="email">
                        <input class="form__input--container__input" type="text" name="student_mname" id="student_mname">
                    </div>
                </div>
            </div>

            <div class="form">
                <div class="flex__column">
                    <label class="form__label" for="student_year">Year</label>
                    <div class="form__input--container">
                        <img class="form__input--container__logo" src="/assets/mailing.png" alt="email">
                        <select class="form__input--container__input" name="student_year" id="student_year">
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                        </select>
                    </div>
                </div>

                <div class="flex__column margin__top--mini">
                    <label class="form__label" for="student_index">Index Number</label>
                    <div class="form__input--container">
                        <img class="form__input--container__logo" src="/assets/mailing.png" alt="email">
                        <input class="form__input--container__input" type="text" name="student_index" id="student_index">
                    </div>
                </div>
            </div>
        `
    )
}

export {studentOverlayComponent}