Schedlr.stores.event_store = new Ext.data.TreeStore({
	model: 'Event',
	root: data,
	storeId: 'eventStore',
	proxy: {
		type: 'localstorage',
		id: 'eventStore',
		reader: {
			type: 'tree',
			root: 'items'
		},
		autoLoad: true,
		autoSave: true
	}
});