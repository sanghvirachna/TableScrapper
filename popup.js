document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('download').addEventListener('click', function() {
    console.log('Button clicked');
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "download"});
    });
  });
});