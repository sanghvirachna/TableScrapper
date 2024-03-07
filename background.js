chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "download") {
    console.log('Download action received');
    chrome.tabs.executeScript(null, {file: "content.js"});
  }
});