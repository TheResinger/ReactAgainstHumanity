const mongoose = require("mongoose");
const BlackCard = require("../models/BlackCard");
const WhiteCard = require("../models/WhiteCard");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactagainsthumanity");

const blackCardSeed = [
  {
    "text": "Why can't I sleep at night?",
    "pick": 1,
    "expansion": "BaseGame"

  },
  {
    "text": "I got 99 problems but ____ ain't one.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "What's a girl's best friend?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "What's that smell?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "This is the way the world ends / This is the way the world ends / Not with a bang but with ____.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "What is Batman's guilty pleasure?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "TSA guidelines now prohibit ____ on airplanes.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "What ended my last relationship?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "MTV's new reality show features eight washed-up celebrities living with ____.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "I drink to forget ____.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "I'm sorry, Professor, but I couldn't complete my homework because of ____.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "Alternative medicine is now embracing the curative powers of ____.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "What's that sound?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "What's the next Happy Meal toy?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "It's a pity that kids these days are all getting involved with ____.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "In the new Disney Channel Original Movie, Hannah Montana struggles with ____ for the first time.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "____. That's how I want to die.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "What does Dick Cheney prefer?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "What's the most emo?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "Instead of coal, Santa now gives the bad children ____.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "Next from J.K. Rowling: Harry Potter and the Chamber of ____.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "A romantic, candlelit dinner would be incomplete without ____.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "White people like ____.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "____. Betcha can't have just one!",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "War! What is it good for?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "BILLY MAYS HERE FOR ____.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "____. High five, bro.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "During sex, I like to think about ____.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "What did I bring back from Mexico?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "What are my parents hiding from me?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "What will always get you laid?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "What would grandma find disturbing, yet oddly charming?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "What did the U.S. airdrop to the children of Afghanistan?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "What helps Obama unwind?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "What's there a ton of in heaven?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "Major League Baseball has banned ____ for giving players an unfair advantage.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "When I am a billionaire, I shall erect a 50-foot statue to commemorate ____.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "What's the new fad diet?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "When I am the President of the United States, I will create the Department of ____.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "____. It's a trap!",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "How am I maintaining my relationship status?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "What will I bring back in time to convince people that I am a powerful wizard?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "While the United States raced the Soviet Union to the moon, the Mexican government funneled millions of pesos into research on ____.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "Coming to Broadway this season, ____: The Musical.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "What's my secret power?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "What gives me uncontrollable gas?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "But before I kill you, Mr. Bond, I must show you ____.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "What never fails to liven up the party?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "What am I giving up for Lent?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "What do old people smell like? ",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "The class field trip was completely ruined by ____.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "When Pharaoh remained unmoved, Moses called down a plague of ____.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "I do not know with which weapons World War III will be fought, but World War IV will be fought with ____.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "What's Teach for America using to inspire inner city students to succeed?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "In Michael Jackson's final moments, he thought about ____.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "Why do I hurt all over?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "Studies show that lab rats navigate mazes 50% faster after being exposed to ____.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "Why am I sticky?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "What's my anti-drug?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "And the Academy Award for ____ goes to ____.",
    "pick": 2
  },
  {
    "text": "For my next trick, I will pull ____ out of ____.",
    "pick": 2
  },
  {
    "text": "____: Good to the last drop.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "What did Vin Diesel eat for dinner?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "____: kid-tested, mother-approved.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "What gets better with age?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "I never truly understood ____ until I encountered ____.",
    "pick": 2
  },
  {
    "text": "Rumor has it that Vladimir Putin's favorite delicacy is ____ stuffed with ____.",
    "pick": 2
  },
  {
    "text": "Lifetime presents ____, the story of ____.",
    "pick": 2
  },
  {
    "text": "Make a haiku.",
    "pick": 3
  },
  {
    "text": "In M. Night Shyamalan's new movie, Bruce Willis discovers that ____ had really been ____ all along.",
    "pick": 2
  },
  {
    "text": "____ is a slippery slope that leads to ____.",
    "pick": 2
  },
  {
    "text": "In a world ravaged by ____, our only solace is ____.",
    "pick": 2
  },
  {
    "text": "That's right, I killed ____. How, you ask? ____.",
    "pick": 2
  },
  {
    "text": "When I was tripping on acid, ____ turned into ____.",
    "pick": 2
  },
  {
    "text": "____ + ____ = ____.",
    "pick": 3
  },
  {
    "text": "What's the next superhero/sidekick duo?",
    "pick": 2
  },
  {
    "text": "Dear Abby,I'm having some trouble with ____ and would like your advice.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "After the earthquake, Sean Penn brought ____ to the people of Haiti.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "In L.A. County Jail, word is you can trade 200 cigarettes for ____.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "Maybe she's born with it. Maybe it's ____.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "Life for American Indians was forever changed when the White Man introduced them to ____.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "Next on ESPN2, the World Series of ____.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "Step 1: ____. Step 2: ____. Step 3: Profit.",
    "pick": 2
  },
  {
    "text": "Here is the church Here is the steeple Open the doors And there is ____.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "How did I lose my virginity?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "During his childhood, Salvador Dali produced hundreds of paintings of ____.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "In 1,000 years, when paper money is a distant memory, how will we pay for goods and services?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "What don't you want to find in your Kung Pao chicken?",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "The Smithsonian Museum of Natural History has just opened an exhibit on ____.",
    "pick": 1,
    "expansion": "BaseGame"
  },
  {
    "text": "Daddy, why is Mommy crying?",
    "pick": 1,
    "expansion": "BaseGame"
  }
];

