let overlayComponent = (element) => {
    return (
        element.innerHTML = `
        <div class="overlay__item">
            <button id="overlay_close" class="overlay__item--close-btn">&times;</button>
            <button class="overlay__item--save-btn">Save</button>
            <select class="overlay__item--option" name="" id="overlay_choice">
                <option value="staff">Staff</option>
                <option value="student">Student</option>
                <option value="program">Programme</option>
                <option value="class">Classes</option>
                <option value="subject">Subjects</option>
            </select>
            <div id="overlay_root" class="overlay__item--container">
            
            </div>
        </div>  
        `
    )
}

export {overlayComponent}