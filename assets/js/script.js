document.addEventListener('DOMContentLoaded', function () {
    // Select each dropdown button and content
    const languageButton = document.querySelector('.language-button');
    const languageContent = document.querySelector('.language-content');
    const signButton = document.querySelector('.sign-button');
    const signContent = document.querySelector('.sign-content');

    // Handle language dropdown
    languageButton.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default action

        // Toggle visibility of the language dropdown content
        if (languageContent.style.display === 'block') {
            languageContent.style.display = 'none';
            document.body.classList.remove('dropdown-active'); // Enable scrolling again
        } else {
            languageContent.style.display = 'block';
            document.body.classList.add('dropdown-active'); // Prevent scrolling
        }
    });

    // Handle sign in/join dropdown
    signButton.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default action

        // Toggle visibility of the sign dropdown content
        if (signContent.style.display === 'block') {
            signContent.style.display = 'none';
            document.body.classList.remove('dropdown-active'); // Enable scrolling again
        } else {
            signContent.style.display = 'block';
            document.body.classList.add('dropdown-active'); // Prevent scrolling
        }
    });

    // Hide dropdowns when clicking outside of them
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.language-button') && languageContent.style.display === 'block') {
            languageContent.style.display = 'none';
            document.body.classList.remove('dropdown-active'); // Enable scrolling
        }
        if (!e.target.closest('.sign-button') && signContent.style.display === 'block') {
            signContent.style.display = 'none';
            document.body.classList.remove('dropdown-active'); // Enable scrolling
        }
    });
});



function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const body = document.body;

    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-5000px'; // Hide sidebar
        body.style.overflow = 'auto'; // Enable scrolling
    } else {
        sidebar.style.left = '0px'; // Show sidebar
        body.style.overflow = 'hidden'; // Disable scrolling
    }
}


// Correct the selector to target the down-header
const header = document.querySelector('.down-header');

// Function to handle scroll events
function handleScroll() {
    if (window.scrollY > 50) { // Adjust this value as needed
        header.classList.add('show-header');
    } else {
        header.classList.remove('show-header');
    }
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check to ensure correct header state on page load
handleScroll();


const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderItems = document.querySelectorAll('.slider-wrapper > div');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 1; // Start with the first original item
const totalItems = sliderItems.length;

// Function to update slider position
function updateSlider(instant = false) {
    const offset = -currentIndex * (sliderItems[0].clientWidth + 20); // Includes margin in offset
    sliderWrapper.style.transition = instant ? 'none' : 'transform 0.5s ease-in-out';
    sliderWrapper.style.transform = `translateX(${offset}px)`;
}

// Event listeners for buttons
nextButton.addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    }

    updateSlider();

    // If at the duplicate of the first image, reset to the first real image
    if (currentIndex === totalItems - 1) {
        setTimeout(() => {
            currentIndex = 1;
            updateSlider(true); // Instantly jump to the first real image
        }, 500);
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    }

    updateSlider();

    // If at the duplicate of the last image, reset to the last real image
    if (currentIndex === 0) {
        setTimeout(() => {
            currentIndex = totalItems - 2;
            updateSlider(true); // Instantly jump to the last real image
        }, 500);
    }
});

// Initialize slider
updateSlider();


