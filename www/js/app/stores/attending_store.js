Schedlr.stores.attending_store = new Ext.data.Store({
	model: 'Event',
	autoLoad: true,
	autoSave: true,
	sortOnFilter: true,
	getGroupString: function(record) {
		return record.get('timeStart');
	},
	proxy: {
		type: 'localstorage',
		id: 'attending_localstore',
		model: 'Event'
	}
});