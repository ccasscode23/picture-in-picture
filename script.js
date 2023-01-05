const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select a media stream which will pass to video element and play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(error) {
        // Catch error here
        console.log('Whoops, error. Try again', error);
    }
}

button.addEventListener('click', async () => {
    // Disable button when clicked on
    button.disabled = true;
    // Start picture-in-picture
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled = false;
});



// On Load
selectMediaStream();