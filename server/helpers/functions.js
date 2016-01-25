sitemap = function(){
	sitemaps.add('/sitemap.xml', function() {
		var out = [];
		out.push({page: '/',  changefreq: 'weekly',priority: 1});
		out.push({page: '/about',  changefreq: 'weekly',priority: 0.8});
		out.push({page: '/slack',  changefreq: 'weekly',priority: 0.8});
		return out;
	});
}

addhttp = function (url) {
	if (!/^(f|ht)tps?:\/\//i.test(url)) {
		url = "http://" + url;
	}
	return url;
}
