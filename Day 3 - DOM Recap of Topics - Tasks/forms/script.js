document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('survey-form');
    const tableBody = document.getElementById('tableBody');
    const clearFormButton = document.getElementById("clear-form");
    const clearTableButton = document.getElementById("clear-table");

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Retrieve form values
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const address = document.getElementById('address').value;
        const pincode = document.getElementById('pincode').value;
        const gender = document.querySelector('input[name="group"]:checked').value;
        const foodOptions = document.getElementById('food').selectedOptions;
        const state = document.getElementById('state').value;
        const country = document.getElementById('country').value;

        // Validate food selection
        if (foodOptions.length < 2) {
            alert('Please select at least two food options.');
            return;
        }
        // Retrieve selected food options
        const foodValues = [];
        for (const option of foodOptions) {
            foodValues.push(option.value);
        }

        // Create table row
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${address}</td>
            <td>${pincode}</td>
            <td>${gender}</td>
            <td>${foodValues.join(', ')}</td>
            <td>${state}</td>
            <td>${country}</td>
        `;

        // Append row to table body
        tableBody.appendChild(newRow);

        // Clear form fields
        clearFormButton.addEventListener("click", function() {
            clearForm();
          });
        
          clearTableButton.addEventListener("click", function() {
            tableBody.innerHTML = "";
          });
        
          function clearForm() {
            form.reset();
          }
    });
});
