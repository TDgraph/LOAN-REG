let input = document.getElementsByTagName("input").length;

// Handle form submission
document
  .getElementById("loanForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const BVN = document.getElementById("BVN").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const purpose = document.getElementById("purpose").value;

    // Create payload object
    const payload = {
      name: name,
      amount: amount,
      purpose: purpose,
      email: email,
      address: address,
      BVN: BVN,
      phoneNumber: phoneNumber,
    };

    // Send payload to decision engine via POST request
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "YOUR_DECISION_ENGINE_URL", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Handle response from the decision engine
        const response = JSON.parse(xhr.responseText);

        // Process the response as needed
        console.log(response);
      }
    };
    xhr.send(JSON.stringify(payload));
  });
