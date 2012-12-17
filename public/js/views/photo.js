var Views = (function(self) {
	return self;
}(Views || {}));

Views.PhotoShow = Backbone.View.extend({
	initialize: function() {
		this.template = _.template($("#photo-show-template").html());
		// this.model.fetch({
		// 	dataType: 'jsonp'			
		// });	
		// 
		// this.model.on('change', this.render, this);	
	},
	
	render: function() {
		// var template = this.template({photo: this.model.toJSON()});
		// this.$('#photo-show').html(template);
		return this;		
	}
});

Views.PhotoSlider = Backbone.View.extend({
	className: 'slider',
	initialize: function() {
		this.template = _.template($("#photo-slider-template").html());
		this.model.fetch({
			dataType: 'jsonp'			
		});	
		
		this.model.on('change', this.render, this);	
	},
	
	render: function() {
		var template = this.template({photo: this.model.toJSON()});
		this.$el.html(template);
		return this;		
	}
});


Views.Photo = Backbone.View.extend({
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
		var view = new Views.PhotoSlider({model: this.model});
		$('.photo-slider').html(view.render().el);
	}		
	
});

