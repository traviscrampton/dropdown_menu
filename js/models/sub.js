Sub = Backbone.Model.extend({

	dom_id: function(){
		return this.get('title').split(' ').join('_').toLowerCase();
	}
});

SubCollection = Backbone.Collection.extend({
  model: Sub
});
