var Routers = (function(self) {
	return self;
}(Routers || {}));

Routers.Home = Backbone.Router.extend({
	
	routes: { 
		"": "index",
		"photo/:id": "photo" 
	},
	
	index: function() {
		var photos = new Collections.Photos();		
		var view = new Views.Photos({collection: photos});
		$("#home").html(view.render().el);
	},
	
	photo: function(id) {
		var photo = new Models.Photo({id: id});
		var view  = new Views.PhotoShow({model: photo});
		$('#home').html(view.render().el);
	}	
});