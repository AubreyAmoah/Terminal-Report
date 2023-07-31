const logout = async (alert, alert_img, notify) => {
    try {
        const response = await fetch('http://localhost:3000/api/users/admin/logout',{
            method: 'GET',
            headers: { 'Accept':'application/json'},
            credentials: 'include',
        })

        // Check if the response is not successful (e.g., status code other than 2xx)
        if (!response.ok) {
            const errorMessage = await response.text(); // Get the error message as plain text
            // Handle the error, you might want to display the error message or take other actions
            if (alert.classList.contains('hide__all')) {
                alert.classList.remove('hide__all');
            }
            alert_img.src = '../../assets/danger.png';
            notify.innerText = errorMessage;
            setTimeout(() => {
                alert.classList.add('hide__all');
            }, 900);
            return; // Exit the function to prevent further processing
        }

        const user = await response.json();
        console.log(response)

        if (user.success === 1){
            if(alert.classList.contains('hide__all')) {
                alert.classList.remove('hide__all')
            }
            alert_img.src = '../../assets/checked.png';
            notify.innerText = `Logout Succesful`;
            setTimeout(() => {
                alert.classList.add('hide__all');
                window.location.pathname = '/'
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
    } catch (err) {
        if(alert.classList.contains('hide__all')) {
            alert.classList.remove('hide__all')
        }
        alert_img.src = '../../assets/danger.png';
        notify.innerText = "An error occurred. Please try again later.";
        setTimeout(() => {
            alert.classList.add('hide__all');
        }, 900);
        window.location.pathname = '/'
        console.error(err);
    }
}

export {logout}