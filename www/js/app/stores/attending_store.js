Schedlr.stores.attending_store = new Ext.data.Store({
	model: 'Event',
	proxy: {
		type: 'localstorage',
		id: 'attendingEventsStore',
		reader: {
			type: 'json',
			root: '"text"'
		},
		autoLoad: true
	},
	sorters: 'timeStart',
	getGroupString: function(record) {
		return record.get('timeStart')[0];
	},
	
	filterOnLoad: true,
	filters: {
		property: 'date',
		value: 2
	}
});