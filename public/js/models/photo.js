var Models = (function(self) {
	return self;
}(Models || {}));

Models.Photo = Backbone.Model.extend({
	url: function() {
		return "https://api.instagram.com/v1/media/"+ this.id +"?access_token=178931551.f59def8.4c4264432d854d649fc756ab235cdd38";
	}
});