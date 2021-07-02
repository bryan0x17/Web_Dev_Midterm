const images = [
    'photos/img1.jpg',
    'photos/img2.jpg',
    'photos/img3.jpg',
    'photos/img4.jpg',
    'photos/img5.jpg',
    'photos/img6.jpg',
    'photos/img7.jpg',
    'photos/img8.jpg'
];

const imgCaptions = [
    'A secluded lake in the backcountry',
    'A relaxing day at the beach',
    'Breathtaking roads',
    'Early evening on the water',
    'The city of love',
    'See the sights together',
    'Float away',
    'Explore the great forests'
];

const imgDuration = 3000;
const fadeDuration = 1000;

const imgNode = document.getElementById('slides');
const captionNode = document.getElementById('slideCaption');

let imgIndex = 0;

// Image transitions and fade don't quite line up for the first go through - possibly slow browser or performance issues related to loading the images for the first time (large files)
function changeSlides() {
    // Set the image and caption according to the index
    imgNode.src = images[imgIndex];
    captionNode.textContent = imgCaptions[imgIndex];
    // Clear the fade from the img
    imgNode.className = '';
    // Set a timeout to start the fade 2 seconds after the new image is displayed
    setTimeout(function() {imgNode.className = 'fade';}, imgDuration - fadeDuration);
    imgIndex = (imgIndex + 1) % images.length;
}

setInterval(changeSlides, imgDuration);
changeSlides();