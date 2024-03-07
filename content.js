
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "download") {
      var table = document.querySelector('table'); 
      var rows = Array.from(table.rows); 
      var csvContent = rows.map(row => Array.from(row.cells).map(cell => cell.innerText).join(',')).join('\n');
  
      var blob = new Blob([csvContent], {type: 'text/csv'});
      var url = URL.createObjectURL(blob);
  
      // Create a link and click it to start the download
      var link = document.createElement('a');
      link.href = url;
      link.download = 'table.csv';
      link.click();
    }
  });