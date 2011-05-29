Schedlr.stores.attending_store = new Ext.data.Store({
	model: 'Event',
	//root: data,
	//storeId: 'attendingEventsStore',
	proxy: {
		type: 'ajax',
		url: 'dynamic_store.js',
		reader: {
			type: 'json',
			root: 'items'
		},
		autoLoad: true
	}
});