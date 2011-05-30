Schedlr.stores.attending_store = new Ext.data.Store({
	model: 'Event',
	//root: data,
	proxy: {
		type: 'localstorage',
		url: 'dynamic_store.js',
		id: 'attendingEventsStore',
		reader: {
			type: 'json',
			root: '"text"'
		},
		autoLoad: true
	}
});