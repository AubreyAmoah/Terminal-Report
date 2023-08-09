function updateDate() {
    // Create a new Date object to get the current date
    const currentDate = new Date();
  
    // Get the current date components
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDate();
    const dayOfWeek = currentDate.getDay()

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthName = months[month];

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = daysOfWeek[dayOfWeek];
  
    // Format the date as "YYYY-MM-DD"
    const formattedDate = `${dayName} ${day < 10 ? '0' + day : day} ${monthName} ${year}`;
  
    // Update the content of the HTML element with the current date
    document.getElementById('dateDisplay').textContent = formattedDate;
  
    // Call the updateDate function again on the next animation frame
    requestAnimationFrame(updateDate);
  }
  

function updateTime() {
    // Create a new Date object to get the current time
    const currentTime = new Date();
  
    // Get the current time components
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
  
    // Format the time with leading zeros if needed
    const formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  
    // Update the content of an HTML element with the current time
    document.getElementById('timeDisplay').textContent = formattedTime;

    requestAnimationFrame(updateTime);
  }
  

export { updateDate, updateTime}
