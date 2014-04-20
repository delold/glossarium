pjs.config({ 
    // options: 'stdout', 'file' (set in config.logFile) or 'none'
    log: 'stdout',
    // options: 'json' or 'csv'
    format: 'json',
    // options: 'stdout' or 'file' (set in config.outFile)
    writer: 'file',
    outFile: 'scrape_data.json'
});


var fs = require('fs');

if(fs.isFile("scrape_urls.json")) {

	var links = JSON.parse(fs.open("scrape_urls.json", "r").readLine());
	
	pjs.addSuite({
		url: links,
		scraper: function() {
			var metadata = _pjs.$(".postmetadata").text().split(" • ");

			var obj = {
				"name": _pjs.$(".posttitle").text(),
				"date": metadata[0],
				"author": metadata[1],
				"categories": metadata[2].replace("rubrika ", "").split(","),
				"content": _pjs.$(".entry").html()
			};

			console.log(obj);

			return obj;
		}
	});

}