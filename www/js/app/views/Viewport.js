Schedlr.views.Wrapper = new Ext.TabPanel({
	id: 'listwrapper',
	layout: 'fit',
	tabBar: {
		dock: 'bottom',
		layout: {
			pack: 'center'
		}
	},
	items: [
		Schedlr.views.Itinerary,
		{
		  xtype: 'eventsList'
		}
	]
});

Schedlr.views.Viewport = Ext.extend(Ext.Panel, {
	initComponent: function() {
		Ext.apply(this, {
			fullscreen: true,
			layout: 'card',
			items: [Schedlr.views.Wrapper]
		});
		Schedlr.views.Viewport.superclass.initComponent.apply(this, arguments);
	}
});