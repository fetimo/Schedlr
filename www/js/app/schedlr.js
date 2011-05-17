Ext.setup({
	tabletStartupScreen: 'tablet_startup.png',
	phoneStartupScreen: 'phone_startup.png',
	icon: 'icon.png',
	glossOnIcon: false,
});

//this portion of code founded on @nelstrom's awesome screencast: http://vimeo.com/19245335

//if(localStorage.getItem("chosenEvents") != "true") {

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
				Schedlr.Event.changeAttendance();
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
									  
			Schedlr.listPanel = new Ext.List({
				id: 'indexlist',
				store: Schedlr.ListStore,
				itemTpl: '<div class="list"><p>{name}</p></div>',
				grouped: true,
				onItemDisclosure: function(record){ //called when arrow touched
					
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
					xtype: 'toolbar',
					items: [
					{
						xtype:'spacer'
					},
					{
						ui:'confirm', 
						text:'Finish choosing',
						handler: 
							function() {
								//init calendar view here
								//localStorage.setItem("chosenEvents","true");
								//this.refresh;
							}
						}
					]
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










/*

Helpful code for later:

//set
localStorage.setItem("event","101");
//retrieve
localStorage.getItem("event");

//when press finished choosing
localStorage.setItem("chosenEvents","true");

var names = new Array();
names[0] = prompt("New member name?");
localStorage.setItem("names", names.join('|||'));      //some delimiter
alert(localStorage.getItem("names").split('|||')[0]);  //whatever you entered

//iterate over all keys to get names (http://diveintohtml5.org/storage.html)
interface Storage {
 readonly attribute unsigned long length;
 getter DOMString key(in unsigned long index);
};
*/

/*
var sortingBar = new Ext.TabBar({
layout: 'fit',
items: [
{
	xtype: 'button',
	text: 'Categories',
	handler: function() {
		var sortByCat = true;
		Schedlr.listPanel.update();
		Schedlr.Viewport.setActiveItem('listwrapper', {type:'fade', direction: 'right'})
	}
},
{
	xtype: 'button',
	text: 'Type',
	handler: function() {
		var sortByCat = false;
		Schedlr.listPanel.update();
			Schedlr.Viewport.setActiveItem('listwrapper', {type:'fade', direction: 'right'})
		}
	}
]
});
*/