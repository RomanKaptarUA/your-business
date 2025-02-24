// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting the form.");
        event.preventDefault();
    } else {
        alert("Thank you for your message, " + name + "!");
    }
});

// Toggle Button for "Show More"
document.getElementById("toggleButton").addEventListener("click", function() {
    var moreInfoSection = document.getElementById("moreInfo");
    if (moreInfoSection.style.display === "none") {
        moreInfoSection.style.display = "block";
        this.textContent = "Show Less";
    } else {
        moreInfoSection.style.display = "none";
        this.textContent = "Show More";
    }
});

// Modal Popup
document.getElementById("openModalButton").addEventListener("click", function() {
    document.getElementById("modal").style.display = "block";
});

document.getElementById("closeModalButton").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});

window.addEventListener("click", function(event) {
    var modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Animation for "fade in" effect
window.addEventListener("scroll", function() {
    var animatedSection = document.getElementById("about");
    var sectionPosition = animatedSection.getBoundingClientRect().top;
    if (sectionPosition <= window.innerHeight) {
        animatedSection.classList.add("visible");
    }
});