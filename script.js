// script.js
function displaySignupModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal(event) {
    if (event.target == document.getElementById('modal') || event.target.className == 'close-button') {
        document.getElementById('modal').style.display = 'none';
    }
}

// Google Maps Initialization
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: {lat: -34.397, lng: 150.644} // Placeholder coordinates
    });
}

// Placeholder for more complex interactions
