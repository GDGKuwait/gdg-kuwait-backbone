$(document).ready(function() {
	window.app = new Routers.Home();
	Backbone.history.start({pushState: true})		
});