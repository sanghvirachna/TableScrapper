chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "download") {
      var tables = document.querySelectorAll('table'); // Select all tables
      var csvContent = ""; // Initialize CSV content

      tables.forEach(function(table) {
          // Add an empty line between tables
          csvContent += "\n\n";

          // Extract data from each table
          var rows = Array.from(table.rows); 
          rows.forEach(function(row) {
              var rowData = Array.from(row.cells).map(cell => cell.innerText).join(',');
              csvContent += rowData + '\n'; // Append row data to CSV content
          });
      });

      // Create a blob with the CSV content
      var blob = new Blob([csvContent], {type: 'text/csv'});
      var url = URL.createObjectURL(blob);

      // Create a link and click it to start the download
      var link = document.createElement('a');
      link.href = url;
      link.download = 'tables.csv';
      link.click();
  }
});