document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.querySelector('.slides-container');
    const slides = document.querySelectorAll('.slide');
    const prevButton2 = document.querySelector('.prev2');
    const nextButton2 = document.querySelector('.next2');
    const numericIndicator = document.querySelector('.numeric-indicator');
    
    let currentIndex2 = 0;
    const totalSlides = slides.length;

    // Function to update the slider and indicator
    function updateSlider2() {
        showSlide(currentIndex2);
        updateIndicator();
    }

    // Function to show the current slide
    function showSlide(index) {
        const offset = -index * (65); // Adjust offset to show current, next, and previous slides
        slidesContainer.style.transform = `translateX(${offset}%)`;
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    // Function to update the numeric indicator
    function updateIndicator() {
        numericIndicator.textContent = `${currentIndex2 + 1}   /   ${totalSlides}`;
    }

    // Event listeners for navigation buttons
    nextButton2.addEventListener('click', () => {
        currentIndex2 = (currentIndex2 + 1) % totalSlides; // Loop back to the first slide
        updateSlider2();
    });

    prevButton2.addEventListener('click', () => {
        currentIndex2 = (currentIndex2 - 1 + totalSlides) % totalSlides; // Loop back to the last slide
        updateSlider2();
    });

    // Initialize the slider and numeric indicator
    updateSlider2();
});
document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer2 = document.querySelector('.resortation-images');
    const slides2 = document.querySelectorAll('.resortation-images img');
    const prevButton3 = document.querySelector('.prev3');
    const nextButton3 = document.querySelector('.next3');
    const numericIndicator = document.querySelector('.numeric-indicator2');
    const changableWriting = document.querySelector('.changable-writing');
    const changableTitle = document.querySelector('.changable-title');
    
    let currentIndex3 = 0;
    const totalSlides2 = slides2.length;
    
    const texts = [
        "Our room service is convenient for early risers, late lunches, and dinners. From snacks to full meals, we offer the dishes of your choice served in the private atmosphere of your room.",
        "Relax in our Winter Garden, a vibrant open space dedicated to socializing with friends and business meetings, located in our beautiful lobby. Free your senses with classic cocktails and regional delicacies such as Bastelas, Kemia, and Mezze.",
        "Discover an open kitchen concept in the Moorish and Andalusian setting of the Palmette restaurant, which celebrates Algerian and Mediterranean classics reimagined in an authentic way."
    ];
    
    const titles = [
        "Room service",
        "Bar Palmet",
        "Palmet Restaurant"
    ];

    function updateSlider3() {
        showSlide2(currentIndex3);
        updateIndicator2();
        updateTitle();
        updateText();
    }

    function showSlide2(index) {
        const offset = 0; // Adjusting to 100% of the container plus the gap of 50px
        slidesContainer2.style.transform = `translateX(${offset}%)`;
        slides2.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function updateIndicator2() {
        numericIndicator.textContent = `${currentIndex3 + 1} / ${totalSlides2}`;
    }

    function updateTitle() {
        changableTitle.textContent = titles[currentIndex3];
    }

    function updateText() {
        changableWriting.textContent = texts[currentIndex3];
    }

    nextButton3.addEventListener('click', () => {
        currentIndex3 = (currentIndex3 + 1) % totalSlides2;
        updateSlider3();
    });

    prevButton3.addEventListener('click', () => {
        currentIndex3 = (currentIndex3 - 1 + totalSlides2) % totalSlides2;
        updateSlider3();
    });

    updateSlider3();
});



const gallery = document.querySelector('.Gallery-pics');
const images = document.querySelectorAll('.Gallery-pics img');
const prevButton4 = document.getElementById('prevButton');
const nextButton4 = document.getElementById('nextButton');

let currentIndex4 = 1; // Start at 1 because of the cloned image at the beginning
const imageWidth = images[1].offsetWidth + 40; // Image width + gap

// Scroll to the first image (skip the cloned last image at the beginning)
gallery.scrollTo({
    left: currentIndex4 * imageWidth,
    behavior: 'auto' // Jump directly to the first image
});

function scrollNext() {
    currentIndex4++;
    gallery.scrollTo({
        left: currentIndex4 * imageWidth,
        behavior: 'smooth'
    });

    // If we reach the clone of the first image (the last image in the array)
    if (currentIndex4 >= images.length - 1) {
        // Jump back to the original first image (index 1) after the animation completes
        setTimeout(() => {
            currentIndex4 = 1;
            gallery.scrollTo({
                left: currentIndex4 * imageWidth,
                behavior: 'auto'
            });
        }, 300); // Delay to let the smooth scroll finish
    }
}

function scrollPrev() {
    currentIndex4--;
    gallery.scrollTo({
        left: currentIndex4 * imageWidth,
        behavior: 'smooth'
    });

    // If we reach the clone of the last image (the first image in the array)
    if (currentIndex4 <= 0) {
        // Jump back to the original last image (index 5) after the animation completes
        setTimeout(() => {
            currentIndex4 = images.length - 2; // Last original image index
            gallery.scrollTo({
                left: currentIndex4 * imageWidth,
                behavior: 'auto'
            });
        }, 300); // Delay to let the smooth scroll finish
    }
}

nextButton4.addEventListener('click', scrollNext);
prevButton4.addEventListener('click', scrollPrev);
