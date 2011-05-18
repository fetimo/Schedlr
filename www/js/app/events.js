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
	
	proxy: {
		type: 'localstorage',
		id:	'eventsProxy'
	},
	
	changeAttendance: function() {
	//this function loosely based on an example given in the Sencha Touch API docs on 'Model'
		alert('changeAttendance function called');
		
		//set variable
		var oldStatus = this.get('attending');
		
		alert(oldStatus);
		
		//if already attending (aka true), make false and vice versa
		if(oldStatus === true){	
			newStatus = false;
		} else {
			newStatus = true;
		}
		
		//set variable as new value
		this.set('attending', newStatus);
		
		alert(newStatus);
	}
});

//populate store with data, mmm data
Schedlr.ListStore = new Ext.data.Store({
	model: 'Event',
	//sort by type (e.g. conference) and then alphabetise within each category
	sorters: [
		{ 
			property: 'type'
		},
		{
			property: 'name'
		}
	],
	getGroupString : function(record) {
		var type = record.get('type');
		if(type === "Mixed" || type === "Music") {
			return type;
		} else {
			return type + "s";
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
		   name: "Dies irae - Remembering 108 EB",	
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
		   {
			name: "Growth Assembley",
			description: "After the cost of energy had made global shipping of raw materials and packaged goods unimaginable, only the rich could afford traditional, massproduced commodities. Synthetic biology enabled us to harness our natural environment for the production of things. Coded into the DNA of a plant, product parts grow within the supporting system of the plant‘s structure. When fully developed, they are stripped like a walnut from its shell or corn from its husk, ready for assembly. Shops have evolved into factory farms as licensed products are grown where sold. Large items take time to grow and are more expensive while small ones are more affordable. The postal service delivers lightweight seed-packets for domestic manufacturers. The product shown here is the Herbicide Sprayer, an essential commodity used to protect delicate engineered horticultural machines from older nature.",
			timeStart: "1000",
			timeFinish: "1400",
			date: "7",
			location: "Magazine OG 1",
			category: "Design for Repair",
			type: "Exhibition",
			id: "122"
		   },
		   {
			name: "Ocean of Light: Surface",
			description: "The Ocean of Light project explores the creative and immersive possibilities of light-based visualization in physical space. It uses hardware to create dynamic, interactive and three-dimensional sculptures from light. Surface, the first artwork to be exhibited using the Ocean of Light hardware, is a responsive virtual eco-system that occupies physical space. This space is dominated by a virtual surface, the boundary between two fluid virtual materials. These are affected by sound, nearby noise creates waves that ripple across the surface, but can also trigger luminous blasts. The result is an interconnected environment, overlapping physical and virtual spaces that coexist and are aware of each other.",
			timeStart: "0900",
			timeFinish: "1000",
			date: "7",
			location: "Magazine EG",
			category: "Design for Repair",
			type: "Exhibition",
			id: "123"
		   },
		   {
			name: "Repair Fair",
			description: "Future hopes on a number of different levels are pinned on so-called green technologies: on one hand, they could help reduce the rapidly increasing global demand for energy, or even offer alternatives to finite resources like oil and coal; on the other hand, as highly committed politicians and young start-up entrepreneurs have long insisted, they could be a driving force behind the revival of our sputtering economy. In this spirit, Ars Electronica is staging a Clean Tech Showcase to spotlight a small selection of outstanding ideas, concepts and best-practice models that point the way to a brighter future. Visitors can take an up-close-and-personal look at green transportation when they take one of a whole fleet of electrical vehicles out for a spin on the E-Mobility Parcours.",
			timeStart: "1100",
			timeFinish: "1200",
			date: "6",
			location: "Info Lounge",
			category: "Design for Repair",
			type: "Exhibition",
			id: "124"
		   },
		   {
			name: "Frisiersalon in fünf Akten",
			description: "A 1978 Steyr Daimler City Bus just short of its last tow to the junkyard is transformed in five acts into a “kiosque,” a vehicle specially equipped for deployment tracking down matters of interest to advanced cosmopolitans. To enable it to respond to diverse situations, the vehicle will get a daily “tune up” customizing it for a particular mission. The newly-implemented tools will be put into action immediately and taken out for a spin together with installation visitors.",
			timeStart: "1400",
			timeFinish: "1500",
			date: "4",
			location: "Hof",
			category: "Design for Repair",
			type: "Exhibition",
			id: "125"
		   },
		   {
			name: "The future of the Tabakfabrik Linz",
			description: "'The product is working for real work - the tobacco factory in Linz as a future project'- this slogan invites the initiative NANKE (New Work New Culture) in the framework of the Ars Electronica Festival on Tuesday 7 September, to a high-profile panel discussion with representatives from politics, economy and culture in the tobacco factory in Linz. As the site of the former tobacco factory will be used in future as the economic, cultural, social and political possibilities and necessities are in place or have yet to be developed? The tobacco plants as a possible community center, home of the creative industries and the 'New Labour' - Linz are as drivers of new concepts of work and green technologies a few questions that will be discussed. On the future of an entire city councilor Johann Mayr (SPO) will be Vice Mayor Erich Watzl (ÖVP), Robert Bauer (ATW reuse study), Gerhard Haden (Artist), Gerfried Stocker (Artistic Director Ars Electronica) and the philosopher and thinker of the Discuss 'new work' Frithjof Bergmann with the audience.",
			timeStart: "1700",
			timeFinish: "2000",
			date: "7",
			location: "Bau 2 EG",
			category: "New Work Factory",
			type: "Conference",
			id: "126"
		   },
		   {
			name: "NANK",
			description: "Neue Arbeit Neue Kultur (new work new culture) is a hybrid format—part trade fair, part performance. How can people use a broad spectrum of technologies to manufacture  products themselves? This experiment’s aim is to completely rethink work and, with a liberated attitude, to experience it anew. To do this job, NANK utilizes two elements:  Community Production demonstrates technologies having to do with energy, production, housing, mobility, work, food and health; in Presence, an open deliberation space, participants will elaborate on new work, presence and belonging.",
			timeStart: "1500",
			timeFinish: "2000",
			date: "6",
			location: "Bau 2 OG 1, Hof",
			category: "New Work Factory",
			type: "Exhibition",
			id: "127"
		   },
		   {
			name: "Richard Sennett - The Craftsman",
			description: "The Linz Lectures series sponsored by the city’s Volkshochschule adult continuing education facility and the province’s Chamber of Labor is designed as a forum for the critical discussion of important current issues. This year, American sociologist Richard Sennett has been invited to Linz to discuss work (the reality of work; work as a commodity) amidst capitalism’s time of crisis. Sennett’s bestsellers—for example, “The Corrosion of Character” and “The Culture of the New Capitalism”—elaborate on the effects of flexwork on labor and life in general. Sennett’s latest book, “The Craftsman,” investigates a basic human  impulse: the desire to do a job well for its own sake.",
			timeStart: "1800",
			timeFinish: "2000",
			date: "2",
			location: "Bau 2 EG",
			category: "New Work Factory",
			type: "Conference",
			id: "128"
		   },
		   {
			name: "Wissensturm – Lernort der Zukunft",
			description: "Linz’s Wissensturm—the “tower of knowledge” that houses an adult continuing education facility (VHS), public library, media workshop (MWL) and a self-learning center (LeWis)—has made a name for itself worldwide as a promising approach to providing knowledge-based services. During the Ars Electronica Festival, Wissensturm will set up shop on the Tabakfabrik grounds.",
			timeStart: "0800",
			timeFinish: "1500",
			date: "4",
			location: "Bau 2 OG 1, Hof",
			category: "New Work Factory",
			type: "Workshop",
			id: "129"
		   },
		   {
			name: "Die Gemeinwohl-Ökonomie, das Wirtschaftsmodell der Zukunft",
			description: "Christian Felber (AT) is an author, freelance journalist and speaker on social and economic issues. He deals with how we organize our economy and which economic goals we pursue thereby. Should everything be oriented on the best interests of small groups or should the economy enable all people to live and thrive? This speech will be followed by an open World Cafe Workshop on the same subject conducted by Knut Berndorfer and Johannes Heiml.",
			timeStart: "1800",
			timeFinish: "2100",
			date: "3",
			location: "Bau 1 OG 3",
			category: "New Work Factory",
			type: "Workshop",
			id: "130"
		   },
		   {
			name: "Repairing the global imbalance: Eight goals for one world",
			description: "In September 2000, 189 heads of state and government convened at United Nations Headquarters in New York and adopted the so-called Millennium Declaration. In it, the signatories affirmed their commitment to assuming shared responsibility for the world’s poorest inhabitants and to fostering the development of the global community. The declaration states that the supreme goals of the international community of nations in the new century should be liberty, equality, solidarity, respect for nature, and shared responsibility.",
			timeStart: "1200",
			timeFinish: "1230",
			date: "4",
			location: "Bau 2 OG 1",
			category: "New Work Factory",
			type: "Exhibition",
			id: "131"
		   },
		   {
			name: "Clean IT",
			description: "",
			timeStart: "1400",
			timeFinish: "1600",
			date: "4",
			location: "This workshop takes you on a trip back to your PC’s place of origin. Via film, speech and discussion, you’ll learn just how far all these components have traveled and see that a bit more commitment on your part is called for to bring about better working conditions for the people who assembled it and to assure proper disposal when its useful life is over.",
			category: "New Work Factory",
			type: "Workshop",
			id: "132"
		   },
		   {
			name: "TELE-INTERNET – The 2010 Ars Electronica Internet Shop!",
			description: "Life and work according to ideas from the development of open source software: Vision of a sustainable future, nightmare scenario of total transparency or something that’s long been common practice? At the Open Source Life symposium experiences with projects and initiatives, activism on behalf of freedom online and critical analysis of concepts around “openness” meet. Can Open-Source-Mindsets of the individual and Open-Source-Structures in societies and economies act as agents of positive change?",
			timeStart: "1030",
			timeFinish: "1830",
			date: "4",
			location: "Bau 2 EG",
			category: "New Work Factory",
			type: "Conference",
			id: "133"
		   },
		   {
			name: "Open Source Life Symposium",
			description: "Life and work according to ideas from the development of open source software: Vision of a sustainable future, nightmare scenario of total transparency or something that’s long been common practice? At the Open Source Life symposium experiences with projects and initiatives, activism on behalf of freedom online and critical analysis of concepts around “openness” meet. Can Open-Source-Mindsets of the individual and Open-Source-Structures in societies and economies act as agents of positive change?",
			timeStart: "1030",
			timeFinish: "1830",
			date: "4",
			location: "Bau 2 EG",
			category: "Repair Our Society",
			type: "Conference",
			id: "134"
		   },
		   {
			name: "Tele-Internet",
			description: "The Digital Communities area TELE-INTERNET is an organically growing structure, a hacker space, a conference, a stage, an exhibition, a BarCamp, Commune 0/1, and a site for anyone who’s interested in discussing the development of the internet, exchanging ideas, and presenting their own projects. The Ars Electronica audience is invited to take the plunge and join the fun, to contribute to the discussion of the social web, or to chill out on the couch with a clubmate and a notebook.",
			timeStart: "0830",
			timeFinish: "1230",
			date: "5",
			location: "Bau 1 OG",
			category: "Repair Our Society",
			type: "Mixed",
			id: "135"
		   },
		   {
			name: "Radio FRO Conference: Renaming Media",
			description: "Radio FRO will scrutinize how current media policy discourses on the subject of migration take place on a European level and which role media play in this connection. “RENAMING Media” offers a setting for reflection in which to shed light on constructions and processes in the field of media production on national and European levels, and focuses on media initiatives that are confronting this constellation of facts and circumstances.",
			timeStart: "1000",
			timeFinish: "1800",
			date: "4",
			location: "Bau 1 OG 3",
			category: "Repair Our Society",
			type: "Conference",
			id: "136"
		   },
		   {
			name: "Power of mind 4 - Dissociative Defense",
			description: "Mogens Jacobsens installation is a biological, galvanic battery consisting of several hundred potatoes. When the exhibition starts, the electrical power of the potatoes drives a text censoring software system. As target, Jacobsen chose the last chapter of a highly critical report relating to immigration issues, that was discredited by the Danish government immediately after its publication. As the potatoes begin to dry out, the suppressed words and censored sentences will gradually reappear in the text.",
			timeStart: "0800",
			timeFinish: "0900",
			date: "3",
			location: "Bau 1 OG 3",
			category: "Repair Our Society",
			type: "Exhibition",
			id: "137"
		   },
		   {
			name: "Nine Eyes of Google Street View",
			description: "Jon Rafman’s exhibit Nine Eyes of Google Street View celebrates Google’s technologies and critiques the consciousness it reflects at the same time. In the film, one man searches for his lost love through Google Street View and Google Earth. In a series of photographs based on pictures of Google Street View, Rafman reintroduces the human gaze and reasserts the uniqueness and importance of the individual.",
			timeStart: "1000",
			timeFinish: "1100",
			date: "4",
			location: "Magazine OG 3",
			category: "Repair Our Society",
			type: "Exhibition",
			id: "138"
		   },
		   {
			name: "PROBLEMA - sometimes the worst enemey is our own perception",
			description: "112 persons from 56 countries convened at the Table of Free Voices in Berlin in 2006 to provide answers to global questions about such things as the economy, ethics, war and nation-states. Now, director Ralf Schmerberg has made a film out of the resulting 11,200 statements interwoven with footage of some of the defining images of our time. The result is major intellectual marathon.",
			timeStart: "1600",
			timeFinish: "1830",
			date: "6",
			location: "Bau 1 OG 3",
			category: "Repair Our Society",
			type: "Film",
			id: "139"
		   },
		   {
			name: "Repair Choir",
			description: "Inspired by more than 70 Complaints Choirs all over the world, the ORF (Austrian Broadcasting Company) and Ars Electronica invited locals to get whatever has been bothering them of their chest. Regardless of whether it has to do with the environment, politics or social injustice, the complaints and repair suggestions will be put together to create the “Upper Austrian Repair Song”. An amateur choral group under direction of Wolfgang Mayer (AT) will then perform it on Linz’s Main Square.",
			timeStart: "1900",
			timeFinish: "2000",
			date: "2",
			location: "Main Square",
			category: "Repair Our Society",
			type: "Music",
			id: "140"
		   },
	]
});