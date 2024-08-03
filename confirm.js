window.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");

    yesButton.onclick = () => {
        window.electronAPI.continueInBackground();
    }

    noButton.onclick = () => {
        window.electronAPI.quitApp();
    }
});
