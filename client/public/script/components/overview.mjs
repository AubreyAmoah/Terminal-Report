let overviewPage = (element) => {
    return (
        element.innerHTML = `
            <div class="item__card" id="entities">
                <div class="flex__row flex__between">
                    <span>Total Number</span>
                    <select class="item__card--drop" name="" id="entity_choice">
                        <option class="item__card--drop__option" value="staff">Staff</option>
                        <option class="item__card--drop__option" value="program">Programmes</option>
                        <option class="item__card--drop__option" value="class">Classes</option>
                        <option class="item__card--drop__option" value="subject">Subjects</option>
                        <option class="item__card--drop__option" value="student">Students</option>
                    </select>
                </div>

                <div class="item__card--item">
                    <h1 class="item__card--item__h1">24</h1>
                </div>
            </div>
            <div class="item__card">
                <div class="flex__row flex__between">
                    <span>Settings</span>
                    <select class="item__card--drop" name="" id="">
                        <option class="item__card--drop__option" value="">Rulesets</option>
                    </select>
                </div>

                <div class="item__card--item">
                    <div class="item__card--item__container margin__top--mini">
                        <div class="flex__row flex__between margin__bottom--micro">
                            <span>Ruleset 1</span>
                            <div class="toggle">
                                <div class="toggle__body toggle__red"></div>
                                <div class="toggle__knot"></div>
                            </div>
                        </div>

                        <div class="flex__row flex__between margin__bottom--micro">
                            <span>Ruleset 2</span>
                            <div class="toggle">
                                <div class="toggle__body toggle__red"></div>
                                <div class="toggle__knot"></div>
                            </div>
                        </div>

                        <div class="flex__row flex__between margin__bottom--micro">
                            <span>Ruleset 3</span>
                            <div class="toggle">
                                <div class="toggle__body toggle__red"></div>
                                <div class="toggle__knot"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item__card">
                <div class="flex__row flex__between">
                    <span>Admin</span>
                    <select class="item__card--drop" name="" id="">
                        <option class="item__card--drop__option" value="">Admin</option>
                        <option class="item__card--drop__option" value="">Access</option>
                    </select>
                </div>

                <div class="item__card--item">
                    <div class="item__card--item__container margin__top--mini">
                        <div class="container-small flex__row margin__bottom--micro">
                            <div class="avatar margin__right--mini">
                                <img class="avatar__img" src="/assets/avatar.png" alt="">
                                <div class="avatar__status avatar__green"></div>
                            </div>
                            <div class="flex__column">
                                <span class="avatar__name">Larry</span>
                                <span class="avatar__role">Administrator</span>
                            </div>
                        </div>

                        <div class="container-small flex__row margin__bottom--micro">
                            <div class="avatar margin__right--mini">
                                <img class="avatar__img" src="/assets/avatar.png" alt="">
                                <div class="avatar__status avatar__red"></div>
                            </div>
                            <div class="flex__column">
                                <span class="avatar__name">John</span>
                                <span class="avatar__role">All Access</span>
                            </div>
                        </div>

                        <div class="container-small flex__row margin__bottom--micro">
                            <div class="avatar margin__right--mini">
                                <img class="avatar__img" src="/assets/avatar.png" alt="">
                                <div class="avatar__status avatar__green"></div>
                            </div>
                            <div class="flex__column">
                                <span class="avatar__name">Rachel</span>
                                <span class="avatar__role">Limited</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="item__card--item hide__all">
                    <div class="item__card--item__container margin__top--mini">
                        <div class="container-small flex__row margin__bottom--micro">
                            <div class="avatar margin__right--mini">
                                <img class="avatar__img" src="/assets/avatar.png" alt="">
                                <div class="avatar__status avatar__green"></div>
                            </div>
                            <div class="flex__column">
                                <span class="avatar__name">Larry</span>
                                <select class="item__card--drop" name="" id="">
                                    <option value="">All Access</option>
                                    <option value="">Limited</option>
                                </select>

                            </div>
                        </div>

                        <div class="container-small flex__row margin__bottom--micro">
                            <div class="avatar margin__right--mini">
                                <img class="avatar__img" src="/assets/avatar.png" alt="">
                                <div class="avatar__status avatar__green"></div>
                            </div>
                            <div class="flex__column">
                                <span class="avatar__name">Rachel</span>
                                <select class="item__card--drop" name="" id="">
                                    <option value="">Limited</option>
                                    <option value="">All Access</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="item__card colspan-2-3">

            </div>
            <div class="item__card">
                
            </div>
        `
    )
}

export {overviewPage}