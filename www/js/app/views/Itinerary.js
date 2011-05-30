var dateSelector = new Ext.SegmentedButton({
	margin: '15 0 15 0',
	items: [
		{
			text: '2/9',
			pressed: true
		},
		{
			text: '3/9'
		},
		{
			text: '4/9'
		},
		{
			text: '5/9'
		},
		{
			text: '6/9'
		},
		{
			text: '7/9'
		}
	]
});

Schedlr.views.ItineraryList = Ext.extend(Ext.List, {
	initComponent: function() {
		Ext.apply(this, {
			store: Schedlr.stores.attending_store,
			itemTpl: '{text}',
			deferEmptyText: false,
			grouped: true,
			//onItemDisclosure: true,
			scroll: 'vertical',
			emptyText: '<div class="emptyText">Choose the events that you\'d like to attend at this year\'s Ars Electronica festival.</div>',
			height: 290,
			width: 300
		});
		Schedlr.views.ItineraryList.superclass.initComponent.apply(this, arguments);
	}
});

Ext.reg('itineraryList', Schedlr.views.ItineraryList);

Schedlr.views.Itinerary = new Ext.Panel({
	title: 'Itinerary',
	iconCls: 'calendar2',
	layout: 'vbox',
	dockedItems: [
		{
			dock: 'top',
			xtype: 'toolbar',
			ui: 'light',
			title: 'Your Itinerary'
		}
	],
	items: [
		dateSelector,
		{xtype: 'itineraryList'}
	]
});