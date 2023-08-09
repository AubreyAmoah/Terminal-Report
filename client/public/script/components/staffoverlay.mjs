let staffOverlayComponent = (element) => {
    return (
        element.innerHTML = `
            <div class="form">
                <div class="flex__column">
                    <label class="form__label" for="staff_fname">First Name</label>
                    <div class="form__input--container">
                        <img class="form__input--container__logo" src="/assets/mailing.png" alt="email">
                        <input class="form__input--container__input" type="text" name="staff_fname" id="staff_fname">
                    </div>
                </div>
                
                <div class="flex__column margin__top--mini">
                    <label class="form__label" for="staff_lname">Last Name</label>
                    <div class="form__input--container">
                        <img class="form__input--container__logo" src="/assets/mailing.png" alt="email">
                        <input class="form__input--container__input" type="text" name="staff_lname" id="staff_lname">
                    </div>
                </div>
                
                <div class="flex__column margin__top--mini">
                    <label class="form__label" for="staff_mname">Middle Name (optional)</label>
                    <div class="form__input--container">
                        <img class="form__input--container__logo" src="/assets/mailing.png" alt="email">
                        <input class="form__input--container__input" type="text" name="staff_mname" id="staff_mname">
                    </div>
                </div>
            </div>
            
            <div class="form">
                <div class="flex__column">
                    <label class="form__label" for="staff_contact">Contact</label>
                    <div class="form__input--container">
                        <img class="form__input--container__logo" src="/assets/mailing.png" alt="email">
                        <input class="form__input--container__input" type="text" name="staff_contact" id="staff_contact">
                    </div>
                </div>
                
                <div class="flex__column margin__top--mini">
                    <label class="form__label" for="staff_id">Staff ID</label>
                    <div class="form__input--container">
                        <img class="form__input--container__logo" src="/assets/mailing.png" alt="email">
                        <input class="form__input--container__input" type="text" name="staff_id" id="staff_id">
                    </div>
                </div>
                
                
                
                <div class="flex__column margin__top--mini">
                    <label class="form__label" for="staff_email">Email (optional)</label>
                    <div class="form__input--container">
                        <img class="form__input--container__logo" src="/assets/mailing.png" alt="email">
                        <input class="form__input--container__input" type="text" name="staff_email" id="staff_email">
                    </div>
                </div>
            </div>
        `
    )
}

export {staffOverlayComponent}