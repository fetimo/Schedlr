Schedlr.views.Viewport = Ext.extend(Ext.NestedList, {
	fullscreen: true,
	title: 'Categories',
	store: Schedlr.event_store,
	getDetailCard: function(item, parent) {
        var itemData = item.attributes.record.data,
		parentData = parent.attributes.record.data,
		
		detailCard = new Ext.Panel({
			scroll: 'vertical',
			styleHtmlContent: true,
			tpl: ["<h2>{text}</h2>","{info}"]
		});
		
		detailCard.update(itemData);
		this.backButton.setText(parentData.text);
		return detailCard;
    }
});