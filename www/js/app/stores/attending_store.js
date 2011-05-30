Schedlr.stores.attending_store = new Ext.data.Store({
	model: 'Event',
	//sortOnLoad: true,	
	//sorters: 'timeStart',
	getGroupString: function(record) {
		return record.get('timeStart');
	},
});

/*filterOnLoad: true,
filters: {
	property: 'date',
	value: 2
}*/