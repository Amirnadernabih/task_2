document.addEventListener("DOMContentLoaded", function () {
    // Get the checkbox and the select element
    const checkbox1 = document.getElementById("myCheckbox1");
    const selectElement = document.querySelector(".container:last-child select");
  
    // Add an event listener to the checkbox
    checkbox1.addEventListener("change", function () {
      // Check if the checkbox is checked
      if (checkbox1.checked) {
        // Disable all elements in the second container except for the select element
        const elementsToDisable = document.querySelectorAll(
          ".container:last-child :not(select)"
        );
        elementsToDisable.forEach((element) => {
          element.disabled = true;
        });
      } else {
        // Enable all elements in the second container
        const elementsToEnable = document.querySelectorAll(
          ".container:last-child :not(select)"
        );
        elementsToEnable.forEach((element) => {
          element.disabled = false;
        });
      }
    });
  });
  