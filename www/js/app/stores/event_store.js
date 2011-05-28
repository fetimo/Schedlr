Schedlr.stores.event_store = new Ext.data.TreeStore({
	model: 'Events',
	root: data,
	storeId: 'eventStoreId',
	proxy: {
		type: 'localstorage',
		id: 'eventsAttending',
		url: 'store.js',
		reader: {
			type: 'tree',
			root: 'items'
		},
		/*sorters: {
			property: 'text',
			root: 'data'
		},
		extraParams: {
			format: 'json'
		},
		listeners: {
			exception:function(proxy, response, orientation){
				console.error('Failure Notification', response.responseText);
				Ext.Msg.alert('Loading failed', response.statusText);
			}
		}*/
	}
});

//Schedlr.stores.event_store.load();