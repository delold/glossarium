pjs.config({ 
    // options: 'stdout', 'file' (set in config.logFile) or 'none'
    log: 'stdout',
    // options: 'json' or 'csv'
    format: 'json',
    // options: 'stdout' or 'file' (set in config.outFile)
    writer: 'file',
    outFile: 'scrape_urls.json'
});

pjs.addSuite({
	url: "http://www.wigym.cz/glossarium/",
	moreUrls: function() {
		var urls = [];

		if($(".pagetitle").length <= 0) {

			$("select[name='archive-dropdown'] option[value!='']").each(function() {
				urls.push($(this).attr("value"));
			});
		} else {
			urls = _pjs.getAnchorUrls("#pagination a:contains('«Older Entries')");
		}

		return urls;
	},
	scraper: function() {
		return _pjs.getAnchorUrls("ul.archive-list li h4 a");
	}
});