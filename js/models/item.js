Item = Backbone.Model.extend({

	dom_id: function(){
		return this.get('title').split(" ").join("_").toLowerCase();
	},
	category: 'item'

});

ItemCollection = Backbone.Collection.extend({
  model: Item
});
