const getAdminDetails = async() => {
    const adminName = document.getElementById('admin_name');

    try {
        const response = await fetch('http://localhost:3000/api/users/admin/get/details',{
            method: 'GET',
            headers: { 'Accept':'application/json', Authentication: 'Bearer {token}' },
            credentials: 'include'
        })

        // Check if the response is not successful (e.g., status code other than 2xx)
        if (!response.ok) {
            // Handle the error, you might want to display the error message or take other actions
            adminName.innerText = `err name`;

            return; // Exit the function to prevent further processing
        }

        const user = await response.json();

        console.log(user);

        adminName.innerText = `${user.results.first_name}`;
    } catch (err) {
        adminName.innerText = "Server Down";
        console.error(err);
    }
}

export {getAdminDetails}