Schedlr.views.List = Ext.extend(Ext.NestedList, {
    
    id: 'list',
    title: 'Events',
    iconCls: 'calendar_add',
    layout: 'card',
    useTitleAsBackText: false,
    
    initComponent: function() {
        Ext.apply(this, {
            store: Schedlr.stores.event_store,
            
            toolbar: {
                items: [
                    {xtype: 'spacer'},
                    {xtype: 'button', ui: 'confirm', hidden: true, text:'Attend'}
                ]
            }
        });
        
        Schedlr.views.List.superclass.initComponent.apply(this, arguments);
    },
    
    getDetailCard: function (item, parent) {
        var itemData     = item.attributes.record.data,
            parentData   = parent.attributes.record.data,
            backButton   = this.backButton,
            attendButton = this.toolbar.items.items[2],
            attendStore  = Schedlr.stores.attending_store,
            detailCard, attendHandler;
		
        detailCard = new Ext.Panel({
            scroll: 'vertical',
            styleHtmlContent: true,
            tpl: ["<h2>{text}</h2>","{info}"],
            title: 'Event'
        });
        
        // so the toolbar doesn't get cluttered, if text of previous card is too long then just say 'back' instead
        if (parentData.text.length > 6) {
            backButton.setText('Back');
        } else {
            backButton.setText(parentData.text);
        }
        
        attendButton.setVisible(true);
        
        attendHandler = function() {             
            attendStore.add(item.attributes.record.data);
            attendStore.sort('timeStart', 'ASC');
            attendStore.sync();
            
            //disable attend button
            this.disable();
        };
        
        //add event to localstorage
        attendButton.on('tap', attendHandler);
        
        // show the attend button when on leaf, hide when back button is tapped
        backButton.on('tap', function() {
            attendButton.setVisible(false);
            attendButton.enable();
            attendButton.un('tap', attendHandler);
        });
        
        detailCard.update(itemData);
        return detailCard;
    }
});

Ext.reg('eventsList', Schedlr.views.List);