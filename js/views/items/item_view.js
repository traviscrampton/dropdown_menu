ItemView = Backbone.View.extend({
	events: {
		'mouseenter .item_3' : 'renderSubViews',
		'mouseleave .item_3' : 'removeSubViews',
		'click .item' : 'alertItemName'
	},

	initialize: function(){
		this.render()
	},

	render: function(){
		itemTemplate = _.template($('#Template').html())
		this.$el.html(itemTemplate({item: this.model, dom_id: this.model.dom_id(), category: this.model.category}))
	},

	renderSubViews: function(){
		if(this.model.get('submenu') !== null ){
			this.subViews = new SubListView({
				className:'subViews',
				collection: new SubCollection(this.model.get('submenu'))
			})
			this.$el.find('.item_3').append(this.subViews.$el);
		}
	},

	removeSubViews: function(){
		if(typeof this.subViews != 'undefined'){
			this.subViews.remove();
		}
	},

	alertItemName: function(e){
		title = this.model.get('title')
		alert(title);
	}
})
