SubSubView = Backbone.View.extend({

	events: {
		'mouseout #subz_subz' : "removeAllViews"
	},

	initialize: function(){
		this.render();
	},

	render: function(){
		this.$el.append(subSubTemplate)
	},

	removeAllViews: function(){
		if($('.item_3:hover').length < 1){
			this.trigger('removeSubTabs')
		}
	}
})
