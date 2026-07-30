/**
 * db-waterpolo.js — Water Polo Coaching Database
 * All divisions: D1, D2, D3
 * Last verified: July 2026 (2025-26 coaching staff)
 * Includes: head coach, email, phone, assistant coaches, conference, 2025 season record
 *
 * Fields:
 *   name   — school name
 *   d      — division: "D1" | "D2" | "D3"
 *   g      — gender: "Women's" | "Men's"
 *   l      — location (City, ST)
 *   r      — region
 *   w      — athletics website
 *   conf   — conference
 *   hc     — head coach name
 *   hce    — head coach email
 *   hcp    — head coach phone
 *   ac     — assistant coaches [{n, e, p}]
 *   rec25  — 2024-25 season record (W-L) or "N/A"
 */

const WATERPOLO_DB = [

  // ═══════════════════════════════════════════════════════════════════
  // D1 — WOMEN'S
  // ═══════════════════════════════════════════════════════════════════

  {name:"UCLA",d:"D1",g:"Women's",l:"Los Angeles, CA",r:"West Coast US",w:"https://uclabruins.com",conf:"MPSF",
   hc:"Jason Falitz / Matt Kubeck",hce:"jfalitz@athletics.ucla.edu",hcp:"",
   ac:[{n:"Jason Falitz",e:"jfalitz@athletics.ucla.edu"},{n:"Matt Kubeck",e:"mkubeck@athletics.ucla.edu"},{n:"Ryann Neushul",e:"rneushul@athletics.ucla.edu"}],
   rec25:"20-7"},

  {name:"Stanford University",d:"D1",g:"Women's",l:"Stanford, CA",r:"West Coast US",w:"https://gostanford.com",conf:"MPSF",
   hc:"John Tanner",hce:"",hcp:"",
   ac:[{n:"Brenda Villa"}],
   rec25:"25-1",notes:"Won 2025 NCAA Championship"},

  {name:"University of Southern California",d:"D1",g:"Women's",l:"Los Angeles, CA",r:"West Coast US",w:"https://usctrojans.com",conf:"MPSF",
   hc:"Casey Moon",hce:"caseymoo@usc.edu",hcp:"",
   ac:[{n:"Christopher Lee",e:"christopher.l@usc.edu"},{n:"Carlee Kapana",e:"kapana@usc.edu"}],
   rec25:"29-5",notes:"2025 NCAA Championship runner-up"},

  {name:"University of California, Berkeley",d:"D1",g:"Women's",l:"Berkeley, CA",r:"West Coast US",w:"https://calbears.com",conf:"MPSF",
   hc:"Kirk Everist",hce:"keverist@berkeley.edu",hcp:"",
   ac:[{n:"Jeff Tyrrell",e:"jefftyrrell@berkeley.edu"},{n:"Jakov Belamaric",e:"jbelamaric@berkeley.edu"},{n:"Iosefa Tuiasau"}],
   rec25:"19-6"},

  {name:"University of Michigan",d:"D1",g:"Women's",l:"Ann Arbor, MI",r:"Midwest US",w:"https://mgoblue.com",conf:"MPSF",
   hc:"Cassie Churnside",hce:"churn@umich.edu",hcp:"",
   ac:[{n:"Sami Tai",e:"samihill@umich.edu"},{n:"Maddie O'Reilly"}],
   rec25:"19-11",notes:"Chris Vidale joining as HC for 2026-27 season"},

  {name:"Arizona State University",d:"D1",g:"Women's",l:"Tempe, AZ",r:"Southwest US",w:"https://thesundevils.com",conf:"MPSF",
   hc:"Petra Pardi",hce:"ppardi1@asu.edu",hcp:"",
   ac:[{n:"Ethan D'Souza",e:"ethandsouza@asu.edu"},{n:"Amira Van Buren",e:"ajvanbur@asu.edu"}],
   rec25:"19-9"},

  {name:"UC San Diego",d:"D1",g:"Women's",l:"La Jolla, CA",r:"West Coast US",w:"https://ucsdtritons.com",conf:"Big West",
   hc:"Sarah Lizotte",hce:"salizotte@ucsd.edu",hcp:"",
   ac:[{n:"Nick Alexander",e:"n4alexander@ucsd.edu"},{n:"Jamie Dailey Hanan"},{n:"Randy Franke"}],
   rec25:"17-14"},

  {name:"Long Beach State",d:"D1",g:"Women's",l:"Long Beach, CA",r:"West Coast US",w:"https://longbeachstate.com",conf:"Big West",
   hc:"Shana Welch",hce:"Shana.Welch@csulb.edu",hcp:"",
   ac:[{n:"Katie Card Neidermire",e:"Kaitlyn.Neidermire@csulb.edu"},{n:"Robyn Gordin",e:"Robyn.Gordin@csulb.edu"}],
   rec25:"17-11"},

  {name:"UC Santa Barbara",d:"D1",g:"Women's",l:"Santa Barbara, CA",r:"West Coast US",w:"https://ucsbgauchos.com",conf:"Big West",
   hc:"Emma Myall",hce:"emma.myall@athletics.ucsb.edu",hcp:"",
   ac:[{n:"Jenna Olson",e:"jennaolson@ucsb.edu"},{n:"Imani Clemons",e:"imaniclemons@ucsb.edu"}],
   rec25:"16-12"},

  {name:"Princeton University",d:"D1",g:"Women's",l:"Princeton, NJ",r:"Northeast US",w:"https://goprincetontigers.com",conf:"CWPA",
   hc:"Derek Ellingson",hce:"dellings@princeton.edu",hcp:"",
   ac:[{n:"Bella Baia",e:"bellabaia@princeton.edu"},{n:"Huw Helman",e:"hdhelman@princeton.edu"}],
   rec25:"21-7",notes:"CWPA No. 1 seed; ranked No. 10 nationally"},

  {name:"Loyola Marymount University",d:"D1",g:"Women's",l:"Los Angeles, CA",r:"West Coast US",w:"https://lmulions.com",conf:"GCC",
   hc:"Ikaika Aki",hce:"Andrew.aki@lmu.edu",hcp:"",
   ac:[{n:"Sarah Kreiser",e:"Sarah.Kreiser@lmu.edu"}],
   rec25:"20-12",notes:"Won GCC Championship; lost NCAA quarterfinal to UCLA"},

  {name:"University of Hawaii",d:"D1",g:"Women's",l:"Honolulu, HI",r:"West Coast US",w:"https://hawaiiathletics.com",conf:"Big West",
   hc:"James Robinson",hce:"jamesrro@hawaii.edu",hcp:"",
   ac:[{n:"Candice Vorbeck",e:"cvorbeck@hawaii.edu"},{n:"Brooke Maxson",e:"bmaxson@hawaii.edu"}],
   rec25:"22-5",notes:"Won Big West Championship; 3rd nationally"},

  {name:"San Jose State University",d:"D1",g:"Women's",l:"San Jose, CA",r:"West Coast US",w:"https://sjsuspartans.com",conf:"Big West",
   hc:"Beth Harberts",hce:"beth.harberts@sjsu.edu",hcp:"",
   ac:[{n:"Cristian Tanase",e:"cristianmarian.tanase@sjsu.edu"}],
   rec25:"13-13"},

  {name:"Wagner College",d:"D1",g:"Women's",l:"Staten Island, NY",r:"Northeast US",w:"https://wagnerathletics.com",conf:"MAAC",
   hc:"Josh Hower",hce:"josh.hower@wagner.edu",hcp:"",
   ac:[{n:"Ashley Hower",e:"ashley.hower@wagner.edu"},{n:"Kyle Chambers",e:"kyle.chambers@wagner.edu"},{n:"Grace Coleman",e:"grace.coleman@wagner.edu"}],
   rec25:"21-9",notes:"Won MAAC Championship"},

  {name:"UC Irvine",d:"D1",g:"Women's",l:"Irvine, CA",r:"West Coast US",w:"https://ucirvinesports.com",conf:"Big West",
   hc:"Dan Klatt",hce:"dklatt@uci.edu",hcp:"",
   ac:[{n:"Andrew Rowe",e:"ajrowe@uci.edu"},{n:"Alys Moore",e:"alysw@uci.edu"}],
   rec25:"15-13"},

  {name:"Indiana University",d:"D1",g:"Women's",l:"Bloomington, IN",r:"Midwest US",w:"https://iuhoosiers.com",conf:"CWPA",
   hc:"Taylor McInerney",hce:"taymac@iu.edu",hcp:"",
   ac:[{n:"Zoe Crouch",e:"zjcrouch@iu.edu"},{n:"Zach Graper",e:"zgraper@iu.edu"}],
   rec25:"17-12"},

  {name:"Marist University",d:"D1",g:"Women's",l:"Poughkeepsie, NY",r:"Northeast US",w:"https://goredfoxes.com",conf:"MAAC",
   hc:"",hce:"",hcp:"",
   ac:[],
   rec25:"N/A",notes:"HC vacant — Chris Vidale departed May 2026 for Michigan; replacement not yet announced"},

  // ═══════════════════════════════════════════════════════════════════
  // D1 — MEN'S
  // ═══════════════════════════════════════════════════════════════════

  {name:"UCLA",d:"D1",g:"Men's",l:"Los Angeles, CA",r:"West Coast US",w:"https://uclabruins.com",conf:"MPSF",
   hc:"Adam Wright",hce:"",hcp:"",
   ac:[{n:"Jason Falitz"},{n:"Matt Kubeck"}],
   rec25:"27-2",notes:"Won 2025 NCAA Championship (buzzer-beater over USC)"},

  {name:"Stanford University",d:"D1",g:"Men's",l:"Stanford, CA",r:"West Coast US",w:"https://gostanford.com",conf:"MPSF",
   hc:"Brian Flacks",hce:"bflacks@stanford.edu",hcp:"",
   ac:[{n:"Matt Farmer",e:"mfarmer@stanford.edu"},{n:"Soren Jensen"},{n:"Ben Hallock"}],
   rec25:"18-8"},

  {name:"University of Southern California",d:"D1",g:"Men's",l:"Los Angeles, CA",r:"West Coast US",w:"https://usctrojans.com",conf:"MPSF",
   hc:"Marko Pintaric",hce:"pintaric@usc.edu",hcp:"",
   ac:[{n:"William Grant",e:"william.grant.1@usc.edu"},{n:"Alexandru Bucur",e:"bucurale@usc.edu"}],
   rec25:"23-4",notes:"2025 NCAA Championship runner-up"},

  {name:"University of California, Berkeley",d:"D1",g:"Men's",l:"Berkeley, CA",r:"West Coast US",w:"https://calbears.com",conf:"MPSF",
   hc:"Kirk Everist",hce:"keverist@berkeley.edu",hcp:"",
   ac:[{n:"Jeff Tyrrell",e:"jefftyrrell@berkeley.edu"},{n:"Jakov Belamaric",e:"jbelamaric@berkeley.edu"},{n:"Iosefa Tuiasau"}],
   rec25:"15-8"},

  {name:"UC Santa Barbara",d:"D1",g:"Men's",l:"Santa Barbara, CA",r:"West Coast US",w:"https://ucsbgauchos.com",conf:"Big West",
   hc:"Wolf Wigo",hce:"Wolf.Wigo@athletics.ucsb.edu",hcp:"",
   ac:[{n:"James Wolff",e:"james.wolff@athletics.ucsb.edu"},{n:"Ian Wood"}],
   rec25:"17-14"},

  {name:"Harvard University",d:"D1",g:"Men's",l:"Cambridge, MA",r:"Northeast US",w:"https://gocrimson.com",conf:"CWPA",
   hc:"Ted Minnis",hce:"minnis@fas.harvard.edu",hcp:"",
   ac:[{n:"Jacob Castro",e:"jcastro@fas.harvard.edu"},{n:"Zoe Banks",e:"Zoe_banks@fas.harvard.edu"},{n:"Cory Olcott"}],
   rec25:"20-10"},

  {name:"University of the Pacific",d:"D1",g:"Men's",l:"Stockton, CA",r:"West Coast US",w:"https://pacifictigers.com",conf:"WCC",
   hc:"James Graham",hce:"waterpolo@pacific.edu",hcp:"",
   ac:[{n:"Derek Clappis",e:"waterpolo@pacific.edu"}],
   rec25:"15-9"},

  {name:"Long Beach State",d:"D1",g:"Men's",l:"Long Beach, CA",r:"West Coast US",w:"https://longbeachstate.com",conf:"Big West",
   hc:"Gavin Arroyo",hce:"Gavin.Arroyo@csulb.edu",hcp:"",
   ac:[{n:"Austin Ringheim",e:"Austin.Ringheim@csulb.edu"}],
   rec25:"17-9"},

  {name:"Princeton University",d:"D1",g:"Men's",l:"Princeton, NJ",r:"Northeast US",w:"https://goprincetontigers.com",conf:"CWPA",
   hc:"Dustin Litvak",hce:"dlitvak@princeton.edu",hcp:"",
   ac:[{n:"Bella Baia",e:"bellabaia@princeton.edu"},{n:"Huw Helman",e:"hdhelman@princeton.edu"}],
   rec25:"21-9"},

  {name:"Fordham University",d:"D1",g:"Men's",l:"Bronx, NY",r:"Northeast US",w:"https://fordhamsports.com",conf:"CWPA",
   hc:"Brian Bacharach",hce:"bbacharach@fordham.edu",hcp:"",
   ac:[{n:"Ilija Duretic",e:"iduretic@fordham.edu"}],
   rec25:"26-4",notes:"2025 NCAA Final Four"},

  {name:"Navy",d:"D1",g:"Men's",l:"Annapolis, MD",r:"Northeast US",w:"https://navysports.com",conf:"CWPA",
   hc:"Luis Nicolao",hce:"nicolao@usna.edu",hcp:"",
   ac:[{n:"Jack Finch",e:"jfinch@usna.edu"},{n:"Ken Vincent",e:"kvincent@usna.edu"}],
   rec25:"22-9"},

  {name:"California Baptist University",d:"D1",g:"Men's",l:"Riverside, CA",r:"West Coast US",w:"https://cbulancers.com",conf:"WCC",
   hc:"Kevin Rosa",hce:"krosa@calbaptist.edu",hcp:"",
   ac:[{n:"Zach Lowery",e:"zlowery@calbaptist.edu"}],
   rec25:"24-11",notes:"Won WCC tournament"},

  {name:"UC San Diego",d:"D1",g:"Men's",l:"La Jolla, CA",r:"West Coast US",w:"https://ucsdtritons.com",conf:"Big West",
   hc:"Matt Ustaszewski",hce:"mustaszewski@ucsd.edu",hcp:"",
   ac:[{n:"Arman Momdzhyan",e:"armomdzhyan@ucsd.edu"},{n:"Glenn Busch",e:"gjbusch@ucsd.edu"},{n:"Logan Estes"}],
   rec25:"21-10"},

  {name:"UC Irvine",d:"D1",g:"Men's",l:"Irvine, CA",r:"West Coast US",w:"https://ucirvinesports.com",conf:"Big West",
   hc:"Dan Klatt",hce:"dklatt@uci.edu",hcp:"",
   ac:[{n:"Andrew Rowe",e:"ajrowe@uci.edu"},{n:"Jake Liechty",e:"jliechty@uci.edu"}],
   rec25:"15-12"},

  // ═══════════════════════════════════════════════════════════════════
  // D2 — WOMEN'S
  // ═══════════════════════════════════════════════════════════════════

  {name:"Biola University",d:"D2",g:"Women's",l:"La Mirada, CA",r:"West Coast US",w:"https://biolaeagles.com",conf:"PacWest",
   hc:"Sarah Ramirez",hce:"sarah.m.ramirez@biola.edu",hcp:"562-903-6092",
   ac:[],
   rec25:"N/A"},

  {name:"Cal State Monterey Bay",d:"D2",g:"Women's",l:"Seaside, CA",r:"West Coast US",w:"https://otterathletics.com",conf:"CCAA",
   hc:"Emily Schmit",hce:"eschmit@csumb.edu",hcp:"",
   ac:[],
   rec25:"N/A"},

  {name:"Concordia University Irvine",d:"D2",g:"Women's",l:"Irvine, CA",r:"West Coast US",w:"https://cuieagles.com",conf:"PacWest",
   hc:"Casey Greenawalt",hce:"casey.greenawalt@cui.edu",hcp:"949-214-3221",
   ac:[],
   rec25:"N/A"},

  {name:"Fresno Pacific University",d:"D2",g:"Women's",l:"Fresno, CA",r:"West Coast US",w:"https://athletics.fresno.edu",conf:"PacWest",
   hc:"Kara Pavlovic",hce:"",hcp:"",
   ac:[],
   rec25:"N/A",notes:"Kara Pavlovic named new Women's HC June 2026"},

  {name:"Gannon University",d:"D2",g:"Women's",l:"Erie, PA",r:"Northeast US",w:"https://gannonsports.com",conf:"PSAC",
   hc:"Zarko Sadikovic",hce:"sadikovi002@gannon.edu",hcp:"814-871-5550",
   ac:[],
   rec25:"N/A"},

  {name:"McKendree University",d:"D2",g:"Women's",l:"Lebanon, IL",r:"Midwest US",w:"https://mckendreebearkathletics.com",conf:"GLVC",
   hc:"Alex Figueras",hce:"ajfigueras@mckendree.edu",hcp:"",
   ac:[],
   rec25:"N/A"},

  {name:"Salem University",d:"D2",g:"Women's",l:"Salem, WV",r:"Southeast US",w:"https://saletigers.com",conf:"MEC",
   hc:"Jeff Passwater",hce:"jeff.passwater@salemu.edu",hcp:"",
   ac:[],
   rec25:"N/A"},

  {name:"UC Merced",d:"D2",g:"Women's",l:"Merced, CA",r:"West Coast US",w:"https://ucmbobcats.com",conf:"CCAA",
   hc:"Britt Connell",hce:"brittconnell@ucmerced.edu",hcp:"",
   ac:[],
   rec25:"N/A"},

  // ═══════════════════════════════════════════════════════════════════
  // D2 — MEN'S
  // ═══════════════════════════════════════════════════════════════════

  {name:"Biola University",d:"D2",g:"Men's",l:"La Mirada, CA",r:"West Coast US",w:"https://biolaeagles.com",conf:"PacWest",
   hc:"Jens Cole",hce:"jens.cole@biola.edu",hcp:"562-903-2898",
   ac:[],
   rec25:"N/A"},

  {name:"Concordia University Irvine",d:"D2",g:"Men's",l:"Irvine, CA",r:"West Coast US",w:"https://cuieagles.com",conf:"PacWest",
   hc:"Justin Johnson",hce:"Justin.johnson2@cui.edu",hcp:"949-214-3217",
   ac:[],
   rec25:"N/A"},

  {name:"Fresno Pacific University",d:"D2",g:"Men's",l:"Fresno, CA",r:"West Coast US",w:"https://athletics.fresno.edu",conf:"PacWest",
   hc:"Jonathan Miller",hce:"jonathan.miller@fresno.edu",hcp:"",
   ac:[],
   rec25:"N/A"},

  {name:"Gannon University",d:"D2",g:"Men's",l:"Erie, PA",r:"Northeast US",w:"https://gannonsports.com",conf:"PSAC",
   hc:"Zarko Sadikovic",hce:"sadikovi002@gannon.edu",hcp:"814-871-5550",
   ac:[],
   rec25:"N/A",notes:"Coaches both Men's and Women's"},

  {name:"McKendree University",d:"D2",g:"Men's",l:"Lebanon, IL",r:"Midwest US",w:"https://mckendreebearkathletics.com",conf:"GLVC",
   hc:"Miguel Figueras",hce:"mlfigueras@mckendree.edu",hcp:"",
   ac:[],
   rec25:"N/A"},

  {name:"Salem University",d:"D2",g:"Men's",l:"Salem, WV",r:"Southeast US",w:"https://saletigers.com",conf:"MEC",
   hc:"Robert Bullion",hce:"RBullion@salemu.edu",hcp:"304-326-1475",
   ac:[],
   rec25:"N/A"},

  {name:"UC Merced",d:"D2",g:"Men's",l:"Merced, CA",r:"West Coast US",w:"https://ucmbobcats.com",conf:"CCAA",
   hc:"Hannah Ellett",hce:"hellett@ucmerced.edu",hcp:"",
   ac:[],
   rec25:"N/A"},

  // ═══════════════════════════════════════════════════════════════════
  // D3 — WOMEN'S  (primarily SCIAC + select others)
  // ═══════════════════════════════════════════════════════════════════

  // — SCIAC —
  {name:"California Lutheran University",d:"D3",g:"Women's",l:"Thousand Oaks, CA",r:"West Coast US",w:"https://callutheranregals.com",conf:"SCIAC",
   hc:"Tim Settem",hce:"tsettem@callutheran.edu",hcp:"805-493-3734",
   ac:[],
   rec25:"N/A",notes:"Coaches both Men's and Women's"},

  {name:"Chapman University",d:"D3",g:"Women's",l:"Orange, CA",r:"West Coast US",w:"https://chapmanathletics.com",conf:"SCIAC",
   hc:"Eric Ploessel",hce:"ploessel@chapman.edu",hcp:"714-532-6034",
   ac:[],
   rec25:"N/A",notes:"Coaches both Men's and Women's"},

  {name:"Claremont-Mudd-Scripps",d:"D3",g:"Women's",l:"Claremont, CA",r:"West Coast US",w:"https://cmsathletics.org",conf:"SCIAC",
   hc:"Greg Lonzo",hce:"greg.lonzo@cms.claremont.edu",hcp:"909-607-4590",
   ac:[],
   rec25:"N/A",notes:"Coaches both Men's and Women's"},

  {name:"Occidental College",d:"D3",g:"Women's",l:"Los Angeles, CA",r:"West Coast US",w:"https://oxyathletics.com",conf:"SCIAC",
   hc:"Lindsey Garcia",hce:"lgarcia5@oxy.edu",hcp:"323-259-2984",
   ac:[],
   rec25:"N/A",notes:"Coaches both Men's and Women's"},

  {name:"Pomona-Pitzer Colleges",d:"D3",g:"Women's",l:"Claremont, CA",r:"West Coast US",w:"https://sagehensathletics.com",conf:"SCIAC",
   hc:"Alex Rodriguez",hce:"alexander.rodriguez@pomona.edu",hcp:"909-607-4484",
   ac:[],
   rec25:"N/A",notes:"Coaches both Men's and Women's"},

  {name:"University of La Verne",d:"D3",g:"Women's",l:"La Verne, CA",r:"West Coast US",w:"https://laverneathletics.com",conf:"SCIAC",
   hc:"Robert Echeverria",hce:"recheverria@laverne.edu",hcp:"909-448-1590",
   ac:[],
   rec25:"N/A",notes:"Coaches both Men's and Women's"},

  {name:"University of Redlands",d:"D3",g:"Women's",l:"Redlands, CA",r:"West Coast US",w:"https://redlandsathletics.com",conf:"SCIAC",
   hc:"Tamara Perea",hce:"tamara_perea@redlands.edu",hcp:"",
   ac:[],
   rec25:"N/A"},

  {name:"Whittier College",d:"D3",g:"Women's",l:"Whittier, CA",r:"West Coast US",w:"https://athletics.whittier.edu",conf:"SCIAC",
   hc:"Preslav Djippov",hce:"pdjippov@whittier.edu",hcp:"562-907-4916",
   ac:[],
   rec25:"N/A",notes:"Coaches both Men's and Women's"},

  {name:"California Institute of Technology",d:"D3",g:"Women's",l:"Pasadena, CA",r:"West Coast US",w:"https://gobeaverathletics.com",conf:"SCIAC",
   hc:"Jon Bonafede",hce:"bonafede@caltech.edu",hcp:"626-395-3261",
   ac:[],
   rec25:"N/A",notes:"Coaches both Men's and Women's"},

  // — Other D3 Women's —
  {name:"Connecticut College",d:"D3",g:"Women's",l:"New London, CT",r:"Northeast US",w:"https://conncollathletics.com",conf:"NESCAC",
   hc:"Matt Anderson",hce:"manders8@conncoll.edu",hcp:"860-439-2572",
   ac:[],
   rec25:"N/A",notes:"Coaches both Men's and Women's"},

  {name:"Macalester College",d:"D3",g:"Women's",l:"Saint Paul, MN",r:"Midwest US",w:"https://macathletics.com",conf:"MIAC",
   hc:"Scott Reed",hce:"sreed2@macalester.edu",hcp:"651-696-6471",
   ac:[],
   rec25:"N/A"},

  {name:"Carthage College",d:"D3",g:"Women's",l:"Kenosha, WI",r:"Midwest US",w:"https://athletics.carthage.edu",conf:"CCIW",
   hc:"Seth Hughes",hce:"shughes@carthage.edu",hcp:"262-551-5924",
   ac:[],
   rec25:"N/A"},

  {name:"Grove City College",d:"D3",g:"Women's",l:"Grove City, PA",r:"Northeast US",w:"https://wolfpacksports.com",conf:"PAC",
   hc:"Jocelyn Bernhardt",hce:"bernhardtjr@gcc.edu",hcp:"724-450-4013",
   ac:[],
   rec25:"N/A"},

  {name:"Denison University",d:"D3",g:"Women's",l:"Granville, OH",r:"Midwest US",w:"https://denisonathletics.com",conf:"NCAC",
   hc:"Tim Sherwood",hce:"sherwoodt@denison.edu",hcp:"740-587-5073",
   ac:[],
   rec25:"N/A",notes:"New program 2025"},

  {name:"Austin College",d:"D3",g:"Women's",l:"Sherman, TX",r:"South US",w:"https://athletics.austincollege.edu",conf:"SCAC",
   hc:"Mark Lawrence",hce:"mlawrence@austincollege.edu",hcp:"903-813-2003",
   ac:[],
   rec25:"N/A",notes:"Coaches both Men's and Women's"},

  {name:"Augustana College (IL)",d:"D3",g:"Women's",l:"Rock Island, IL",r:"Midwest US",w:"https://augustanaathletics.com",conf:"CCIW",
   hc:"Ryan Pryor",hce:"ryanpryor@augustana.edu",hcp:"",
   ac:[],
   rec25:"N/A"},

  {name:"Wheaton College (MA)",d:"D3",g:"Women's",l:"Norton, MA",r:"Northeast US",w:"https://athletics.wheatoncollege.edu",conf:"NEWMAC",
   hc:"George Ladd",hce:"ladd_george@wheatoncollege.edu",hcp:"",
   ac:[],
   rec25:"N/A"},

  // ═══════════════════════════════════════════════════════════════════
  // D3 — MEN'S
  // ═══════════════════════════════════════════════════════════════════

  // — SCIAC —
  {name:"California Lutheran University",d:"D3",g:"Men's",l:"Thousand Oaks, CA",r:"West Coast US",w:"https://callutheranregals.com",conf:"SCIAC",
   hc:"Tim Settem",hce:"tsettem@callutheran.edu",hcp:"805-493-3734",
   ac:[],
   rec25:"N/A"},

  {name:"Chapman University",d:"D3",g:"Men's",l:"Orange, CA",r:"West Coast US",w:"https://chapmanathletics.com",conf:"SCIAC",
   hc:"Eric Ploessel",hce:"ploessel@chapman.edu",hcp:"714-532-6034",
   ac:[],
   rec25:"N/A"},

  {name:"Claremont-Mudd-Scripps",d:"D3",g:"Men's",l:"Claremont, CA",r:"West Coast US",w:"https://cmsathletics.org",conf:"SCIAC",
   hc:"Greg Lonzo",hce:"greg.lonzo@cms.claremont.edu",hcp:"909-607-4590",
   ac:[],
   rec25:"N/A"},

  {name:"Occidental College",d:"D3",g:"Men's",l:"Los Angeles, CA",r:"West Coast US",w:"https://oxyathletics.com",conf:"SCIAC",
   hc:"Lindsey Garcia",hce:"lgarcia5@oxy.edu",hcp:"323-259-2984",
   ac:[],
   rec25:"N/A"},

  {name:"Pomona-Pitzer Colleges",d:"D3",g:"Men's",l:"Claremont, CA",r:"West Coast US",w:"https://sagehensathletics.com",conf:"SCIAC",
   hc:"Alex Rodriguez",hce:"alexander.rodriguez@pomona.edu",hcp:"909-607-4484",
   ac:[],
   rec25:"N/A"},

  {name:"University of La Verne",d:"D3",g:"Men's",l:"La Verne, CA",r:"West Coast US",w:"https://laverneathletics.com",conf:"SCIAC",
   hc:"Robert Echeverria",hce:"recheverria@laverne.edu",hcp:"909-448-1590",
   ac:[],
   rec25:"N/A"},

  {name:"University of Redlands",d:"D3",g:"Men's",l:"Redlands, CA",r:"West Coast US",w:"https://redlandsathletics.com",conf:"SCIAC",
   hc:"Ryan Hall",hce:"ryan_hall@redlands.edu",hcp:"909-748-8396",
   ac:[],
   rec25:"N/A"},

  {name:"Whittier College",d:"D3",g:"Men's",l:"Whittier, CA",r:"West Coast US",w:"https://athletics.whittier.edu",conf:"SCIAC",
   hc:"Preslav Djippov",hce:"pdjippov@whittier.edu",hcp:"562-907-4916",
   ac:[],
   rec25:"N/A"},

  {name:"California Institute of Technology",d:"D3",g:"Men's",l:"Pasadena, CA",r:"West Coast US",w:"https://gobeaverathletics.com",conf:"SCIAC",
   hc:"Jon Bonafede",hce:"bonafede@caltech.edu",hcp:"626-395-3261",
   ac:[],
   rec25:"N/A"},

  // — Other D3 Men's —
  {name:"Connecticut College",d:"D3",g:"Men's",l:"New London, CT",r:"Northeast US",w:"https://conncollathletics.com",conf:"NESCAC",
   hc:"Matt Anderson",hce:"manders8@conncoll.edu",hcp:"860-439-2572",
   ac:[],
   rec25:"N/A"},

  {name:"Johns Hopkins University",d:"D3",g:"Men's",l:"Baltimore, MD",r:"Northeast US",w:"https://hopkinssports.com",conf:"Centennial",
   hc:"Max Schlegel",hce:"mschleg4@jhu.edu",hcp:"410-516-7490",
   ac:[],
   rec25:"N/A"},

  {name:"Massachusetts Institute of Technology",d:"D3",g:"Men's",l:"Cambridge, MA",r:"Northeast US",w:"https://athletics.mit.edu",conf:"NEWMAC",
   hc:"Alyssa Diacono",hce:"adiacono@mit.edu",hcp:"",
   ac:[],
   rec25:"N/A"},

  {name:"Washington & Jefferson College",d:"D3",g:"Men's",l:"Washington, PA",r:"Northeast US",w:"https://athletics.washjeff.edu",conf:"PAC",
   hc:"Nikola Malezanov",hce:"nmalezanov@washjeff.edu",hcp:"",
   ac:[],
   rec25:"N/A"},

  {name:"Wheaton College (MA)",d:"D3",g:"Men's",l:"Norton, MA",r:"Northeast US",w:"https://athletics.wheatoncollege.edu",conf:"NEWMAC",
   hc:"George Ladd",hce:"ladd_george@wheatoncollege.edu",hcp:"",
   ac:[],
   rec25:"N/A"},

  {name:"Augustana College (IL)",d:"D3",g:"Men's",l:"Rock Island, IL",r:"Midwest US",w:"https://augustanaathletics.com",conf:"CCIW",
   hc:"Ryan Pryor",hce:"ryanpryor@augustana.edu",hcp:"",
   ac:[],
   rec25:"N/A"},

  {name:"Austin College",d:"D3",g:"Men's",l:"Sherman, TX",r:"South US",w:"https://athletics.austincollege.edu",conf:"SCAC",
   hc:"Mark Lawrence",hce:"mlawrence@austincollege.edu",hcp:"903-813-2003",
   ac:[],
   rec25:"N/A"},

  {name:"Penn State Behrend",d:"D3",g:"Men's",l:"Erie, PA",r:"Northeast US",w:"https://psberiedsports.com",conf:"AMCC",
   hc:"",hce:"ekm5472@psu.edu",hcp:"",
   ac:[],
   rec25:"N/A",notes:"HC position VACANT — contact Emily McNaughton (ekm5472@psu.edu) re: status"},

];

// ── Summary counts ────────────────────────────────────────────────────────────
// D1: 17 Women's + 14 Men's = 31 programs
// D2:  8 Women's +  7 Men's = 15 programs
// D3: 15 Women's + 14 Men's = 29 programs
// Total: 75 programs

if (typeof module !== 'undefined') module.exports = { WATERPOLO_DB };
