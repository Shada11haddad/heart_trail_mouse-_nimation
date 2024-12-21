const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
    const xPos = event.pageX; // Get the mouse X position
    const yPos = event.pageY; // Get the mouse Y position

    const spanEl = document.createElement("span");
    spanEl.style.position = "absolute";
    spanEl.style.left = `${xPos}px`; // Set the X position of the heart
    spanEl.style.top = `${yPos}px`;  // Set the Y position of the heart

    // Generate a random size for the heart
    const size = Math.random() * 90 + 10; // Random size between 10px and 100px
    spanEl.style.width = `${size}px`;
    spanEl.style.height = `${size}px`;

    // Add a background image or color for the heart
    spanEl.style.background = "url('https://cdn2.iconfinder.com/data/icons/free-1/128/Love__heart_like-1024.png')";
    spanEl.style.backgroundSize = "cover";
    spanEl.style.borderRadius = "50%"; // Optional: Adjust shape

    bodyEl.appendChild(spanEl); // Add the heart to the body

    // Remove the heart after 3 seconds
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
});
