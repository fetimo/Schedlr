Schedlr.views.Viewport = Ext.extend(Ext.NestedList, {
	fullscreen: true,
	title: 'Categories',
	store: Schedlr.event_store,
	useTitleAsBackText: false,
	toolbar: {
		items: [
			{xtype: 'spacer'},
			{xtype: 'button', ui: 'confirm', hidden: true, text:'<a href="">Attend</a>'}
		]
	},
	getDetailCard: function(item, parent) {
        var itemData = item.attributes.record.data,
		parentData = parent.attributes.record.data,
		
		detailCard = new Ext.Panel({
			scroll: 'vertical',
			styleHtmlContent: true,
			tpl: ["<h2>{text}</h2>","{info}"]
		});
		
		if(parentData.text.length > 6){
			this.backButton.setText('Back');
		} else {
			this.backButton.setText(parentData.text);
		}
		
		var interceptAndHide = function() {
			this.up('toolbar').getComponent(2).setVisible(false);
		}
		
		this.toolbar.getComponent(2).setVisible(true);
		this.backButton.on('tap', interceptAndHide);
		
		detailCard.update(itemData);
		return detailCard;
    }
});