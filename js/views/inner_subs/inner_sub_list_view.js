InnerSubListView = Backbone.View.extend({

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
		this.$el.append(new InnerSubView({
			model: item
		}).el)
	},

	//
	// unRenderSubViews: function(){
	// 	this.subViews.remove();
	// }

})
