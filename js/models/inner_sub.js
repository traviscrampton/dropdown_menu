InnerSub = Backbone.Model.extend({

	dom_id: function(){
		return this.get('title').split(' ').join('_').toLowerCase();
	}
	
});

InnerSubCollection = Backbone.Collection.extend({
  model: InnerSub
});
