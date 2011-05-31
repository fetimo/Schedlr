var EventsModel = new Ext.regModel('Event', {
	fields: [
		{name: 'text',			type: 'string'},
		{name: 'info',			type: 'string'},
		{name: 'date',			type: 'string'},
		{name: 'timeStart',		type: 'string'},
		{name: 'timeFinish',	type: 'int'},
		{name: 'location',		type: 'string'},
		{name: 'leaf',			type: 'boolean'}
	],
	proxy: {
		type: 'ajax',
		id: 'event'
	}
});