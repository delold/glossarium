pjs.config({ log:'stdout', format:'json', writer:'file', outFile:'scrape_data.json'});

var fs = require('fs');

if(fs.isFile("scrape_urls.json")) {

	var links = JSON.parse(fs.open("scrape_urls.json", "r").readLine());
	
	pjs.addSuite({
		url: links,
		scraper: function() {
			var metadata = _pjs.$(".postmetadata").text().split(" • "),
					date = metadata[0].split("/");

			_pjs.$(".fblike").remove(); //FB? tfuj.
			date[2] = "20"+date[2];

			return {
				"name": _pjs.$(".posttitle").text(),
				"date": date.join("."),
				"author": {"name": metadata[1], "url": _pjs.getAnchorUrls("a[rel=author]")[0]},
				"categories": metadata[2].replace("rubrika ", "").split(","),
				"content": _pjs.$(".entry").html().trim(),
				"tags": _pjs.getText("a[rel=tag]")
			};
		}
	});
}