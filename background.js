chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, { action: "getCrmOwinAuth" });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getCrmOwinAuth") {
    chrome.cookies.get({
      url: "https://dynamics.com",
      name: "CrmOwinAuth"
    }, (cookie) => {
      if (cookie) {
        sendResponse({ value: cookie.value });
      } else {
        sendResponse({ error: "CrmOwinAuth cookie not found" });
      }
    });
    return true; // Indicates that the response is sent asynchronously
  }
});