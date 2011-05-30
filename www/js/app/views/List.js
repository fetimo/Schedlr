Schedlr.views.List = Ext.extend(Ext.NestedList, {
	initComponent: function() {
		var eventList = new Array(); //instantiate here so it doesn't reset array on each record
		Ext.apply(this, {
			id: 'list',
			title: 'Events',
			iconCls: 'calendar_add',
			layout: 'card',
			store: Schedlr.stores.event_store,
			useTitleAsBackText: false,
			getDetailCard: function (item, parent) {
				var itemData = item.attributes.record.data,
				parentData = parent.attributes.record.data,
				detailCard = new Ext.Panel({
					scroll: 'vertical',
					styleHtmlContent: true,
					tpl: ["<h2>{text}</h2>","{info}"],
					title: 'Event'
				});
				
				// so the toolbar doesn't get cluttered, if text of previous card is too long then just say 'back' instead
				if(parentData.text.length > 6){
					this.backButton.setText('Back');
				} else {
					this.backButton.setText(parentData.text);
				}
				
				// show the attend button when on leaf, hide when back button is tapped
				var interceptAndHide = function() {
					this.up('toolbar').getComponent(2).setVisible(false);
					this.up('toolbar').getComponent(2).enable();
					this.up('toolbar').getComponent(2).un('tap', attendHandler);
				}
				this.toolbar.getComponent(2).setVisible(true);
				this.backButton.on('tap', interceptAndHide);
				
				//add event to localstorage
				var attendHandler = function() {
					eventList.push(JSON.stringify(item.attributes.record.data));
					localStorage.setItem('attending', eventList.toString());
					
					Schedlr.stores.attending_store.add(item.attributes.record.data);
					Schedlr.stores.attending_store.sort('timeStart', 'ASC');
					Schedlr.stores.attending_store.sync();
					//Schedlr.views.ItineraryList.doComponentLayout();			
					
					//disable attend button
					this.disable();
				}
				this.toolbar.getComponent(2).on('tap', attendHandler);
				
				detailCard.update(itemData);
				return detailCard;
			},
			toolbar: {
				items: [
					{xtype: 'spacer'},
					{xtype: 'button', ui: 'confirm', hidden: true, text:'Attend'}
				]
			}
		});
		Schedlr.views.List.superclass.initComponent.apply(this, arguments);
	}
});

Ext.reg('eventsList', Schedlr.views.List);