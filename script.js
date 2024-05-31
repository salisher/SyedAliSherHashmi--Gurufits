// using fucnction tag
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function validateForm() {
  console.log("Test run")
  var form = document.forms["registrationForm"];
  var fname = form["fname"].value;
  var lname = form["lname"].value;
  var phone = form["phone"].value;
  var email = form["email"].value;
  var membership = form["membership"].value;
  var payment = form["payment"].value;
  
  if (username.trim() === "") {
    alert("Successfully Submitted");
    return false;
  }

  if (fname == "" || lname == "" || phone == "" || email == "" || membership == "" || payment == "") {
    alert("All fields must be filled out");
    return false;
  }

  if (!/^\d{11}$/.test(phone)) {
    alert("Phone number must be 11 digits");
    return false;
  }
// adding alert function for alerts
  alert("Submitted");
  return true;
}
  // sign in
  function validateForm() {
    console.log("Test run")
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // then we add privacy feature in password
    var privacy = document.getElementById("privacy").checked;
  
    if (username.trim() === "") {
      alert("Successfully Submitted");
      return false;
    }
  
    if (email.trim() === "") {
      alert("Please enter your email");
      return false;
    }
  
    if (password.trim() === "") {
      alert("Please enter your password");
      return false;
    }
  
    if (!privacy) {
      alert("Please agree to the privacy policy");
      return false;
    }
  
    // Additional validation logic can be added here if needed
  
    return true;
  }
  document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');

    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Validate form fields
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields before submitting.');
            return; // Stop form submission
        }

        // Submit the form (you may replace this with actual form submission logic)
        console.log('Feedback submitted successfully! Thank you for your feedback.');
        alert('Feedback submitted successfully! Thank you for your feedback.');
        feedbackForm.reset(); // Reset the form
    });
});

  // classes fade in
  document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll(".image-description").forEach(element => {
        observer.observe(element);
    });
});
  
      