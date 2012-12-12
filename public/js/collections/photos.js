var Collections = (function(self) {
	return self;
}(Collections || {}));

Collections.Photos = Backbone.Collection.extend({
	model: Models.Photo,
	url: null,
	
	parse: function(resp, xhr) {
		return resp.data
	}	
	
});