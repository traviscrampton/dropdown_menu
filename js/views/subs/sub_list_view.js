SubListView = Backbone.View.extend({

	// events: {
	// 	'mouseenter .item' : 'renderSubViews',
	// 	'mouseleave .item' : 'unRenderSubViews'
	// },

	initialize: function () {
		this.render();
	},

	render: function(){
		this.collection.each(this.renderSub, this)
	},

	renderSub: function(item){
		this.$el.append(new SubView({
			model: item
		}).el)
	},

	renderSubViews: function(e){
			this.subViews = new SubView({
				className:'subViews'
			})
			this.$el.find('.item_3').append(this.subViews.$el);
	}
	//
	// unRenderSubViews: function(){
	// 	this.subViews.remove();
	// }

})
