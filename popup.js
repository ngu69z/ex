chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "fetchOrderDetails") {
    const details = message.data;
    document.getElementById('details').innerHTML = `
      <p><strong>Full Name:</strong> ${details.fullName}</p>
      <p><strong>Phone Number:</strong> ${details.phoneNumber}</p>
      <p><strong>Post Code:</strong> ${details.postCode}</p>
      <p><strong>Address Line 1:</strong> ${details.addressLine1}</p>
      <p><strong>Address Line 2:</strong> ${details.addressLine2}</p>
      <p><strong>Town/City:</strong> ${details.townCity}</p>
      <p><strong>County:</strong> ${details.county}</p>
    `;
  }
});
