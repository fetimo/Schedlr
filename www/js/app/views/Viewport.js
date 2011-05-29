Schedlr.views.List = Ext.extend(Ext.NestedList, {
	initComponent: function() {
		Ext.apply(this, {
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
							console.log(this);
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
		Schedlr.views.List.superclass.initComponent.apply(this, arguments);
	}
});

Ext.reg('eventsList', Schedlr.views.List);

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

Schedlr.views.Itinerary = Ext.extend(Ext.Panel, {
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

Ext.reg('itineraryView', Schedlr.views.Itinerary);

Schedlr.views.Wrapper = new Ext.TabPanel({
	id: 'listwrapper',
	layout: 'fit',
	tabBar: {
		dock: 'bottom',
		layout: {
			pack: 'center'
		}
	},
	items: [
		{	
		  xtype: 'itineraryView'
		},
		{
		  xtype: 'eventsList'
		}
	]
});

Schedlr.views.Viewport = Ext.extend(Ext.Panel, {
	initComponent: function() {
		Ext.apply(this, {
			fullscreen: true,
			layout: 'card',
			items: [Schedlr.views.Wrapper]
		});
		Schedlr.views.Viewport.superclass.initComponent.apply(this, arguments);
	}
});