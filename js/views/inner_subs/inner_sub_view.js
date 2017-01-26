InnerSubView = Backbone.View.extend({

	events: {
		'mouseleave .menu-item' : "removeAllViews",
		'click .menu-item' : 'alertItemName'
	},

	initialize: function(){
		this.render();
	},

	render: function(){
		template = _.template($('#Template').html())
		this.$el.html(template({item: this.model, dom_id: this.model.dom_id(), category: this.model.category}))
	},

	removeAllViews: function(){
		if($('.item_3:hover').length < 1){
			this.trigger('removeSubTabs')
		}
	},

	alertItemName: function(e){
		alert(this.model.get('title'));
		e.stopPropagation();
	}


})
