const login = async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const alert = document.getElementById('alert');
    const alert_img = document.getElementById('alert_img');
    const notify = document.getElementById('notify');


    if (!email) {
        if(alert.classList.contains('hide__all')) {
            alert.classList.remove('hide__all')
        }
        alert_img.src = '../../assets/danger.png';
        notify.innerText = `You must provide an email`;
        setTimeout(() => {
            alert.classList.add('hide__all');
        }, 900);
    }

    else if (!password) {
        if(alert.classList.contains('hide__all')) {
            alert.classList.remove('hide__all')
        }
        alert_img.src = '../../assets/danger.png';
        notify.innerText = `One of the password fields is empty`;
        setTimeout(() => {
            alert.classList.add('hide__all');
        }, 900);
    }

    else {
        const data = {email, password}
    
        try {
            const response = await fetch('http://localhost:3000/api/users/admin/login',{
                method: 'POST',
                headers: { 'Content-Type':'application/json'},
                credentials: 'include',
                body: JSON.stringify(data)
            })
    
            const user = await response.json();
    
            if (response.ok) {
                if (user.success === 1){
                    if(alert.classList.contains('hide__all')) {
                        alert.classList.remove('hide__all')
                    }
                    alert_img.src = '../../assets/checked.png';
                    notify.innerText = `Login Succesful`;
                    setTimeout(() => {
                        alert.classList.add('hide__all');
                        window.location.href = '/dash'
                    }, 900);
                } else {
                    if(alert.classList.contains('hide__all')) {
                        alert.classList.remove('hide__all')
                    }
                    alert_img.src = '../../assets/danger.png';
                    notify.innerText = `${user.data}`;
                    setTimeout(() => {
                        alert.classList.add('hide__all');
                    }, 900);
                }
            } else {
                if(alert.classList.contains('hide__all')) {
                    alert.classList.remove('hide__all')
                }
                alert_img.src = '../../assets/danger.png';
                notify.innerText = `${user.data}`;
                setTimeout(() => {
                    alert.classList.add('hide__all');
                }, 900);
            }
        } catch (err) {
            if(alert.classList.contains('hide__all')) {
                alert.classList.remove('hide__all')
            }
            alert_img.src = '../../assets/danger.png';
            notify.innerText = "An error occurred. Please try again later.";
            setTimeout(() => {
                alert.classList.add('hide__all');
            }, 900);
            console.error(err);
        }
    }
}

export {login}