InnerSubListView = Backbone.View.extend({

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
	}

})
