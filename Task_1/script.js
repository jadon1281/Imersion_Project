document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('addButton');
    const progressBar1 = document.getElementById('progressBar1');
    const progressBar2 = document.getElementById('progressBar2');

    // Function to get the current width as a percentage
    function getProgressBarWidth(barElement) {
        const widthString = barElement.style.width;
        return parseFloat(widthString); // Converts "XX%" to XX
    }

    // Function to set the progress bar width, ensuring it stays within 0-100
    function setProgressBarWidth(barElement, newWidth) {
        if (newWidth < 0) {
            newWidth = 0;
        } else if (newWidth > 100) {
            newWidth = 100;
        }
        barElement.style.width = newWidth + '%';
    }

    // Event listener for the Add button
    addButton.addEventListener('click', () => {
        const step = 10; // Amount to increase/decrease by (e.g., 10%)

        // Get current widths
        let currentWidth1 = getProgressBarWidth(progressBar1);
        let currentWidth2 = getProgressBarWidth(progressBar2);

        // Increase the first progress bar, decrease the second one
        // You can customize this logic as needed!
        setProgressBarWidth(progressBar1, currentWidth1 + step);
        setProgressBarWidth(progressBar2, currentWidth2 - step);
    });
});