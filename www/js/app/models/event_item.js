var EventsModel = new Ext.regModel('Event', {
	fields: [
		{name: 'text',		type: 'string'},
		{name: 'info',		type: 'string'},
		{name: 'id',		type: 'int'},
		{name: 'attend',	type: 'boolean',	defaultValue: 'false'}
	],
	proxy: {
		type: 'localstorage',
		id: 'event'
	}
});