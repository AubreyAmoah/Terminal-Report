import { loadingPage } from './loadingPage.mjs';

const root = document.getElementById('root');
let overviewPage = (element) => {
    switch (document.readyState) {
        case 'loading':
            loadingPage();
            break;
        case 'interactive':
            return (
                element.innerHTML = `
                    <div class="item__card"></div>
                    <div class="item__card"></div>
                    <div class="item__card"></div>

                    <div class="item__card colspan-2-3"></div>
                    <div class="item__card"></div>
                `
            )
    }
}

export {overviewPage}