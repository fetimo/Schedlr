Ext.setup({
	tabletStartupScreen: 'tablet_startup.png',
	phoneStartupScreen: 'phone_startup.png',
	icon: 'icon.png',
	glossOnIcon: false,
});

//founded on the example given in the Sencha Touch docs on Nested Lists

//this is a horrible way to display this information, think of something better
if(localStorage.getItem("firstRun") != "false") {
	alert('Choose the events that you\'d like to attend at this year\'s Ars Electronica festival.');
	localStorage.setItem("firstRun", "false");
}
//end horribleness

Schedlr = new Ext.Application({
							  
	defaultTarget: "viewport",
	name: "Schedlr",
	launch: function() {
		//render view
		this.views.viewport = new this.views.Viewport();
	}
});