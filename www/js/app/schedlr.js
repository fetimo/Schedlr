//founded on the example given in the Sencha Touch docs on Nested Lists

Ext.regApplication({
	name: 'Schedlr',
	launch: function() {
		this.views.viewport = new this.views.Viewport();
		Schedlr.stores.attending_store.filter('date', dateSelector.pressedButton.text);
	}
});