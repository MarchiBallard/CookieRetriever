document.addEventListener('DOMContentLoaded', () => {
  const cookieValueElement = document.getElementById('cookie-value');
  const retrieveButton = document.getElementById('retrieve-button');

  retrieveButton.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: "getCrmOwinAuth" }, (response) => {
      if (response.value) {
        cookieValueElement.textContent = `CrmOwinAuth: ${response.value}`;
      } else {
        cookieValueElement.textContent = response.error || "An error occurred";
      }
    });
  });
});