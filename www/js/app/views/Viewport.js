Schedlr.views.List = new Ext.NestedList({
	id: 'list',
	title: 'Events',
	iconCls: 'calendar_add',
	layout: 'card',
	store: Schedlr.stores.event_store,
	useTitleAsBackText: false,
	toolbar: {
		items: [
			{xtype: 'spacer'},
			{xtype: 'button', ui: 'confirm', hidden: true, text:'Attend', 
				handler: function() {
					//add to list of events being attended
					console.log('clicked');
					if (Schedlr.stores.event_store.getProxy().extraParams.attending === true) {
						console.log('if start');
						
						Schedlr.stores.event_store.getProxy().extraParams.attending = false;
						
						console.log('if end');
					} else {
						console.log('else start');
						
						Schedlr.stores.event_store.getProxy().extraParams.attending = true;
						
						console.log('else end');
					}
					Schedlr.stores.event_store.read();
					
					console.log('finish');
				}
			}
		]
	},
	getDetailCard: function(item, parent) {
        var itemData = item.attributes.record.data,
		parentData = parent.attributes.record.data,
		
		detailCard = new Ext.Panel({
			scroll: 'vertical',
			styleHtmlContent: true,
			tpl: ["<h2>{text}</h2>","{info}"],
			title: 'Event'
		});
		
		if(parentData.text.length > 6){
			this.backButton.setText('Back');
		} else {
			this.backButton.setText(parentData.text);
		}
		
		//show the attend button when on leaf, hide when back button is tapped
		var interceptAndHide = function() {
			this.up('toolbar').getComponent(2).setVisible(false);
		}
		this.toolbar.getComponent(2).setVisible(true);
		this.backButton.on('tap', interceptAndHide);
		
		detailCard.update(itemData);
		return detailCard;
    }
});

var dateSelector = new Ext.SegmentedButton({
	margin: '15 0 0 0',
	items: [
		{
			text: '3/9',
			pressed: true
		},
		{
			text: '4/9'
		},
		{
			text: '5/9'
		},
		{
			text: '6/9'
		},
		{
			text: '7/9'
		}
	]
});

localStorage.setItem('person', 'sean');

Schedlr.views.Itinerary = new Ext.Panel({
	title: 'Itinerary',
	iconCls: 'calendar2',
	layout: 'vbox',
	scroll: 'vertical',
	dockedItems: [
		{
			dock: 'top',
			xtype: 'toolbar',
			ui: 'light',
			title: 'Your Itinerary'
		}
	],
	items: dateSelector	
});

Schedlr.views.Tab = new Ext.TabPanel({
	id: 'listwrapper',
	layout: 'fit',
	tabBar: {
		dock: 'bottom',
		layout: {
			pack: 'center'
		}
	},
	items: [
		Schedlr.views.Itinerary,
		Schedlr.views.List
	]
});

Schedlr.views.Viewport = Ext.extend(Ext.Panel, {
	fullscreen: true,
	layout: 'card',
	items: [Schedlr.views.Tab]
});