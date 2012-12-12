var Views = (function(self) {
	return self;
}(Views || {}));

Views.Photo = Backbone.View.extend({
	className: "photo",
	
	events: {
		"click a": "photoClicked"
	},
	
	initialize: function() {
		this.template = _.template($('#photo-template').html());
	},
	
	render: function() {
		var template = this.template({photo: this.model.toJSON()});
		this.$el.html(template);
		return this;
	},
	
	photoClicked: function(event) {
		event.preventDefault();
		app.navigate("photo/"+ this.model.get('id'), true);
	}		
	
});

Views.Photos = Backbone.View.extend({
	className: "photos",
	el: "#photos",	
	
	initialize: function() {
		this.template = _.template($("#photos-template").html());		
		this.collection.fetch({
			dataType: 'jsonp',
			success: function(collection, response) {
			}
		});
		
		this.collection.on('reset', this.addAll, this);
		this.collection.on('add', this.addOne, this);
		this.collection.on('all', this.render, this);
	},
		
	render: function() {
		return this;
	},
	
	appendOne: function(photo) {
		var view = new Views.Photo({model: photo});
		this.$('#photo-list').append(view.render().el);		
	},
	
	addAll: function(photo) {
		this.collection.each(this.appendOne);
	}	
});

Views.PhotoShow = Backbone.View.extend({
	className: "photo-show",
	el: "#photos",	
	
	initialize: function() {
		this.template = _.template($("#photo-show-template").html());
		this.model.fetch({
			dataType: 'jsonp'			
		});	
		
		this.model.on('change', this.render, this);	
	},
	
	render: function() {
		var template = this.template({photo: this.model.toJSON()});
		this.$('#photo-show').html(template);
		return this;		
	}
});

