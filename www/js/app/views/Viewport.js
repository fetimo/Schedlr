Schedlr.views.Viewport = Ext.extend(Ext.NestedList, {
	fullscreen: true,
	title: 'Categories',
	store: Schedlr.event_store,
	useTitleAsBackText: false,
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
		
		var attendButton = [
			{xtype: 'spacer'},
			{xtype: 'button', ui: 'confirm', text:'<a href="">Attend</a>'}
		];
		
		if(sessionStorage.getItem('btnAdded') != 'true') {
			this.toolbar.add(1006, attendButton);
			sessionStorage.setItem('btnAdded', 'true');
		}
		
		//var interceptBack = this.;
		
		//this.backButton.on('tap', interceptBack);
		for (item in this.toolbar.items) {
			alert(item);
		}
		
		detailCard.update(itemData);
		return detailCard;
    }
});