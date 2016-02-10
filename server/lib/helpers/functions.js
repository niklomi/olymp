sitemap = function(){
	sitemaps.add('/sitemap.xml', function() {
		var out = [], companies = Companies.find({}, {fields : {name_low : 1}}).fetch();
		_.each(companies, function(tmp){
			out.push({page: `/c/${tmp.name_low}/reviews`,  changefreq: 'weekly', priority: 1});
			out.push({page: `/c/${tmp.name_low}/info`,  changefreq: 'weekly', priority: 1});
			out.push({page: `/c/${tmp.name_low}/interviews`,  changefreq: 'weekly', priority: 1});
		});
		out.push({page: '/',  changefreq: 'weekly', priority: 1});
		out.push({page: '/about',  changefreq: 'weekly', priority: 0.8});
		out.push({page: '/slack',  changefreq: 'weekly', priority: 0.8});
		return out;
	});
}

addhttp = function (url) {
	if (!/^(f|ht)tps?:\/\//i.test(url)) {
		url = "http://" + url;
	}
	return url;
}

inProduction = function () {
	return process.env.NODE_ENV === "production";
};
