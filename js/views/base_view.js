BaseView = Backbone.View.extend({

	initialize: function(){
		this.setUpEvents();
		this.render();
	},

	setUpEvents(){
		this.listenTo(InnerSubView.prototype, 'removeSubTabs', this.removeSubViews)
	},

	removeSubViews: function() {
		this.itemList.remove();
		this.render();
	},

	render: function(){
		this.itemList = new ItemListView({
			className:'itemViews',
			collection: new ItemCollection(MENU)
		})

		$('#navigation').append(this.itemList.$el)
	}
})
