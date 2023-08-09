const root = document.getElementById('root');
let NotFoundPage = () => {
    return (
        root.innerHTML = `
            <div id="alert" class="alert position__top--center flex__row flex__center--align hide__all">
                <img id='alert_img' class="alert__img margin__right" src="" alt="">
                <p id="notify"></p>
            </div>
            <div class="absolute__center">
                <h1>Not Found</h1>
            </div>
        `
    )
}

export {NotFoundPage}