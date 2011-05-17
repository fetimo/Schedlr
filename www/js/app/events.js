//set up model for store, like a schematic
Ext.regModel('Event', {
	fields: 
	[
		{name: 'name',			type: 'string'},
		{name: 'description',	type: 'string'},
		{name: 'timeStart',		type: 'int'},
		{name: 'timeFinish',	type: 'int'},
		{name: 'date',			type: 'int'},
		{name: 'location',		type: 'string'},
		{name: 'category',		type: 'string'},
		{name: 'type',			type: 'string'},
		{name: 'attending',		type: 'boolean',	defaultValue: false},
		{name: 'id',			type: 'int'}
	],

	changeAttendance: function() {
				
		//set variable
		var oldStatus = this.get('attending');
		
		alert(oldStatus);
		
		//if already attending (aka true), make false and vice versa
		if(oldStatus = true){	
			newStatus = false;
		} else {
			newStatus = true;
		}
		
		//set variable as new value
		this.set('attending', newName);
	}
	
});

//populate store with data, mmm data
Schedlr.ListStore = new Ext.data.Store({
	model: 'Event',
	sorters: 'type',
	getGroupString : function(record) {
		//for some reason this if else statement doesn't work
		if(record.get('type') === "Mixed" || "Music") {
			return record.get('type');
		} else {
			return record.get('type') + "s";
		}
	},
	data: [
		{
			name: "Start Your Festival",	
			description: "1000 Press Conference 1200 Opening Campus Exhibitions 1345 Opening ROBOT-ISM\/ Japan Media Arts Festival 1430 Worldpremiere of Ralf Schmerbergs new movie  1600 Opening CyberArts 2010 Exhibition 1730 Opening Sound Space 1900 Repair Choir Main Square", 
			timeStart: "1000", 
			timeFinish: "1900",
			date: "3", 
			location: "Hauptplatz, Tabakfabrik Linz", 
			category: "Opening",
			type: "Mixed",
			attending: false,
			id: "101"
		},
		{ 
			name: "Frozen Music",	
			description: "That music and architecture have much in common was recognized by the great German writer Johann Wolfgang von Goethe and philosophers Arthur Schopenhauer and Friedrich Wilhelm Schelling, who called architecture silent, solidified or frozen music. 'Frozen Music' is the title of the event that kicks off this year's Ars Electronica Festival and also marks the official reopening of Linz's Tabakfabrik. This venue, a former tobacco processing plant that's been closed since September 2009, is one of Austria's most significant industrial landmarks. Artistic interventions, performances and sound and light shows staged in the facility's inner courtyard will throw open imaginary doors and windows, and transport audience members deeper and deeper inside-into a world in which productivity is seemingly paralyzed but can still be perceived with all the senses.", 
			timeStart: "2030", 
			timeFinish: "2300", 
			date: "3", 
			location: "Tabakfabrik Linz", 
			category: "Opening", 
			type: "Music",
			attending: false,
			id: "102"
		},
		{ 
			name: "Making a Difference",	
			description: "repair: it's all about attitude, about taking up the responsibility and starting to change the things.", 
			timeStart: "1030", 
			timeFinish: "1230", 
			date: "3", 
			location: "Bau 2 EG", 
			category: "Repair the Environment", 
			type: "Conference",
			id: "103"
		},
		{ 
			name: "Was Menschen bewegt",	
			description: "Mobility is the essence of a globalized society, its basic requirement, the key to competitiveness, and a cause of environmental pollution. This symposium will shed light on numerous aspects of mobility including sociopolitical issues and the challenges posed by design and technology. Produced jointly by Ars Electronica and the Austrian Federal Railways.", 
			timeStart: "1500", 
			timeFinish: "1830", 
			date: "3", 
			location: "Bau 2 EG", 
			category: "Repair the Environment", 
			type: "Conference",
			id: "104"
		},
		{ 
			name: "Doing the right thing",	
			description: "The important thing is getting the ball rolling - recognizing problems, defining them, and seeking solutions and alternatives which, after all, one can find almost anywhere.", 
			timeStart: "1030", 
			timeFinish: "1230", 
			date: "6", 
			location: "Bau 2 EG", 
			category: "Repair the Environment", 
			type: "Conference",
			id: "105"
		},
		   { 
		   name: "The Windowfarms Project",	
		   description: "The Windowfarms Project is a fast-growing web platform that helps city dwellers grow food in their apartments year-round and channels their innovations into an open research framework for the future of urban agriculture. Over 14,000 participants are building these compact vertical hydroponic gardens in windows around the world, proposing and testing design modifications, and experimenting with different vegetables and nutrients.", 
		   timeStart: "1500", 
		   timeFinish: "1830", 
		   date: "2", 
		   location: "Bau 2 OG 1 & 2", 
		   category: "Repair the Environment", 
		   type: "Workshop",
		   id: "106"
		   },
		   { 
		   name: "Seh-Forschung",	
		   description: "Since 1968, scientist-artist Cornelia Hesse-Honegger has been painting pictures of flies and other bugs that have mutated as a result of environmental contamination and atomic radiation. Since the Chernobyl meltdown in 1986, she has collected more than 16,000 insects in the fallout zones of Chernobyl and nuclear facilities in Europe and the US. Her studies show that these plants severely harm the environment. The highest rate of contamination is 22% in the area of La Hague, France; the expected value should be approximately 1%. It’s forbidden to take pictures inside the exhibition.", 
		   timeStart: "1500", 
		   timeFinish: "1830", 
		   date: "2", 
		   location: "Bau 2 OG 4", 
		   category: "Repair the Environment", 
		   type: "Exhibition",
		   id: "107"
		   },
		   { 
		   name: "Gyre",	
		   description: "Chris Jordan looks critically at the dark side of our global mass production and consumption society. It is hard to communicate the environmental impact our way of life has on the planet, because most phenomena are invisible and spread across the earth in millions of separate places. There is no Mount Everest of waste that we can make a pilgrimage to and behold the sobering aggregate of our discarded stuff, seeing and feeling it viscerally with our senses. His work “Gyre” depicts 2.4 million pieces of plastic, equal to the estimated number of pounds of plastic pollution that enter the world’s oceans every hour. All of the plastic in his image was collected from the Pacific Ocean.", 
		   timeStart: "1500", 
		   timeFinish: "1830", 
		   date: "2", 
		   location: "REPAIR Lounge", 
		   category: "Repair the Environment", 
		   type: "Exhibition",
		   id: "108"
		   },
		   { 
		   name: "Requiem aeternam dona eis - plastic forever",	
		   description: "The plastic bag as cultural monument. The Municipal Archive of Passau, Germany has collected thousands of plastic bags that document the transition of the culture and the Zeitgeist since the 1950s. Now, in more than 20 countries, the use of plastic bags is subject to strict regulations and even fines. Three films impressively demonstrate why this is so. A wind tunnel in which a vast assortment of plastic bags elegantly and nimbly make their final rounds before the recycling process resurrects their lifecycle.", 
		   timeStart: "1500", 
		   timeFinish: "1830", 
		   date: "2",
		   location: "Magazine OG 5", 
		   category: "Repair the Environment", 
		   type: "Film",
		   id: "109"
		   },
		   { 
		   name: "Plastic Bag",	
		   description: "In a not too distant future, a Plastic Bag goes on an epic journey in search of its lost maker, wondering if there is any point to life without her. The bag encounters strange creatures, brief love in the sky, a colony of prophetic torn bags on a fence and the unknown. In the end, the plastic bag wafts its way to the ocean, into the tides, and out into 500 nautical miles of spinning garbage known as the Pacific Ocean Trash Vortex – a promised nirvana where it will settle among its own kind and gradually let the memories of its maker slip away.", 
		   timeStart: "1500", 
		   timeFinish: "1830", 
		   date: "2",
		   location: "Magazine OG 5", 
		   category: "Repair the Environment", 
		   type: "Film",
		   id: "110"
		   },
		   { 
		   name: "Plastic Planet",	
		   description: "“Plastic Planet – Once you have seen this film, you will never again drink from a plastic bottle.” Plastic is cheap and practical. We are children of the Plastic Age. Plastics in the soil or water take up to 500 years to break down. The exotic additives they contain damage our endocrine system. Were you aware of the fact that you have plastic in your blood? Director Werner Boote’s investigative documentary film shows that plastic has become a global threat. He raises issues that every one of us has to confront: Why don’t we change our behavior as consumers? Why doesn’t the private sector react to the dangers? Who is responsible for the mountains of garbage in the world’s deserts and seas? Who are the winners here? And who are the losers?", 
		   timeStart: "1500", 
		   timeFinish: "1830", 
		   date: "2",
		   location: "Magazine OG 5", 
		   category: "Repair the Environment", 
		   type: "Film",
		   id: "111"
		   },
		   { 
		   name: "Addicted to plastic",	
		   description: "For better and for worse, no ecosystem or segment of human activity has escaped the shrink-wrapped grasp of plastic. For more than 15 years, award-winning filmmaker Ian Connacher has been documenting solutions to environmental issues. His latest documentary is a global journey to investigate what we really know about the material of a thousand uses and why there’s so darn much of it. On the way we discover a toxic legacy, and the men and women dedicated to cleaning it up.", 
		   timeStart: "1500", 
		   timeFinish: "1830", 
		   date: "2",
		   location: "Magazine OG 5", 
		   category: "Repair the Environment", 
		   type: "Film",
		   id: "112"
		   },
		   { 
		   name: "Braun Tube Jazz Band",	
		   description: "Japanese experimental artist Ei Wada breathes new life into old TV picture tubes. He utilizes their electromagnetic properties to transform light into sound and back again. When he touches the screens, this triggers a fascinating audio & video performance in which his hands and his whole body serve as pseudo-antennas. The old-fashioned picture tube TVs and a video recorder become percussion instruments, light synthesizer and VJ/DJ equipment all rolled into one. Thus, devices that have lost their original function can be used in a new way.", 
		   timeStart: "1500", 
		   timeFinish: "1830", 
		   date: "2",
		   location: "Magazine OG 4", 
		   category: "Repair the Environment", 
		   type: "Music",
		   id: "113"
		   },
		   { 
		   name: "Dies irae - Rembering 108 EB",	
		   description: "Four internal combustion engines hang from the ceiling, awaiting their resuscitation. They’ll be fired up only once during the festival and join their voices in a droning, exhaust-belching song of lamentation. A reminiscence of “108 EB – Chamber Music for Four Motors and Service Personnel,” the legendary project with which Hubert Lepka and Lawine Torren created a sensation in 1989.", 
		   timeStart: "1500", 
		   timeFinish: "1830", 
		   date: "2",
		   location: "Magazine OG 4", 
		   category: "Repair the Environment",
		   type: "Exhibition", 
		   id: "114"
		   },
		   { 
		   name: "Lux aeterna - incandescent wires",	
		   description: "The meditative glowing of the incandescent wire, pulsating, weak and reddish, before it reaches its maximum output giving off blazing bright light, uncertain as to whether it means the beginning or the end.", 
		   timeStart: "1500", 
		   timeFinish: "1830", 
		   date: "2",
		   location: "Magazine OG 6", 
		   category: "Repair the Environment", 
		   type: "Exhibition",
		   id: "115"
		   },
		   { 
		   name: "Das Mobile Ö1 Atelier – The Haiti-House",	
		   description: "This year, the Mobile Ö1 Atelier on Linz’s Main Square (Hauptplatz) presents the Universal World House. It utilizes a new construction material based on the principle bees use to build their hives: strips of paper soaked in resin are compressed into a honeycomb form and then bonded together into panels. The quantity of material required to build a small house corresponds to the amount of cellulose yielded by a single tree. A house can be erected without a crane in one day and is totally weatherproof. The Mobile Ö1 Atelier is also the starting point of Electrical Walks Linz.", 
		   timeStart: "1000", 
		   timeFinish: "1900", 
		   date: "3",
		   location: "Hauptplatz", 
		   category: "Design for Repair", 
		   type: "Exhibition",
		   id: "116"
		   },

		   { 
		   name: "PROBEN",	
		   description: "The PROBEN (Trials) exhibition features objects designed and produced between 1981 and 2009 by design students at the HFBK-University of Fine Arts Hamburg. All are fully functional, full scale model vehicles-for example, sleds, concept cars, mopeds and scooters, a bicycle powered by a cordless screwdriver and an ultra-light long-distance cruiser propelled by rubber bands. Here, the accent is on bringing forth an actual object, the direct implementation of an idea in the form of a prototype. Works on display: Fahrrad: Erich Münkel, Roller: Sebastian Mends-Cole, Büro für Gestaltungsfragen, Karsten Kulke, Jens Bode, Wanderer: Oliver Fellinghauer, WYSIWYS – What You See Is What You Surf: Michael Dachselt, Hydro: Leonhard Angerer, Alexander Holtkamp, Lucas Wallusch, Falterle: René Sieber, Biegeschlitten: Jonas von Ostrowski, Steckschlitten: Martin Schmitz, Hydrofoil: Leonhard Angerer, 24 Hours Are Not Enough: Aaron Rauh, Nicolas Schrader, Motoscooter: Lucas Wallusch, Smovee: Norbert Staffend, All our dreams are made of chrome: Leonhard Angerer, EX: Sebastian Auray, Ruben Faber, Nils Ferber, Lodolf von Oldershausen", 
		   timeStart: "1500", 
		   timeFinish: "1830", 
		   date: "2",
		   location: "Bau 1 OG 3", 
		   category: "Design for Repair", 
		   type: "Exhibition",
		   id: "117"
		   },
		   { 
		   name: "PappLab",	
		   description: "The task: creating exhibition architecture to be used only for a nine-day festival. The big question: Doesn’t repairing the world call for an aesthetic paradigm shift too? The simple answer: the papplab principle. To make exhibition architecture, fold cardboard (Papp in German) cartons and add adhesive tape. A product that, in the world of commerce, is merely packaging and thus of secondary importance becomes a key material serving countless functions: walls, tables, benches and chill-out zones. Folks, we’re not just talking about paper cups and plates here; the whole damn hospitality establishment is being constructed of these materials—over 2½ acres of cardboard and miles of adhesive tape. The aim: building in a way that is inexpensive, environmentally friendly, experimental and light. And in the spirit of audience participation, installation visitors are invited to build their own repair tools either in a workshop or simply as an act of ad lib creativity.", 
		   timeStart: "1500", 
		   timeFinish: "1830", 
		   date: "2",
		   location: "Bau 1 EG", 
		   category: "Design for Repair", 
		   type: "Exhibition",
		   id: "118"
		   },
		   { 
		   name: "platform21: Stop Recycling, Start Repairing",	
		   description: "Platform21 was a design platform based in Amsterdam (NL), aiming to positively influence the relationship between user and product. Through their projects they question today’s society, reveal the making process, and stimulate dialogue and the sharing of creative knowledge. During the Ars Electronica 2010 they will show examples of their past work and offer you the chance to learn about some of their creative repair methods.", 
		   timeStart: "1500", 
		   timeFinish: "1830", 
		   date: "2",
		   location: "Bau 1 OG 3", 
		   category: "Design for Repair", 
		   type: "Exhibition",
		   id: "119"
		   },
		   { 
		   name: "Chair Repair",	
		   description: "Hey, nobody likes people who are stuck up! Except when they’re creative spirits who can take old chairs, add duct tape, and transform them into pieces of designer furniture. Platform21 will be demonstrating how that works at this year‘s Ars Electronica. And you’re cordially invited to get into the adhesive act too at a Tape the Chair workshop. At its conclusion, participants’ works will be evaluated and—who knows?—your sticky fingers might be the ones clutching the grand prize! So: Stop Recycling, Start Repairing!", 
		   timeStart: "1530", 
		   timeFinish: "1830", 
		   date: "5",
		   location: "Bau 1 OG 3", 
		   category: "Design for Repair", 
		   type: "Workshop",
		   id: "120"
		   },
		   { 
		   name: "plant",	
		   description: "After his first work, a sunflower-shaped robot called 'Himawari' (2008), artist and visual designer Akira Nakayasu continued his research in the field of robotic plants. His latest worked, simply called 'plant', is an interactive installation inspired by the vision of grass blowing in the wind. The robotic plant has 169 artificial leaves, which are controlled by using shape memory alloy actuators. Each leaf reacts independently to movement like an approaching hand by moving slowly in the virtual wind.", 
		   timeStart: "1500", 
		   timeFinish: "1830", 
		   date: "4",
		   location: "REPAIR Lounge", 
		   category: "Design for Repair",
		   type: "Exhibition", 
		   id: "121"
		   },
	]
});





/*
Ext.regModel('Event', {

	fields: [
		{name: 'name', type: 'string'},
		{name: 'description', type: 'string'},
		{name: 'time-start', type: 'int'},
		{name: 'time-finish', type: 'int'},
		{name: 'date', type: 'int'},
		{name: 'location', type: 'string'},
		{name: 'category', type: 'string'},
		{name: 'id', type: 'int'}
	],
	
	changeAttendance: function() {
		
		//set variable
		var oldStatus = this.get('attending');
		
		//if already attending (aka true), make false and vice versa
		if(oldStatus = true){	
			newStatus = false;
		} else {
			newStatus = true;
		}
		
		//set variable as new value
		this.set('attending', newName);
	}
});

//read json ( http://www.sencha.com/blog/using-the-data-package-in-sencha-touch )
var events = new Ext.DataView({
	store: new Ext.data.Store({
		model: 'Event',
		proxy: {
			type: 'ajax',
			url: 'events.json',
			reader: {
				type: 'json',
				root: 'category',
				record: 'event'
			}
		}
	}),
	tpl: new Ext.XTemplate(
		'<tpl for=".">',
			'<div class="">',
				'<div class="button">lol</div>',
			'</div>',
		'</tpl>'
	),
	fullscreen: true
});
*/