
const register = async() => {

    const email = document.getElementById('newemail').value;
    const password = document.getElementById('newpassword').value;
    const password_repeat = document.getElementById('repeatpassword').value;
    const first_name = document.getElementById('firstname').value;
    const last_name = document.getElementById('lastname').value;
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

    else if (!password_repeat) {
        if(alert.classList.contains('hide__all')) {
            alert.classList.remove('hide__all')
        }
        alert_img.src = '../../assets/danger.png';
        notify.innerText = `One of the password fields is empty`;
        setTimeout(() => {
            alert.classList.add('hide__all');
        }, 900);
    }

    else if (!first_name) {
        if(alert.classList.contains('hide__all')) {
            alert.classList.remove('hide__all')
        }
        alert_img.src = '../../assets/danger.png';
        notify.innerText = `kindly provide a First name`;
        setTimeout(() => {
            alert.classList.add('hide__all');
        }, 900);
    }

    else if (!last_name) {
        if(alert.classList.contains('hide__all')) {
            alert.classList.remove('hide__all')
        }
        alert_img.src = '../../assets/danger.png';
        notify.innerText = `kindly provide a Last name`;
        setTimeout(() => {
            alert.classList.add('hide__all');
        }, 900);
    }
    
    else if (password !== password_repeat) {
            
        if(alert.classList.contains('hide__all')) {
                alert.classList.remove('hide__all')
            }
            alert_img.src = '../../assets/danger.png';
            notify.innerText = `Passwords do not Match`;
            setTimeout(() => {
                alert.classList.add('hide__all');
            }, 900);
    }

    else {
        const data = {email, password, password_repeat, first_name, last_name}
    
        try {
            const response = await fetch('http://localhost:3000/api/users/admin/register',{
                method: 'POST',
                headers: { 'Content-Type':'application/json'},
                // credentials: 'include',
                body: JSON.stringify(data)
            })
    
            const user = await response.json();
    
            if (response.ok) {
                if(alert.classList.contains('hide__all')) {
                    alert.classList.remove('hide__all')
                }
                alert_img.src = '../../assets/checked.png';
                notify.innerText = `User Succesfully Registered`;
                setTimeout(() => {
                    alert.classList.add('hide__all');
                    window.location.href = '/'
                }, 900);
            } else {
                if(alert.classList.contains('hide__all')) {
                    alert.classList.remove('hide__all')
                }
                alert_img.src = '../../assets/danger.png';
                notify.innerText = `${user.message}`;
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

export {register};