const whiteCardSeed = [
  {
    "text": "Coat hanger abortions.",
    "expansion": "BaseGame"
  },
  {
    "text": "Man meat.",
    "expansion": "BaseGame"
  },
  {
    "text": "Autocannibalism.",
    "expansion": "BaseGame"
  },
  {
    "text": "Vigorous jazz hands.",
    "expansion": "BaseGame"
  },
  {
    "text": "Flightless birds.",
    "expansion": "BaseGame"
  },
  {
    "text": "Pictures of boobs.",
    "expansion": "BaseGame"
  },
  {
    "text": "Doing the right thing.",
    "expansion": "BaseGame"
  },
  {
    "text": "The violation of our most basic human rights.",
    "expansion": "BaseGame"
  },
  {
    "text": "Viagra.",
    "expansion": "BaseGame"
  },
  {
    "text": "Self-loathing.",
    "expansion": "BaseGame"
  },
  {
    "text": "Spectacular abs.",
    "expansion": "BaseGame"
  },
  {
    "text": "A balanced breakfast.",
    "expansion": "BaseGame"
  },
  {
    "text": "Roofies.",
    "expansion": "BaseGame"
  },
  {
    "text": "Concealing a boner.",
    "expansion": "BaseGame"
  },
  {
    "text": "Amputees.",
    "expansion": "BaseGame"
  },
  {
    "text": "The Big Bang.",
    "expansion": "BaseGame"
  },
  {
    "text": "Former President George W. Bush.",
    "expansion": "BaseGame"
  },
  {
    "text": "The Rev. Dr. Martin Luther King, Jr.",
    "expansion": "BaseGame"
  },
  {
    "text": "Smegma.",
    "expansion": "BaseGame"
  },
  {
    "text": "Being marginalized.",
    "expansion": "BaseGame"
  },
  {
    "text": "Cuddling.",
    "expansion": "BaseGame"
  },
  {
    "text": "Laying an egg.",
    "expansion": "BaseGame"
  },
  {
    "text": "The Pope.",
    "expansion": "BaseGame"
  },
  {
    "text": "Aaron Burr.",
    "expansion": "BaseGame"
  },
  {
    "text": "Genital piercings.",
    "expansion": "BaseGame"
  },
  {
    "text": "Fingering.",
    "expansion": "BaseGame"
  },
  {
    "text": "A bleached asshole.",
    "expansion": "BaseGame"
  },
  {
    "text": "Horse meat.",
    "expansion": "BaseGame"
  },
  {
    "text": "Fear itself.",
    "expansion": "BaseGame"
  },
  {
    "text": "Science.",
    "expansion": "BaseGame"
  },
  {
    "text": "Elderly Japanese men.",
    "expansion": "BaseGame"
  },
  {
    "text": "Stranger danger.",
    "expansion": "BaseGame"
  },
  {
    "text": "The terrorists.",
    "expansion": "BaseGame"
  },
  {
    "text": "Praying the gay away.",
    "expansion": "BaseGame"
  },
  {
    "text": "Same-sex ice dancing.",
    "expansion": "BaseGame"
  },
  {
    "text": "Ethnic cleansing.",
    "expansion": "BaseGame"
  },
  {
    "text": "Cheating in the Special Olympics.",
    "expansion": "BaseGame"
  },
  {
    "text": "German dungeon porn.",
    "expansion": "BaseGame"
  },
  {
    "text": "Bingeing and purging.",
    "expansion": "BaseGame"
  },
  {
    "text": "Making a pouty face.",
    "expansion": "BaseGame"
  },
  {
    "text": "William Shatner.",
    "expansion": "BaseGame"
  },
  {
    "text": "Heteronormativity.",
    "expansion": "BaseGame"
  },
  {
    "text": "Nickelback.",
    "expansion": "BaseGame"
  },
  {
    "text": "Tom Cruise.",
    "expansion": "BaseGame"
  },
  {
    "text": "The profoundly handicapped.",
    "expansion": "BaseGame"
  },
  {
    "text": "The placenta.",
    "expansion": "BaseGame"
  },
  {
    "text": "Chainsaws for hands.",
    "expansion": "BaseGame"
  },
  {
    "text": "Arnold Schwarzenegger.",
    "expansion": "BaseGame"
  },
  {
    "text": "An icepick lobotomy.",
    "expansion": "BaseGame"
  },
  {
    "text": "Goblins.",
    "expansion": "BaseGame"
  },
  {
    "text": "Object permanence.",
    "expansion": "BaseGame"
  },
  {
    "text": "Dying.",
    "expansion": "BaseGame"
  },
  {
    "text": "Foreskin.",
    "expansion": "BaseGame"
  },
  {
    "text": "A falcon with a cap on its head.",
    "expansion": "BaseGame"
  },
  {
    "text": "Hormone injections.",
    "expansion": "BaseGame"
  },
  {
    "text": "Dying of dysentery.",
    "expansion": "BaseGame"
  },
  {
    "text": "Sexy pillow fights.",
    "expansion": "BaseGame"
  },
  {
    "text": "The invisible hand.",
    "expansion": "BaseGame"
  },
  {
    "text": "A really cool hat.",
    "expansion": "BaseGame"
  },
  {
    "text": "Sean Penn.",
    "expansion": "BaseGame"
  },
  {
    "text": "Heartwarming orphans.",
    "expansion": "BaseGame"
  },
  {
    "text": "The clitoris.",
    "expansion": "BaseGame"
  },
  {
    "text": "The Three-Fifths compromise.",
    "expansion": "BaseGame"
  },
  {
    "text": "A sad handjob.",
    "expansion": "BaseGame"
  },
  {
    "text": "Men.",
    "expansion": "BaseGame"
  },
  {
    "text": "Historically black colleges.",
    "expansion": "BaseGame"
  },
  {
    "text": "A micropenis.",
    "expansion": "BaseGame"
  },
  {
    "text": "Raptor attacks.",
    "expansion": "BaseGame"
  },
  {
    "text": "Agriculture.",
    "expansion": "BaseGame"
  },
  {
    "text": "Vikings.",
    "expansion": "BaseGame"
  },
  {
    "text": "Pretending to care.",
    "expansion": "BaseGame"
  },
  {
    "text": "The Underground Railroad.",
    "expansion": "BaseGame"
  },
  {
    "text": "My humps.",
    "expansion": "BaseGame"
  },
  {
    "text": "Being a dick to children.",
    "expansion": "BaseGame"
  },
  {
    "text": "Geese.",
    "expansion": "BaseGame"
  },
  {
    "text": "Bling.",
    "expansion": "BaseGame"
  },
  {
    "text": "Sniffing glue.",
    "expansion": "BaseGame"
  },
  {
    "text": "The South.",
    "expansion": "BaseGame"
  },
  {
    "text": "An Oedipus complex.",
    "expansion": "BaseGame"
  },
  {
    "text": "Eating all of the cookies before the AIDS bake-sale.",
    "expansion": "BaseGame"
  },
  {
    "text": "Sexting.",
    "expansion": "BaseGame"
  },
  {
    "text": "YOU MUST CONSTRUCT ADDITIONAL PYLONS.",
    "expansion": "BaseGame"
  },
  {
    "text": "Mutually-assured destruction.",
    "expansion": "BaseGame"
  },
  {
    "text": "Sunshine and rainbows.",
    "expansion": "BaseGame"
  },
  {
    "text": "Count Chocula.",
    "expansion": "BaseGame"
  },
  {
    "text": "Sharing needles.",
    "expansion": "BaseGame"
  },
  {
    "text": "Being rich.",
    "expansion": "BaseGame"
  },
  {
    "text": "Skeletor.",
    "expansion": "BaseGame"
  },
  {
    "text": "A sausage festival.",
    "expansion": "BaseGame"
  },
  {
    "text": "Michael Jackson.",
    "expansion": "BaseGame"
  },
  {
    "text": "Emotions.",
    "expansion": "BaseGame"
  },
  {
    "text": "Farting and walking away.",
    "expansion": "BaseGame"
  },
  {
    "text": "The Chinese gymnastics team.",
    "expansion": "BaseGame"
  },
  {
    "text": "Necrophilia.",
    "expansion": "BaseGame"
  },
  {
    "text": "Spontaneous human combustion.",
    "expansion": "BaseGame"
  },
  {
    "text": "Yeast.",
    "expansion": "BaseGame"
  },
  {
    "text": "Leaving an awkward voicemail.",
    "expansion": "BaseGame"
  },
  {
    "text": "Dick Cheney.",
    "expansion": "BaseGame"
  },
  {
    "text": "White people.",
    "expansion": "BaseGame"
  },
  {
    "text": "Penis envy.",
    "expansion": "BaseGame"
  },
  {
    "text": "Teaching a robot to love.",
    "expansion": "BaseGame"
  },
  {
    "text": "Sperm whales.",
    "expansion": "BaseGame"
  },
  {
    "text": "Scrubbing under the folds.",
    "expansion": "BaseGame"
  },
  {
    "text": "Panda sex.",
    "expansion": "BaseGame"
  },
  {
    "text": "Whipping it out.",
    "expansion": "BaseGame"
  },
  {
    "text": "Catapults.",
    "expansion": "BaseGame"
  },
  {
    "text": "Masturbation.",
    "expansion": "BaseGame"
  },
  {
    "text": "Natural selection.",
    "expansion": "BaseGame"
  },
  {
    "text": "Opposable thumbs.",
    "expansion": "BaseGame"
  },
  {
    "text": "A sassy black woman.",
    "expansion": "BaseGame"
  },
  {
    "text": "AIDS.",
    "expansion": "BaseGame"
  },
  {
    "text": "The KKK.",
    "expansion": "BaseGame"
  },
  {
    "text": "Figgy pudding.",
    "expansion": "BaseGame"
  },
  {
    "text": "Seppuku.",
    "expansion": "BaseGame"
  },
  {
    "text": "Gandhi.",
    "expansion": "BaseGame"
  },
  {
    "text": "Preteens.",
    "expansion": "BaseGame"
  },
  {
    "text": "Toni Morrison's vagina.",
    "expansion": "BaseGame"
  },
  {
    "text": "Five-Dollar Footlongs.",
    "expansion": "BaseGame"
  },
  {
    "text": "Land mines.",
    "expansion": "BaseGame"
  },
  {
    "text": "A sea of troubles.",
    "expansion": "BaseGame"
  },
  {
    "text": "A zesty breakfast burrito.",
    "expansion": "BaseGame"
  },
  {
    "text": "Christopher Walken.",
    "expansion": "BaseGame"
  },
  {
    "text": "Friction.",
    "expansion": "BaseGame"
  },
  {
    "text": "Balls.",
    "expansion": "BaseGame"
  },
  {
    "text": "Dental dams.",
    "expansion": "BaseGame"
  },
  {
    "text": "A can of whoop-ass.",
    "expansion": "BaseGame"
  },
  {
    "text": "A tiny horse.",
    "expansion": "BaseGame"
  },
  {
    "text": "Waiting 'til marriage.",
    "expansion": "BaseGame"
  },
  {
    "text": "Authentic Mexican cuisine.",
    "expansion": "BaseGame"
  },
  {
    "text": "Genghis Khan.",
    "expansion": "BaseGame"
  },
  {
    "text": "Old-people smell.",
    "expansion": "BaseGame"
  },
  {
    "text": "Feeding Rosie O'Donnell.",
    "expansion": "BaseGame"
  },
  {
    "text": "Pixelated bukkake.",
    "expansion": "BaseGame"
  },
  {
    "text": "Friends with benefits.",
    "expansion": "BaseGame"
  },
  {
    "text": "The token minority.",
    "expansion": "BaseGame"
  },
  {
    "text": "The Tempur-Pedic Swedish Sleep System.",
    "expansion": "BaseGame"
  },
  {
    "text": "A thermonuclear detonation.",
    "expansion": "BaseGame"
  },
  {
    "text": "Take-backsies.",
    "expansion": "BaseGame"
  },
  {
    "text": "The Rapture.",
    "expansion": "BaseGame"
  },
  {
    "text": "A cooler full of organs.",
    "expansion": "BaseGame"
  },
  {
    "text": "Sweet, sweet vengeance.",
    "expansion": "BaseGame"
  },
  {
    "text": "RoboCop.",
    "expansion": "BaseGame"
  },
  {
    "text": "Keanu Reeves.",
    "expansion": "BaseGame"
  },
  {
    "text": "Drinking alone.",
    "expansion": "BaseGame"
  },
  {
    "text": "Giving 110%.",
    "expansion": "BaseGame"
  },
  {
    "text": "Flesh-eating bacteria.",
    "expansion": "BaseGame"
  },
  {
    "text": "The American Dream.",
    "expansion": "BaseGame"
  },
  {
    "text": "Taking off your shirt.",
    "expansion": "BaseGame"
  },
  {
    "text": "Me time.",
    "expansion": "BaseGame"
  },
  {
    "text": "A murder most foul.",
    "expansion": "BaseGame"
  },
  {
    "text": "The inevitable heat death of the universe.",
    "expansion": "BaseGame"
  },
  {
    "text": "The folly of man.",
    "expansion": "BaseGame"
  },
  {
    "text": "That thing that electrocutes your abs.",
    "expansion": "BaseGame"
  },
  {
    "text": "Cards Against Humanity.",
    "expansion": "BaseGame"
  },
  {
    "text": "Fiery poops.",
    "expansion": "BaseGame"
  },
  {
    "text": "Poor people.",
    "expansion": "BaseGame"
  },
  {
    "text": "Edible underpants.",
    "expansion": "BaseGame"
  },
  {
    "text": "Britney Spears at 55.",
    "expansion": "BaseGame"
  },
  {
    "text": "All-you-can-eat shrimp for $4.99.",
    "expansion": "BaseGame"
  },
  {
    "text": "Pooping back and forth. Forever.",
    "expansion": "BaseGame"
  },
  {
    "text": "Fancy Feast.",
    "expansion": "BaseGame"
  },
  {
    "text": "Jewish fraternities.",
    "expansion": "BaseGame"
  },
  {
    "text": "Being a motherfucking sorcerer.",
    "expansion": "BaseGame"
  },
  {
    "text": "Pulling out.",
    "expansion": "BaseGame"
  },
  {
    "text": "Picking up girls at the abortion clinic.",
    "expansion": "BaseGame"
  },
  {
    "text": "The homosexual agenda.",
    "expansion": "BaseGame"
  },
  {
    "text": "The Holy Bible.",
    "expansion": "BaseGame"
  },
  {
    "text": "Passive-agression.",
    "expansion": "BaseGame"
  },
  {
    "text": "Ronald Reagan.",
    "expansion": "BaseGame"
  },
  {
    "text": "Vehicular manslaughter.",
    "expansion": "BaseGame"
  },
  {
    "text": "Nipple blades.",
    "expansion": "BaseGame"
  },
  {
    "text": "Assless chaps.",
    "expansion": "BaseGame"
  },
  {
    "text": "Full frontal nudity.",
    "expansion": "BaseGame"
  },
  {
    "text": "Hulk Hogan.",
    "expansion": "BaseGame"
  },
  {
    "text": "Daddy issues.",
    "expansion": "BaseGame"
  },
  {
    "text": "The hardworking Mexican.",
    "expansion": "BaseGame"
  },
  {
    "text": "Natalie Portman.",
    "expansion": "BaseGame"
  },
  {
    "text": "Waking up half-naked in a Denny's parking lot.",
    "expansion": "BaseGame"
  },
  {
    "text": "God.",
    "expansion": "BaseGame"
  },
  {
    "text": "Sean Connery.",
    "expansion": "BaseGame"
  },
  {
    "text": "Saxophone solos.",
    "expansion": "BaseGame"
  },
  {
    "text": "Gloryholes.",
    "expansion": "BaseGame"
  },
  {
    "text": "The World of Warcraft.",
    "expansion": "BaseGame"
  },
  {
    "text": "Homeless people.",
    "expansion": "BaseGame"
  },
  {
    "text": "Scalping.",
    "expansion": "BaseGame"
  },
  {
    "text": "Darth Vader.",
    "expansion": "BaseGame"
  },
  {
    "text": "Eating the last known bison.",
    "expansion": "BaseGame"
  },
  {
    "text": "Guys who don't call.",
    "expansion": "BaseGame"
  },
  {
    "text": "Hot Pockets.",
    "expansion": "BaseGame"
  },
  {
    "text": "A time travel paradox.",
    "expansion": "BaseGame"
  },
  {
    "text": "The milk man.",
    "expansion": "BaseGame"
  },
  {
    "text": "Testicular torsion.",
    "expansion": "BaseGame"
  },
  {
    "text": "Dropping a chandelier on your enemies and riding the rope up.",
    "expansion": "BaseGame"
  },
  {
    "text": "World peace.",
    "expansion": "BaseGame"
  },
  {
    "text": "A salty surprise.",
    "expansion": "BaseGame"
  },
  {
    "text": "Poorly-timed Holocaust jokes.",
    "expansion": "BaseGame"
  },
  {
    "text": "Smallpox blankets.",
    "expansion": "BaseGame"
  },
  {
    "text": "Licking things to claim them as your own.",
    "expansion": "BaseGame"
  },
  {
    "text": "The heart of a child.",
    "expansion": "BaseGame"
  },
  {
    "text": "Robert Downey, Jr.",
    "expansion": "BaseGame"
  },
  {
    "text": "Lockjaw.",
    "expansion": "BaseGame"
  },
  {
    "text": "Eugenics.",
    "expansion": "BaseGame"
  },
  {
    "text": "A good sniff.",
    "expansion": "BaseGame"
  },
  {
    "text": "Friendly fire.",
    "expansion": "BaseGame"
  },
  {
    "text": "The taint; the grundle; the fleshy fun-bridge.",
    "expansion": "BaseGame"
  },
  {
    "text": "Wearing underwear inside-out to avoid doing laundry.",
    "expansion": "BaseGame"
  },
  {
    "text": "Hurricane Katrina.",
    "expansion": "BaseGame"
  },
  {
    "text": "Free samples.",
    "expansion": "BaseGame"
  },
  {
    "text": "Jerking off into a pool of children's tears.",
    "expansion": "BaseGame"
  },
  {
    "text": "A foul mouth.",
    "expansion": "BaseGame"
  },
  {
    "text": "The glass ceiling.",
    "expansion": "BaseGame"
  },
  {
    "text": "Republicans.",
    "expansion": "BaseGame"
  },
  {
    "text": "Explosions.",
    "expansion": "BaseGame"
  },
  {
    "text": "Michelle Obama's arms.",
    "expansion": "BaseGame"
  },
  {
    "text": "Getting really high.",
    "expansion": "BaseGame"
  },
  {
    "text": "Attitude.",
    "expansion": "BaseGame"
  },
  {
    "text": "Sarah Palin.",
    "expansion": "BaseGame"
  },
  {
    "text": "The Uberbermensch.",
    "expansion": "BaseGame"
  },
  {
    "text": "Altar boys.",
    "expansion": "BaseGame"
  },
  {
    "text": "My soul.",
    "expansion": "BaseGame"
  },
  {
    "text": "My sex life.",
    "expansion": "BaseGame"
  },
  {
    "text": "Pedophiles.",
    "expansion": "BaseGame"
  },
  {
    "text": "72 virgins.",
    "expansion": "BaseGame"
  },
  {
    "text": "Pabst Blue Ribbon.",
    "expansion": "BaseGame"
  },
  {
    "text": "Domino's Oreo Dessert Pizza.",
    "expansion": "BaseGame"
  },
  {
    "text": "A snapping turtle biting the tip of your penis.",
    "expansion": "BaseGame"
  },
  {
    "text": "The Blood of Christ.",
    "expansion": "BaseGame"
  },
  {
    "text": "Half-assed foreplay.",
    "expansion": "BaseGame"
  },
  {
    "text": "My collection of high-tech sex toys.",
    "expansion": "BaseGame"
  },
  {
    "text": "A middle-aged man on roller skates.",
    "expansion": "BaseGame"
  },
  {
    "text": "Bitches.",
    "expansion": "BaseGame"
  },
  {
    "text": "Bill Nye the Science Guy.",
    "expansion": "BaseGame"
  },
  {
    "text": "Italians.",
    "expansion": "BaseGame"
  },
  {
    "text": "A windmill full of corpses.",
    "expansion": "BaseGame"
  },
  {
    "text": "Adderall.",
    "expansion": "BaseGame"
  },
  {
    "text": "Crippling debt.",
    "expansion": "BaseGame"
  },
  {
    "text": "A stray pube.",
    "expansion": "BaseGame"
  },
  {
    "text": "Prancing.",
    "expansion": "BaseGame"
  },
  {
    "text": "Passing a kidney stone.",
    "expansion": "BaseGame"
  },
  {
    "text": "A brain tumor.",
    "expansion": "BaseGame"
  },
  {
    "text": "Leprosy.",
    "expansion": "BaseGame"
  },
  {
    "text": "Puppies!"
  },
  {
    "text": "Bees?"
  },
  {
    "text": "Frolicking.",
    "expansion": "BaseGame"
  },
  {
    "text": "Repression.",
    "expansion": "BaseGame"
  },
  {
    "text": "Road head.",
    "expansion": "BaseGame"
  },
  {
    "text": "A bag of magic beans.",
    "expansion": "BaseGame"
  },
  {
    "text": "An asymmetric boob job.",
    "expansion": "BaseGame"
  },
  {
    "text": "Dead parents.",
    "expansion": "BaseGame"
  },
  {
    "text": "Public ridicule.",
    "expansion": "BaseGame"
  },
  {
    "text": "A mating display.",
    "expansion": "BaseGame"
  },
  {
    "text": "A mime having a stroke.",
    "expansion": "BaseGame"
  },
  {
    "text": "Stephen Hawking talking dirty.",
    "expansion": "BaseGame"
  },
  {
    "text": "African children.",
    "expansion": "BaseGame"
  },
  {
    "text": "Mouth herpes.",
    "expansion": "BaseGame"
  },
  {
    "text": "Overcompensation.",
    "expansion": "BaseGame"
  },
  {
    "text": "Riding off into the sunset.",
    "expansion": "BaseGame"
  },
  {
    "text": "Being on fire.",
    "expansion": "BaseGame"
  },
  {
    "text": "Tangled Slinkys.",
    "expansion": "BaseGame"
  },
  {
    "text": "Civilian casualties.",
    "expansion": "BaseGame"
  },
  {
    "text": "Auschwitz.",
    "expansion": "BaseGame"
  },
  {
    "text": "My genitals.",
    "expansion": "BaseGame"
  },
  {
    "text": "Not reciprocating oral sex.",
    "expansion": "BaseGame"
  },
  {
    "text": "Lactation.",
    "expansion": "BaseGame"
  },
  {
    "text": "Being fabulous.",
    "expansion": "BaseGame"
  },
  {
    "text": "Shaquille O'Neal's acting career.",
    "expansion": "BaseGame"
  },
  {
    "text": "My relationship status.",
    "expansion": "BaseGame"
  },
  {
    "text": "Asians who aren't good at math.",
    "expansion": "BaseGame"
  },
  {
    "text": "Alcoholism.",
    "expansion": "BaseGame"
  },
  {
    "text": "Incest.",
    "expansion": "BaseGame"
  },
  {
    "text": "Grave robbing.",
    "expansion": "BaseGame"
  },
  {
    "text": "Hope.",
    "expansion": "BaseGame"
  },
  {
    "text": "8 oz. of sweet Mexican black-tar heroin.",
    "expansion": "BaseGame"
  },
  {
    "text": "Kids with ass cancer.",
    "expansion": "BaseGame"
  },
  {
    "text": "Winking at old people.",
    "expansion": "BaseGame"
  },
  {
    "text": "The Jews.",
    "expansion": "BaseGame"
  },
  {
    "text": "Justin Bieber.",
    "expansion": "BaseGame"
  },
  {
    "text": "Doin' it in the butt.",
    "expansion": "BaseGame"
  },
  {
    "text": "A lifetime of sadness.",
    "expansion": "BaseGame"
  },
  {
    "text": "The Hamburglar.",
    "expansion": "BaseGame"
  },
  {
    "text": "Swooping.",
    "expansion": "BaseGame"
  },
  {
    "text": "Classist undertones.",
    "expansion": "BaseGame"
  },
  {
    "text": "New Age music.",
    "expansion": "BaseGame"
  },
  {
    "text": "Not giving a shit about the Third World.",
    "expansion": "BaseGame"
  },
  {
    "text": "The Kool-Aid Man.",
    "expansion": "BaseGame"
  },
  {
    "text": "A hot mess.",
    "expansion": "BaseGame"
  },
  {
    "text": "Tentacle porn.",
    "expansion": "BaseGame"
  },
  {
    "text": "Lumberjack fantasies.",
    "expansion": "BaseGame"
  },
  {
    "text": "The gays.",
    "expansion": "BaseGame"
  },
  {
    "text": "Scientology.",
    "expansion": "BaseGame"
  },
  {
    "text": "Estrogen.",
    "expansion": "BaseGame"
  },
  {
    "text": "GoGurt.",
    "expansion": "BaseGame"
  },
  {
    "text": "Judge Judy.",
    "expansion": "BaseGame"
  },
  {
    "text": "Dick fingers.",
    "expansion": "BaseGame"
  },
  {
    "text": "Racism.",
    "expansion": "BaseGame"
  },
  {
    "text": "Surprise sex!"
  },
  {
    "text": "Police brutality.",
    "expansion": "BaseGame"
  },
  {
    "text": "Passable transvestites.",
    "expansion": "BaseGame"
  },
  {
    "text": "The Virginia Tech Massacre.",
    "expansion": "BaseGame"
  },
  {
    "text": "When you fart and a little bit comes out.",
    "expansion": "BaseGame"
  },
  {
    "text": "Oompa-Loompas.",
    "expansion": "BaseGame"
  },
  {
    "text": "A fetus.",
    "expansion": "BaseGame"
  },
  {
    "text": "Obesity.",
    "expansion": "BaseGame"
  },
  {
    "text": "Tasteful sideboob.",
    "expansion": "BaseGame"
  },
  {
    "text": "Hot people.",
    "expansion": "BaseGame"
  },
  {
    "text": "BATMAN!!!"
  },
  {
    "text": "Black people.",
    "expansion": "BaseGame"
  },
  {
    "text": "A gassy antelope.",
    "expansion": "BaseGame"
  },
  {
    "text": "Sexual tension.",
    "expansion": "BaseGame"
  },
  {
    "text": "Third base.",
    "expansion": "BaseGame"
  },
  {
    "text": "Racially-biased SAT questions.",
    "expansion": "BaseGame"
  },
  {
    "text": "Porn stars.",
    "expansion": "BaseGame"
  },
  {
    "text": "A Super Soaker full of cat pee.",
    "expansion": "BaseGame"
  },
  {
    "text": "Muhammed (Praise Be Unto Him).",
    "expansion": "BaseGame"
  },
  {
    "text": "Puberty.",
    "expansion": "BaseGame"
  },
  {
    "text": "A disappointing birthday party.",
    "expansion": "BaseGame"
  },
  {
    "text": "An erection that lasts longer than four hours.",
    "expansion": "BaseGame"
  },
  {
    "text": "White privilege.",
    "expansion": "BaseGame"
  },
  {
    "text": "Getting so angry that you pop a boner.",
    "expansion": "BaseGame"
  },
  {
    "text": "Wifely duties.",
    "expansion": "BaseGame"
  },
  {
    "text": "Two midgets shitting into a bucket.",
    "expansion": "BaseGame"
  },
  {
    "text": "Queefing.",
    "expansion": "BaseGame"
  },
  {
    "text": "Wiping her butt.",
    "expansion": "BaseGame"
  },
  {
    "text": "Golden showers.",
    "expansion": "BaseGame"
  },
  {
    "text": "Barack Obama.",
    "expansion": "BaseGame"
  },
  {
    "text": "Nazis.",
    "expansion": "BaseGame"
  },
  {
    "text": "A robust mongoloid.",
    "expansion": "BaseGame"
  },
  {
    "text": "An M. Night Shyamalan plot twist.",
    "expansion": "BaseGame"
  },
  {
    "text": "Getting drunk on mouthwash.",
    "expansion": "BaseGame"
  },
  {
    "text": "Lunchables.",
    "expansion": "BaseGame"
  },
  {
    "text": "Women in yogurt commercials.",
    "expansion": "BaseGame"
  },
  {
    "text": "John Wilkes Booth.",
    "expansion": "BaseGame"
  },
  {
    "text": "Powerful thighs.",
    "expansion": "BaseGame"
  },
  {
    "text": "Mr. Clean, right behind you.",
    "expansion": "BaseGame"
  },
  {
    "text": "Multiple stab wounds.",
    "expansion": "BaseGame"
  },
  {
    "text": "Cybernetic enhancements.",
    "expansion": "BaseGame"
  },
  {
    "text": "Serfdom.",
    "expansion": "BaseGame"
  },
  {
    "text": "Kanye West.",
    "expansion": "BaseGame"
  },
  {
    "text": "Women's suffrage.",
    "expansion": "BaseGame"
  },
  {
    "text": "Children on leashes.",
    "expansion": "BaseGame"
  },
  {
    "text": "Harry Potter erotica.",
    "expansion": "BaseGame"
  },
  {
    "text": "The Dance of the Sugar Plum Fairy.",
    "expansion": "BaseGame"
  },
  {
    "text": "Lance Armstrong's missing testicle.",
    "expansion": "BaseGame"
  },
  {
    "text": "Parting the Red Sea.",
    "expansion": "BaseGame"
  },
  {
    "text": "The Amish.",
    "expansion": "BaseGame"
  },
  {
    "text": "Dead babies.",
    "expansion": "BaseGame"
  },
  {
    "text": "Child beauty pageants.",
    "expansion": "BaseGame"
  },
  {
    "text": "AXE Body Spray.",
    "expansion": "BaseGame"
  },
  {
    "text": "Centaurs.",
    "expansion": "BaseGame"
  },
  {
    "text": "Copping a feel.",
    "expansion": "BaseGame"
  },
  {
    "text": "Grandma.",
    "expansion": "BaseGame"
  },
  {
    "text": "Famine.",
    "expansion": "BaseGame"
  },
  {
    "text": "The Trail of Tears.",
    "expansion": "BaseGame"
  },
  {
    "text": "The miracle of childbirth.",
    "expansion": "BaseGame"
  },
  {
    "text": "Finger painting.",
    "expansion": "BaseGame"
  },
  {
    "text": "A monkey smoking a cigar.",
    "expansion": "BaseGame"
  },
  {
    "text": "The Make-A-Wish Foundation.",
    "expansion": "BaseGame"
  },
  {
    "text": "Anal beads.",
    "expansion": "BaseGame"
  },
  {
    "text": "The Force.",
    "expansion": "BaseGame"
  },
  {
    "text": "Kamikaze pilots.",
    "expansion": "BaseGame"
  },
  {
    "text": "Dry heaving.",
    "expansion": "BaseGame"
  },
  {
    "text": "Active listening.",
    "expansion": "BaseGame"
  },
  {
    "text": "Ghosts.",
    "expansion": "BaseGame"
  },
  {
    "text": "The Hustle.",
    "expansion": "BaseGame"
  },
  {
    "text": "Peeing a little bit.",
    "expansion": "BaseGame"
  },
  {
    "text": "Another goddamn vampire movie.",
    "expansion": "BaseGame"
  },
  {
    "text": "Shapeshifters.",
    "expansion": "BaseGame"
  },
  {
    "text": "The Care Bear Stare.",
    "expansion": "BaseGame"
  },
  {
    "text": "Hot cheese.",
    "expansion": "BaseGame"
  },
  {
    "text": "A mopey zoo lion.",
    "expansion": "BaseGame"
  },
  {
    "text": "A defective condom.",
    "expansion": "BaseGame"
  },
  {
    "text": "Teenage pregnancy.",
    "expansion": "BaseGame"
  },
  {
    "text": "A Bop It.",
    "expansion": "BaseGame"
  },
  {
    "text": "Expecting a burp and vomiting on the floor.",
    "expansion": "BaseGame"
  },
  {
    "text": "Horrifying laser hair removal accidents.",
    "expansion": "BaseGame"
  },
  {
    "text": "Boogers.",
    "expansion": "BaseGame"
  },
  {
    "text": "Unfathomable stupidity.",
    "expansion": "BaseGame"
  },
  {
    "text": "Breaking out into song and dance.",
    "expansion": "BaseGame"
  },
  {
    "text": "Soup that is too hot.",
    "expansion": "BaseGame"
  },
  {
    "text": "Morgan Freeman's voice.",
    "expansion": "BaseGame"
  },
  {
    "text": "Getting naked and watching Nickelodeon.",
    "expansion": "BaseGame"
  },
  {
    "text": "MechaHitler.",
    "expansion": "BaseGame"
  },
  {
    "text": "Flying sex snakes.",
    "expansion": "BaseGame"
  },
  {
    "text": "The true meaning of Christmas.",
    "expansion": "BaseGame"
  },
  {
    "text": "My inner demons.",
    "expansion": "BaseGame"
  },
  {
    "text": "Pac-Man uncontrollably guzzling cum.",
    "expansion": "BaseGame"
  },
  {
    "text": "My vagina.",
    "expansion": "BaseGame"
  },
  {
    "text": "A homoerotic volleyball montage.",
    "expansion": "BaseGame"
  },
  {
    "text": "Actually taking candy from a baby.",
    "expansion": "BaseGame"
  },
  {
    "text": "Crystal meth.",
    "expansion": "BaseGame"
  },
  {
    "text": "Exactly what you'd expect.",
    "expansion": "BaseGame"
  },
  {
    "text": "Natural male enhancement.",
    "expansion": "BaseGame"
  },
  {
    "text": "Passive-aggressive Post-it notes.",
    "expansion": "BaseGame"
  },
  {
    "text": "Inappropriate yodeling.",
    "expansion": "BaseGame"
  },
  {
    "text": "Lady Gaga.",
    "expansion": "BaseGame"
  },
  {
    "text": "The Little Engine That Could.",
    "expansion": "BaseGame"
  },
  {
    "text": "Vigilante justice.",
    "expansion": "BaseGame"
  },
  {
    "text": "A death ray.",
    "expansion": "BaseGame"
  },
  {
    "text": "Poor life choices.",
    "expansion": "BaseGame"
  },
  {
    "text": "A gentle caress of the inner thigh.",
    "expansion": "BaseGame"
  },
  {
    "text": "Embryonic stem cells.",
    "expansion": "BaseGame"
  },
  {
    "text": "Nicolas Cage.",
    "expansion": "BaseGame"
  },
  {
    "text": "Firing a rifle into the air while balls deep in a squealing hog.",
    "expansion": "BaseGame"
  },
  {
    "text": "Switching to Geico.",
    "expansion": "BaseGame"
  },
  {
    "text": "The chronic.",
    "expansion": "BaseGame"
  },
  {
    "text": "Erectile dysfunction.",
    "expansion": "BaseGame"
  },
  {
    "text": "Home video of Oprah sobbing into a Lean Cuisine.",
    "expansion": "BaseGame"
  },
  {
    "text": "A bucket of fish heads.",
    "expansion": "BaseGame"
  },
  {
    "text": "50,000 volts straight to the nipples.",
    "expansion": "BaseGame"
  },
  {
    "text": "Being fat and stupid.",
    "expansion": "BaseGame"
  },
  {
    "text": "Hospice care.",
    "expansion": "BaseGame"
  },
  {
    "text": "A pyramid of severed heads.",
    "expansion": "BaseGame"
  },
  {
    "text": "Getting married, having a few kids, buying some stuff, retiring to Florida, and dying.",
    "expansion": "BaseGame"
  },
  {
    "text": "A subscription to Men's Fitness.",
    "expansion": "BaseGame"
  },
  {
    "text": "Crucifixion.",
    "expansion": "BaseGame"
  },
  {
    "text": "A micropig wearing a tiny raincoat and booties.",
    "expansion": "BaseGame"
  },
  {
    "text": "Some god-damn peace and quiet.",
    "expansion": "BaseGame"
  },
  {
    "text": "Used panties.",
    "expansion": "BaseGame"
  },
  {
    "text": "A tribe of warrior women.",
    "expansion": "BaseGame"
  },
  {
    "text": "The penny whistle solo from 'My Heart Will Go On.'"
  },
  {
    "text": "An oversized lollipop.",
    "expansion": "BaseGame"
  },
  {
    "text": "Helplessly giggling at the mention of Hutus and Tutsis.",
    "expansion": "BaseGame"
  },
  {
    "text": "Not wearing pants.",
    "expansion": "BaseGame"
  },
  {
    "text": "Consensual sex.",
    "expansion": "BaseGame"
  },
  {
    "text": "Her Majesty, Queen Elizabeth II.",
    "expansion": "BaseGame"
  },
  {
    "text": "Funky fresh rhymes.",
    "expansion": "BaseGame"
  },
  {
    "text": "The art of seduction.",
    "expansion": "BaseGame"
  },
  {
    "text": "The Devil himself.",
    "expansion": "BaseGame"
  },
  {
    "text": "Advice from a wise, old black man.",
    "expansion": "BaseGame"
  },
  {
    "text": "Destroying the evidence.",
    "expansion": "BaseGame"
  },
  {
    "text": "The light of a billion suns.",
    "expansion": "BaseGame"
  },
  {
    "text": "Wet dreams.",
    "expansion": "BaseGame"
  },
  {
    "text": "Synergistic management solutions.",
    "expansion": "BaseGame"
  },
  {
    "text": "Growing a pair.",
    "expansion": "BaseGame"
  },
  {
    "text": "Silence.",
    "expansion": "BaseGame"
  },
  {
    "text": "An M16 assault rifle.",
    "expansion": "BaseGame"
  },
  {
    "text": "Poopy diapers.",
    "expansion": "BaseGame"
  },
  {
    "text": "A live studio audience.",
    "expansion": "BaseGame"
  },
  {
    "text": "The Great Depression.",
    "expansion": "BaseGame"
  },
  {
    "text": "A spastic nerd.",
    "expansion": "BaseGame"
  },
  {
    "text": "Rush Limbaugh's soft, shitty body.",
    "expansion": "BaseGame"
  },
  {
    "text": "Tickling Sean Hannity, even after he tells you to stop.",
    "expansion": "BaseGame"
  },
  {
    "text": "Stalin.",
    "expansion": "BaseGame"
  },
  {
    "text": "Brown people.",
    "expansion": "BaseGame"
  },
  {
    "text": "Rehab.",
    "expansion": "BaseGame"
  },
  {
    "text": "Capturing Newt Gingrich and forcing him to dance in a monkey suit.",
    "expansion": "BaseGame"
  },
  {
    "text": "Battlefield amputations.",
    "expansion": "BaseGame"
  },
  {
    "text": "An uppercut.",
    "expansion": "BaseGame"
  },
  {
    "text": "Shiny objects.",
    "expansion": "BaseGame"
  },
  {
    "text": "An ugly face.",
    "expansion": "BaseGame"
  },
  {
    "text": "Menstrual rage.",
    "expansion": "BaseGame"
  },
  {
    "text": "A bitch slap.",
    "expansion": "BaseGame"
  },
  {
    "text": "One trillion dollars.",
    "expansion": "BaseGame"
  },
  {
    "text": "Chunks of dead prostitute.",
    "expansion": "BaseGame"
  },
  {
    "text": "The entire Mormon Tabernacle Choir.",
    "expansion": "BaseGame"
  },
  {
    "text": "The female orgasm.",
    "expansion": "BaseGame"
  },
  {
    "text": "Extremely tight pants.",
    "expansion": "BaseGame"
  },
  {
    "text": "The Boy Scouts of America.",
    "expansion": "BaseGame"
  },
  {
    "text": "Stormtroopers.",
    "expansion": "BaseGame"
  },
  {
    "text": "Throwing a virgin into a volcano.",
    "expansion": "BaseGame"
  }
]

insertBlackCards = () => {
  BlackCard.remove({}).then(() => BlackCard.collection.insertMany(blackCardSeed)).then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  }).catch(err => {
    console.error(err);
    process.exit(1);
  });
};
insertWhiteCards = () => {
  WhiteCard.remove({}).then(() => WhiteCard.collection.insertMany(whiteCardSeed)).then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  }).catch(err => {
    console.error(err);
    process.exit(1);
  });
};
// insertBlackCards();
insertWhiteCards();