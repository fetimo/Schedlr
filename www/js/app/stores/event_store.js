Schedlr.stores.event_store = new Ext.data.TreeStore({
	model: 'Events',
	root: data,
	storeId: 'eventStoreId',
	sorters: {
		property: 'text'
	},
	proxy: {
		type: 'ajax',
		url: 'store.js',
		reader: {
			type: 'tree',
			root: 'items'
		},
		extraParams: {
			format: 'json'
		},
		listeners: {
			exception:function(proxy, response, orientation){
				console.error('Failure Notification', response.responseText);
				Ext.Msg.alert('Loading failed', response.statusText);
			}
		}
	}
});