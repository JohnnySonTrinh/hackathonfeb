document.addEventListener('DOMContentLoaded', () => {
    const startSwipeButton = document.getElementById('start-swipe');
    const leftButton = document.getElementById('left-button');
    const rightButton = document.getElementById('right-button');
    const cardTeam = document.querySelector('.card-team');
    const swipeGroup = document.querySelector('.swipe-group');
    const profilePictureCard = document.querySelector('.big-card[data-image="profilePicture"]');
    const loveLetterCard = document.querySelector('.big-card[data-image="loveLetter"]');
    const loveStuffCard = document.querySelector('.big-card[data-image="loveStuff"]');
    const aboutCard = document.querySelector('.big-card[data-image="aboutCard"]');

    startSwipeButton.addEventListener('click', () => {
        // Display left and right buttons
        leftButton.style.display = 'inline-block';
        rightButton.style.display = 'inline-block';
        swipeGroup.style.display = 'inline-block';
        
        // Hide the card group
        cardTeam.style.display = 'none';
        
        // Change the background image of the profilePicture card
        profilePictureCard.style.backgroundImage = "url('assets/images/picturePicture1.png')";
        loveLetterCard.style.backgroundImage = "url('assets/images/loveLetter1.png')";
        loveStuffCard.style.backgroundImage = "url('assets/images/loveStuff1.png')";
        aboutCard.style.backgroundImage = "url('assets/images/aboutCard1.png')";
        
        // Optionally, hide the start-swipe button after clicking
        startSwipeButton.style.display = 'none';
    });
});


profilePictures = ['picturePicture1.png', 'picturePicture2.png', 'picturePicture3.png', 'picturePicture4.png', 'picturePicture5.png', 'picturePicture6.png'];
loveLetters = ['loveLetter1.png', 'loveLetter2.png', 'loveLetter3.png', 'loveLetter4.png', 'loveLetter5.png', 'loveLetter6.png'];
loveStuffs = ['loveStuff1.png', 'loveStuff2.png', 'loveStuff3.png', 'loveStuff4.png', 'loveStuff5.png', 'loveStuff6.png'];
aboutCards = ['aboutCard1.png', 'aboutCard2.png', 'aboutCard3.png', 'aboutCard4.png', 'aboutCard5.png', 'aboutCard6.png'];


document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0; // Starting index for the images

    const updateImages = (direction) => {
        // Calculate new index based on direction
        if (direction === 'right') {
            currentIndex = (currentIndex + 1) % profilePictures.length; // Loop back to 0 if at the end
        } else if (direction === 'left') {
            currentIndex = (currentIndex - 1 + profilePictures.length) % profilePictures.length; // Loop back to the last if at the beginning
        }

        // Update images for each card
        document.querySelector('.big-card[data-image="profilePicture"]').style.backgroundImage = `url('assets/images/${profilePictures[currentIndex]}')`;
        document.querySelector('.big-card[data-image="loveLetter"]').style.backgroundImage = `url('assets/images/${loveLetters[currentIndex]}')`;
        document.querySelector('.big-card[data-image="loveStuff"]').style.backgroundImage = `url('assets/images/${loveStuffs[currentIndex]}')`;
        document.querySelector('.big-card[data-image="aboutCard"]').style.backgroundImage = `url('assets/images/${aboutCards[currentIndex]}')`;
    };

    document.getElementById('left-button').addEventListener('click', () => updateImages('left'));
    document.getElementById('right-button').addEventListener('click', () => updateImages('right'));
});

