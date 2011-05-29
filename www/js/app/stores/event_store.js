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