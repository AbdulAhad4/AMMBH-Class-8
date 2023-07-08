// Add smooth scrolling to nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
    });
    });
    })
    ;
    
    // Submit form data to log in console
    document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Name: " + document.getElementById("name").value);
    console.log("Email: " + document.getElementById("email").value);
    console.log("Message: " + document.getElementById("message").value);
    alert("Thank you for your message!");
    });