document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const thankYou = document.getElementById("thankYouMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent normal form submission

      const formData = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      })
        .then(response => {
          if (response.ok) {
            form.style.display = "none";
            thankYou.style.display = "block";
          } else {
            alert("Oops! There was a problem submitting your form.");
          }
        })
        .catch(error => {
          alert("Something went wrong. Please try again later.");
        });
    });
  }
});
