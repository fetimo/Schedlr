var EventsModel = new Ext.regModel('Event', {
	fields: [
		{name: 'text',	type: 'string'},
		{name: 'info',	type: 'string'},
		{name: 'leaf',	type: 'boolean'}
	],
	proxy: {
		type: 'ajax',
		id: 'event'
	}
});