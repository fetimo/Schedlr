Schedlr.event_store = new Ext.data.TreeStore({
	model: 'Events',
	root: data,
	url: 'store.js',
	sorters: {
		property: 'text'
	},
	proxy: {
		type: 'ajax',
		reader: {
			type: 'tree',
			root: 'items'
		}
	}
});