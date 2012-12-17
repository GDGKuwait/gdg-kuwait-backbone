Views.Photos = Backbone.View.extend({
	className: "photos",
	initialize: function() {
		this.template = _.template($("#photos-template").html());		
		this.collection.fetch({
			dataType: 'jsonp',
			success: function(collection, response) {
			}
		});
		
		this.collection.on('reset', this.addAll, this);
		this.collection.on('add', this.addOne, this);
	},
		
	render: function() {
		var template = this.template();
		this.$el.html(template);		
		return this;
	},
	
	appendOne: function(photo) {
		var view = new Views.Photo({model: photo});
		this.$('.photo-list').append(view.render().el);		
	},
	
	addAll: function(photo) {
		this.collection.each(this.appendOne);		
	}	
});

