// Lightbox functionality for quotes
const quoteBoxes = document.querySelectorAll('.quote-box'); // Select all quote boxes
const lightbox = document.createElement('div'); // Create lightbox container
lightbox.id = 'lightbox';
document.body.appendChild(lightbox); // Add lightbox to the body

// Create close button for the lightbox
const lightboxClose = document.createElement('div');
lightboxClose.id = 'lightbox-close';
lightboxClose.textContent = 'x'; // Close button content (e.g., 'x')
lightbox.appendChild(lightboxClose); // Add close button to lightbox

// Lightbox content area (for displaying text or images)
const lightboxContent = document.createElement('p');
lightbox.appendChild(lightboxContent); // Add content area to lightbox

// Add event listeners to each quote box for displaying quote in lightbox
quoteBoxes.forEach(box => {
    box.addEventListener('click', (e) => {
        lightboxContent.textContent = e.target.textContent; // Set lightbox content to quote text
        lightbox.style.display = 'flex'; // Display lightbox
    });
});

// Close lightbox when close button is clicked
lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none'; // Hide lightbox
});

// Close lightbox when clicking outside content area
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxContent && e.target !== lightboxClose) {
        lightbox.style.display = 'none';
    }
});

$(document).ready(function() {
    // Filter functionality for quote categories
    $('#filters button').click(function() {
        const filter = $(this).data('filter'); // Get filter category
        if (filter === 'all') {
            $('.photo').show(); // Show all photos
        } else {
            $('.photo').hide(); // Hide all photos
            $(`.photo[data-category="${filter}"]`).show(); // Show photos in selected category
        }
    });
});

// Lightbox functionality for images
const photos = document.querySelectorAll('.photo img'); // Select all images within photos
photos.forEach(photo => {
    photo.addEventListener('click', (e) => {
        const imgSrc = e.target.src; // Get image source
        lightboxContent.innerHTML = `<img src="${imgSrc}" alt="Large view" style="max-width: 90%; max-height: 90%;">`; // Set lightbox content to image
        lightbox.style.display = 'flex'; // Display lightbox
    });
});