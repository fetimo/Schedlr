var dateSelectorHandler = function() {
	Schedlr.stores.attending_store.clearFilter();
	Schedlr.stores.attending_store.filter('date', this.text);
	Schedlr.views.ItineraryList.applyEmptyText();
};

var dateSelector = new Ext.SegmentedButton({
	margin: '15 0 15 15',
	centered: true,
	cls: 'dateSelectorButton',
	defaults: {
		handler: dateSelectorHandler
	},
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

var emptyListText = (Schedlr.stores.attending_store.getCount() > 0) ? '<div class="emptyText">You have nothing planned for today.</div>' : '<div class="emptyText">Choose the events that you\'d like to attend at this year\'s Ars Electronica festival.</div>';

Schedlr.views.ItineraryList = Ext.extend(Ext.List, {
	initComponent: function() {
		Ext.apply(this, {
			store: Schedlr.stores.attending_store,
			flex: 2,
			itemTpl: '{text}<br><div class="metadata">{location}</div>',
			deferEmptyText: false,
			grouped: true,
			componentCls: 'itineraryList',
			scroll: 'vertical',
			emptyText: emptyListText
		});
		Schedlr.views.ItineraryList.superclass.initComponent.apply(this, arguments);
	}
});

Ext.reg('itineraryList', Schedlr.views.ItineraryList);

Schedlr.views.Itinerary = new Ext.Panel({
	title: 'Itinerary',
	iconCls: 'calendar2',
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
	],
	layout: {
		type: 'vbox',
		align: 'left'
	}
});