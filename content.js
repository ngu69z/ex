// You'll need to identify the HTML elements containing the data based on the structure of your web application.
let fullName = document.getElementById('full_name').innerText;
let phoneNumber = document.getElementById('phone_number').innerText;
let postCode = document.getElementById('post_code').innerText;
let addressLine1 = document.getElementById('address_line1').innerText;
let addressLine2 = document.getElementById('address_line2').innerText;
let townCity = document.getElementById('town_city').innerText;
let county = document.getElementById('county').innerText;

// Send the extracted data back to the background script
chrome.runtime.sendMessage({
  action: "fetchOrderDetails",
  data: {
    fullName,
    phoneNumber,
    postCode,
    addressLine1,
    addressLine2,
    townCity,
    county
  }
});
