// JavaScript to trigger the ripple effect on click
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function(e) {
        // Get the dimensions of the card
        const rect = card.getBoundingClientRect();
        const ripple = document.createElement('div'); // Create a new div for the ripple

        // Get mouse position relative to the card
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Set up the ripple style
        const size = Math.max(card.offsetWidth, card.offsetHeight);
        const rippleX = x - size / 2; // Center the ripple at the mouse click point
        const rippleY = y - size / 2;

        // Apply styles to the ripple
        ripple.style.width = size + 'px';
        ripple.style.height = size + 'px';
        ripple.style.left = rippleX + 'px';
        ripple.style.top = rippleY + 'px';
        ripple.classList.add('ripple');

        // Add the ripple element to the card
        card.appendChild(ripple);

        // After the ripple animation, remove the element from the DOM
        setTimeout(() => {
            ripple.remove();
        }, 600); // Duration of the animation
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var productModal = document.getElementById('productModal');
    $('#productModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); 
        var img = button.data('img');
        var title = button.data('title');
        var desc = button.data('desc');
        $('#modalProductImg').attr('src', img);
        $('#productModalLabel').text(title);
        $('#modalProductDesc').text(desc);
    });
});

