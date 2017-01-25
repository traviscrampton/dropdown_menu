BaseView = Backbone.View.extend({

	initialize: function(){
		this.setUpEvents();
		this.prepareTemplates();
		this.render();
	},

	setUpEvents(){
		this.listenTo(SubSubView.prototype, 'removeSubTabs', this.render)
	},

	prepareTemplates: function(){
		itemTemplate = _.template($('#part_1_full_navigation').html())
		subTemplate = _.template($('#subviews').html())
		subSubTemplate = _.template($('#subsubViews').html())
	},

	render: function(){
		new ItemView({
			el:'#navigation'
		})
	}


})
