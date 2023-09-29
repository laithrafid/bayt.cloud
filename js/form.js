document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Clear the input and textarea fields
    document.getElementById("inputField").value = "";
    document.getElementById("textareaField").value = "";
  });
  