ItemListView = Backbone.View.extend({

	initialize: function () {
		this.render();
	},

	render: function(){
		this.collection.each(this.renderItem, this)
	},

	renderItem: function(item){
		this.$el.append(new ItemView({
			model: item
		}).el)
	},

	renderSubViews: function(e){
			this.subViews = new SubView({
				className:'subViews'
			})
			this.$el.find('.item_3').append(this.subViews.$el);
	}
})
