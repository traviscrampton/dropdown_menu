ItemView = Backbone.View.extend({

	events: {
		'mouseenter .item_3' : 'renderSubViews',
		'mouseleave .item_3' : 'unRenderSubViews'
	},

	initialize: function () {
		this.render();
	},

	render: function(){
		this.$el.html(itemTemplate)
	},

	renderSubViews: function(e){
			this.subViews = new SubView({
				className:'subViews'
			})
			this.$el.find('.item_3').append(this.subViews.$el);
	},

	unRenderSubViews: function(){
		this.subViews.remove();
	}

})
