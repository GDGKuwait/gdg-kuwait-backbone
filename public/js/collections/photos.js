var Collections = (function(self) {
	return self;
}(Collections || {}));

Collections.Photos = Backbone.Collection.extend({
	model: Models.Photo,
	url: "https://api.instagram.com/v1/media/popular?access_token=178931551.f59def8.4c4264432d854d649fc756ab235cdd38",
	
	parse: function(resp, xhr) {
		return resp.data
	}	
	
});