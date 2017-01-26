SubView = Backbone.View.extend({
	events: {
		'mouseenter .sub_3' : 'renderSubViews',
		'mouseleave .sub_3' : 'removeSubViews',
		'click .sub' : 'alertItemName'
	},

	initialize: function(){
		this.render()
	},

	render: function(){
		template = _.template($('#Template').html())
		this.$el.html(template({item: this.model, dom_id: this.model.dom_id(), category:this.model.category}))
	},

	renderSubViews: function(){
		if(this.model.get('submenu') !== null ){
			this.innerSubViews = new InnerSubListView({
				className:'innerSubViews',
				collection: new InnerSubCollection(this.model.get('submenu'))
			})
			this.$el.find('.sub_3').append(this.innerSubViews.$el);
		}
	},

	removeSubViews: function(){
		if(typeof this.innerSubViews != 'undefined'){
			this.innerSubViews.remove();
		}
	},

	alertItemName: function(e){
		title = $(e.currentTarget).text();
		alert(title);
	}
})
