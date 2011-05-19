Ext.setup({
	tabletStartupScreen: 'tablet_startup.png',
	phoneStartupScreen: 'phone_startup.png',
	icon: 'icon.png',
	glossOnIcon: false,
});

//this portion of code founded on @nelstrom's awesome screencast: http://vimeo.com/19245335

//if(localStorage.getItem("chosenEvents") != "true") {
	
	//this is a horrible way to display this information, think of something better
	if(localStorage.getItem("firstRun") != "false") {
		alert('Choose the events that you\'d like to attend at this year\'s Ars Electronica festival.');
		localStorage.setItem("firstRun", "false");
	}
	
	Schedlr = new Ext.Application({
								  
		defaultTarget: "viewport",
		name: "Schedlr",
		launch: function() {
			
			//button handlers
			var returnHome = function() {
				Schedlr.Viewport.setActiveItem('listwrapper', {type:'slide', direction: 'right'})
			};
			
			var amendEvent = function() {
				alert('clicked');
				//use proxy to get id of event and set attending to true
								
				event.changeAttendance(id);
				alert('function called and finished executing');
				returnHome();
			};
			
			//toolbars and layout
			Schedlr.detailToolbar = new Ext.Toolbar({
				layout: 'fit',
				items: [
					{ui:'back', text: 'Back', handler: returnHome},
					{xtype:'spacer'},
					{ui:'confirm', text: 'Attend', handler: amendEvent}
				]
			});
			
			Schedlr.detailPanel = new Ext.Panel({
				id: 'detailpanel',
				scroll: 'vertical',
				tpl: '<h2>{name}</h2><div class="description">{description}</div>',
				dockedItems: [Schedlr.detailToolbar]
			});
			
			
			Schedlr.indexPanel = new Ext.Panel({
				id: 'indexpanel',
				items: [
					{ui:'', text: 'Conferences'},
					{ui:'', text: 'Exhibitions'},
					{ui:'', text: 'Films'},
					{ui:'', text: 'Mixed'},
					{ui:'', text: 'Music'},
					{ui:'', text: 'Workshops'}
				]
			});
			
			
			Schedlr.listPanel = new Ext.List({
				id: 'indexlist',
				store: Schedlr.ListStore,
				itemTpl: '<div class="list"><p>{name}</p></div>',
				grouped: true,
				onItemDisclosure: function(record){ //called when arrow tapped
					
					//set name of event as title, if too long then shorten and add ellipsis
					var event = record.data.name;
					
					if (event.length > 10) {
						var event = record.data.name.slice(0,10) + "...";
						Schedlr.detailToolbar.setTitle(event);
					} else {
						Schedlr.detailToolbar.setTitle(event);
					}
					
					Schedlr.detailPanel.update(record.data);
					Schedlr.Viewport.setActiveItem('detailpanel');
				}
			});
			
			Schedlr.listWrapper = new Ext.Panel({
				id: 'listwrapper',
				layout: 'fit',
				items: [Schedlr.listPanel],
				dockedItems: [{
					xtype: 'tabbar',
					ui: 'dark',
					layout: {
						pack: 'center'
					},
					items: [{
						text: 'Calendar',
						iconCls: 'calendar',
						iconMask: true,
						ui: 'plain',
						handler: function(){
							//alert('clicked on calendar');
							ListDemo.Viewport.setActiveItem('calendar', {type:'fade', duration:500});
						}
					},
					{
						text: 'Edit',
						iconCls: 'add',
						iconMask: true,
						ui: 'plain',
						handler: function() {
							//alert('clicked on edit');
							ListDemo.Viewport.setActiveItem('listwrapper', {type:'fade', duration:500});
						}
					}],
					dock: 'bottom'
				}]
			});
			
			//rendering it all
			Schedlr.Viewport = new Ext.Panel ({
				fullscreen: true,
				layout: 'card',
				cardSwitchAnimation: 'slide',
				items: [Schedlr.listWrapper, Schedlr.detailPanel]
			});
		}
	});
//} else {
	//calendar view code
	
//}