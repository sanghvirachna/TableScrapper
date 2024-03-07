chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "download") {
      var tables = document.querySelectorAll('table'); 
      var csvContent = '';

      tables.forEach(function(table) {
          var rows = Array.from(table.rows); 
          csvContent += rows.map(row => Array.from(row.cells).map(cell => cell.innerText).join(',')).join('\n');
          csvContent += '\n'; // Add a newline to separate different tables
      });

      var blob = new Blob([csvContent], {type: 'text/csv'});
      var url = URL.createObjectURL(blob);

      // Create a link and click it to start the download
      var link = document.createElement('a');
      link.href = url;
      link.download = 'tables.csv';
      link.click();
  }
});