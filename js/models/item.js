Item = Backbone.Model.extend({

	dom_id: function(){
		return this.get('title').split(" ").join("_").toLowerCase();
	}
});

ItemCollection = Backbone.Collection.extend({
  model: Item
});
