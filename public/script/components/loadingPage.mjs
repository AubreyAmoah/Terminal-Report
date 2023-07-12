const root = document.getElementById('root');
let loadingPage = () => {
    return (
        root.innerHTML = `
            <img class="absolute__center" src="/assets/login.png" alt="logo">
        `
    )
}

export {loadingPage}