const mongoose = require("mongoose");
const db = require("../models");

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
    "text": "Coat hanger abortions."
  },
  {
    "text": "Man meat."
  },
  {
    "text": "Autocannibalism."
  },
  {
    "text": "Vigorous jazz hands."
  },
  {
    "text": "Flightless birds."
  },
  {
    "text": "Pictures of boobs."
  },
  {
    "text": "Doing the right thing."
  },
  {
    "text": "The violation of our most basic human rights."
  },
  {
    "text": "Viagra."
  },
  {
    "text": "Self-loathing."
  },
  {
    "text": "Spectacular abs."
  },
  {
    "text": "A balanced breakfast."
  },
  {
    "text": "Roofies."
  },
  {
    "text": "Concealing a boner."
  },
  {
    "text": "Amputees."
  },
  {
    "text": "The Big Bang."
  },
  {
    "text": "Former President George W. Bush."
  },
  {
    "text": "The Rev. Dr. Martin Luther King, Jr."
  },
  {
    "text": "Smegma."
  },
  {
    "text": "Being marginalized."
  },
  {
    "text": "Cuddling."
  },
  {
    "text": "Laying an egg."
  },
  {
    "text": "The Pope."
  },
  {
    "text": "Aaron Burr."
  },
  {
    "text": "Genital piercings."
  },
  {
    "text": "Fingering."
  },
  {
    "text": "A bleached asshole."
  },
  {
    "text": "Horse meat."
  },
  {
    "text": "Fear itself."
  },
  {
    "text": "Science."
  },
  {
    "text": "Elderly Japanese men."
  },
  {
    "text": "Stranger danger."
  },
  {
    "text": "The terrorists."
  },
  {
    "text": "Praying the gay away."
  },
  {
    "text": "Same-sex ice dancing."
  },
  {
    "text": "Ethnic cleansing."
  },
  {
    "text": "Cheating in the Special Olympics."
  },
  {
    "text": "German dungeon porn."
  },
  {
    "text": "Bingeing and purging."
  },
  {
    "text": "Making a pouty face."
  },
  {
    "text": "William Shatner."
  },
  {
    "text": "Heteronormativity."
  },
  {
    "text": "Nickelback."
  },
  {
    "text": "Tom Cruise."
  },
  {
    "text": "The profoundly handicapped."
  },
  {
    "text": "The placenta."
  },
  {
    "text": "Chainsaws for hands."
  },
  {
    "text": "Arnold Schwarzenegger."
  },
  {
    "text": "An icepick lobotomy."
  },
  {
    "text": "Goblins."
  },
  {
    "text": "Object permanence."
  },
  {
    "text": "Dying."
  },
  {
    "text": "Foreskin."
  },
  {
    "text": "A falcon with a cap on its head."
  },
  {
    "text": "Hormone injections."
  },
  {
    "text": "Dying of dysentery."
  },
  {
    "text": "Sexy pillow fights."
  },
  {
    "text": "The invisible hand."
  },
  {
    "text": "A really cool hat."
  },
  {
    "text": "Sean Penn."
  },
  {
    "text": "Heartwarming orphans."
  },
  {
    "text": "The clitoris."
  },
  {
    "text": "The Three-Fifths compromise."
  },
  {
    "text": "A sad handjob."
  },
  {
    "text": "Men."
  },
  {
    "text": "Historically black colleges."
  },
  {
    "text": "A micropenis."
  },
  {
    "text": "Raptor attacks."
  },
  {
    "text": "Agriculture."
  },
  {
    "text": "Vikings."
  },
  {
    "text": "Pretending to care."
  },
  {
    "text": "The Underground Railroad."
  },
  {
    "text": "My humps."
  },
  {
    "text": "Being a dick to children."
  },
  {
    "text": "Geese."
  },
  {
    "text": "Bling."
  },
  {
    "text": "Sniffing glue."
  },
  {
    "text": "The South."
  },
  {
    "text": "An Oedipus complex."
  },
  {
    "text": "Eating all of the cookies before the AIDS bake-sale."
  },
  {
    "text": "Sexting."
  },
  {
    "text": "YOU MUST CONSTRUCT ADDITIONAL PYLONS."
  },
  {
    "text": "Mutually-assured destruction."
  },
  {
    "text": "Sunshine and rainbows."
  },
  {
    "text": "Count Chocula."
  },
  {
    "text": "Sharing needles."
  },
  {
    "text": "Being rich."
  },
  {
    "text": "Skeletor."
  },
  {
    "text": "A sausage festival."
  },
  {
    "text": "Michael Jackson."
  },
  {
    "text": "Emotions."
  },
  {
    "text": "Farting and walking away."
  },
  {
    "text": "The Chinese gymnastics team."
  },
  {
    "text": "Necrophilia."
  },
  {
    "text": "Spontaneous human combustion."
  },
  {
    "text": "Yeast."
  },
  {
    "text": "Leaving an awkward voicemail."
  },
  {
    "text": "Dick Cheney."
  },
  {
    "text": "White people."
  },
  {
    "text": "Penis envy."
  },
  {
    "text": "Teaching a robot to love."
  },
  {
    "text": "Sperm whales."
  },
  {
    "text": "Scrubbing under the folds."
  },
  {
    "text": "Panda sex."
  },
  {
    "text": "Whipping it out."
  },
  {
    "text": "Catapults."
  },
  {
    "text": "Masturbation."
  },
  {
    "text": "Natural selection."
  },
  {
    "text": "Opposable thumbs."
  },
  {
    "text": "A sassy black woman."
  },
  {
    "text": "AIDS."
  },
  {
    "text": "The KKK."
  },
  {
    "text": "Figgy pudding."
  },
  {
    "text": "Seppuku."
  },
  {
    "text": "Gandhi."
  },
  {
    "text": "Preteens."
  },
  {
    "text": "Toni Morrison's vagina."
  },
  {
    "text": "Five-Dollar Footlongs."
  },
  {
    "text": "Land mines."
  },
  {
    "text": "A sea of troubles."
  },
  {
    "text": "A zesty breakfast burrito."
  },
  {
    "text": "Christopher Walken."
  },
  {
    "text": "Friction."
  },
  {
    "text": "Balls."
  },
  {
    "text": "Dental dams."
  },
  {
    "text": "A can of whoop-ass."
  },
  {
    "text": "A tiny horse."
  },
  {
    "text": "Waiting 'til marriage."
  },
  {
    "text": "Authentic Mexican cuisine."
  },
  {
    "text": "Genghis Khan."
  },
  {
    "text": "Old-people smell."
  },
  {
    "text": "Feeding Rosie O'Donnell."
  },
  {
    "text": "Pixelated bukkake."
  },
  {
    "text": "Friends with benefits."
  },
  {
    "text": "The token minority."
  },
  {
    "text": "The Tempur-Pedic Swedish Sleep System."
  },
  {
    "text": "A thermonuclear detonation."
  },
  {
    "text": "Take-backsies."
  },
  {
    "text": "The Rapture."
  },
  {
    "text": "A cooler full of organs."
  },
  {
    "text": "Sweet, sweet vengeance."
  },
  {
    "text": "RoboCop."
  },
  {
    "text": "Keanu Reeves."
  },
  {
    "text": "Drinking alone."
  },
  {
    "text": "Giving 110%."
  },
  {
    "text": "Flesh-eating bacteria."
  },
  {
    "text": "The American Dream."
  },
  {
    "text": "Taking off your shirt."
  },
  {
    "text": "Me time."
  },
  {
    "text": "A murder most foul."
  },
  {
    "text": "The inevitable heat death of the universe."
  },
  {
    "text": "The folly of man."
  },
  {
    "text": "That thing that electrocutes your abs."
  },
  {
    "text": "Cards Against Humanity."
  },
  {
    "text": "Fiery poops."
  },
  {
    "text": "Poor people."
  },
  {
    "text": "Edible underpants."
  },
  {
    "text": "Britney Spears at 55."
  },
  {
    "text": "All-you-can-eat shrimp for $4.99."
  },
  {
    "text": "Pooping back and forth. Forever."
  },
  {
    "text": "Fancy Feast."
  },
  {
    "text": "Jewish fraternities."
  },
  {
    "text": "Being a motherfucking sorcerer."
  },
  {
    "text": "Pulling out."
  },
  {
    "text": "Picking up girls at the abortion clinic."
  },
  {
    "text": "The homosexual agenda."
  },
  {
    "text": "The Holy Bible."
  },
  {
    "text": "Passive-agression."
  },
  {
    "text": "Ronald Reagan."
  },
  {
    "text": "Vehicular manslaughter."
  },
  {
    "text": "Nipple blades."
  },
  {
    "text": "Assless chaps."
  },
  {
    "text": "Full frontal nudity."
  },
  {
    "text": "Hulk Hogan."
  },
  {
    "text": "Daddy issues."
  },
  {
    "text": "The hardworking Mexican."
  },
  {
    "text": "Natalie Portman."
  },
  {
    "text": "Waking up half-naked in a Denny's parking lot."
  },
  {
    "text": "God."
  },
  {
    "text": "Sean Connery."
  },
  {
    "text": "Saxophone solos."
  },
  {
    "text": "Gloryholes."
  },
  {
    "text": "The World of Warcraft."
  },
  {
    "text": "Homeless people."
  },
  {
    "text": "Scalping."
  },
  {
    "text": "Darth Vader."
  },
  {
    "text": "Eating the last known bison."
  },
  {
    "text": "Guys who don't call."
  },
  {
    "text": "Hot Pockets."
  },
  {
    "text": "A time travel paradox."
  },
  {
    "text": "The milk man."
  },
  {
    "text": "Testicular torsion."
  },
  {
    "text": "Dropping a chandelier on your enemies and riding the rope up."
  },
  {
    "text": "World peace."
  },
  {
    "text": "A salty surprise."
  },
  {
    "text": "Poorly-timed Holocaust jokes."
  },
  {
    "text": "Smallpox blankets."
  },
  {
    "text": "Licking things to claim them as your own."
  },
  {
    "text": "The heart of a child."
  },
  {
    "text": "Robert Downey, Jr."
  },
  {
    "text": "Lockjaw."
  },
  {
    "text": "Eugenics."
  },
  {
    "text": "A good sniff."
  },
  {
    "text": "Friendly fire."
  },
  {
    "text": "The taint; the grundle; the fleshy fun-bridge."
  },
  {
    "text": "Wearing underwear inside-out to avoid doing laundry."
  },
  {
    "text": "Hurricane Katrina."
  },
  {
    "text": "Free samples."
  },
  {
    "text": "Jerking off into a pool of children's tears."
  },
  {
    "text": "A foul mouth."
  },
  {
    "text": "The glass ceiling."
  },
  {
    "text": "Republicans."
  },
  {
    "text": "Explosions."
  },
  {
    "text": "Michelle Obama's arms."
  },
  {
    "text": "Getting really high."
  },
  {
    "text": "Attitude."
  },
  {
    "text": "Sarah Palin."
  },
  {
    "text": "The Uberbermensch."
  },
  {
    "text": "Altar boys."
  },
  {
    "text": "My soul."
  },
  {
    "text": "My sex life."
  },
  {
    "text": "Pedophiles."
  },
  {
    "text": "72 virgins."
  },
  {
    "text": "Pabst Blue Ribbon."
  },
  {
    "text": "Domino's Oreo Dessert Pizza."
  },
  {
    "text": "A snapping turtle biting the tip of your penis."
  },
  {
    "text": "The Blood of Christ."
  },
  {
    "text": "Half-assed foreplay."
  },
  {
    "text": "My collection of high-tech sex toys."
  },
  {
    "text": "A middle-aged man on roller skates."
  },
  {
    "text": "Bitches."
  },
  {
    "text": "Bill Nye the Science Guy."
  },
  {
    "text": "Italians."
  },
  {
    "text": "A windmill full of corpses."
  },
  {
    "text": "Adderall."
  },
  {
    "text": "Crippling debt."
  },
  {
    "text": "A stray pube."
  },
  {
    "text": "Prancing."
  },
  {
    "text": "Passing a kidney stone."
  },
  {
    "text": "A brain tumor."
  },
  {
    "text": "Leprosy."
  },
  {
    "text": "Puppies!"
  },
  {
    "text": "Bees?"
  },
  {
    "text": "Frolicking."
  },
  {
    "text": "Repression."
  },
  {
    "text": "Road head."
  },
  {
    "text": "A bag of magic beans."
  },
  {
    "text": "An asymmetric boob job."
  },
  {
    "text": "Dead parents."
  },
  {
    "text": "Public ridicule."
  },
  {
    "text": "A mating display."
  },
  {
    "text": "A mime having a stroke."
  },
  {
    "text": "Stephen Hawking talking dirty."
  },
  {
    "text": "African children."
  },
  {
    "text": "Mouth herpes."
  },
  {
    "text": "Overcompensation."
  },
  {
    "text": "Riding off into the sunset."
  },
  {
    "text": "Being on fire."
  },
  {
    "text": "Tangled Slinkys."
  },
  {
    "text": "Civilian casualties."
  },
  {
    "text": "Auschwitz."
  },
  {
    "text": "My genitals."
  },
  {
    "text": "Not reciprocating oral sex."
  },
  {
    "text": "Lactation."
  },
  {
    "text": "Being fabulous."
  },
  {
    "text": "Shaquille O'Neal's acting career."
  },
  {
    "text": "My relationship status."
  },
  {
    "text": "Asians who aren't good at math."
  },
  {
    "text": "Alcoholism."
  },
  {
    "text": "Incest."
  },
  {
    "text": "Grave robbing."
  },
  {
    "text": "Hope."
  },
  {
    "text": "8 oz. of sweet Mexican black-tar heroin."
  },
  {
    "text": "Kids with ass cancer."
  },
  {
    "text": "Winking at old people."
  },
  {
    "text": "The Jews."
  },
  {
    "text": "Justin Bieber."
  },
  {
    "text": "Doin' it in the butt."
  },
  {
    "text": "A lifetime of sadness."
  },
  {
    "text": "The Hamburglar."
  },
  {
    "text": "Swooping."
  },
  {
    "text": "Classist undertones."
  },
  {
    "text": "New Age music."
  },
  {
    "text": "Not giving a shit about the Third World."
  },
  {
    "text": "The Kool-Aid Man."
  },
  {
    "text": "A hot mess."
  },
  {
    "text": "Tentacle porn."
  },
  {
    "text": "Lumberjack fantasies."
  },
  {
    "text": "The gays."
  },
  {
    "text": "Scientology."
  },
  {
    "text": "Estrogen."
  },
  {
    "text": "GoGurt."
  },
  {
    "text": "Judge Judy."
  },
  {
    "text": "Dick fingers."
  },
  {
    "text": "Racism."
  },
  {
    "text": "Surprise sex!"
  },
  {
    "text": "Police brutality."
  },
  {
    "text": "Passable transvestites."
  },
  {
    "text": "The Virginia Tech Massacre."
  },
  {
    "text": "When you fart and a little bit comes out."
  },
  {
    "text": "Oompa-Loompas."
  },
  {
    "text": "A fetus."
  },
  {
    "text": "Obesity."
  },
  {
    "text": "Tasteful sideboob."
  },
  {
    "text": "Hot people."
  },
  {
    "text": "BATMAN!!!"
  },
  {
    "text": "Black people."
  },
  {
    "text": "A gassy antelope."
  },
  {
    "text": "Sexual tension."
  },
  {
    "text": "Third base."
  },
  {
    "text": "Racially-biased SAT questions."
  },
  {
    "text": "Porn stars."
  },
  {
    "text": "A Super Soaker full of cat pee."
  },
  {
    "text": "Muhammed (Praise Be Unto Him)."
  },
  {
    "text": "Puberty."
  },
  {
    "text": "A disappointing birthday party."
  },
  {
    "text": "An erection that lasts longer than four hours."
  },
  {
    "text": "White privilege."
  },
  {
    "text": "Getting so angry that you pop a boner."
  },
  {
    "text": "Wifely duties."
  },
  {
    "text": "Two midgets shitting into a bucket."
  },
  {
    "text": "Queefing."
  },
  {
    "text": "Wiping her butt."
  },
  {
    "text": "Golden showers."
  },
  {
    "text": "Barack Obama."
  },
  {
    "text": "Nazis."
  },
  {
    "text": "A robust mongoloid."
  },
  {
    "text": "An M. Night Shyamalan plot twist."
  },
  {
    "text": "Getting drunk on mouthwash."
  },
  {
    "text": "Lunchables."
  },
  {
    "text": "Women in yogurt commercials."
  },
  {
    "text": "John Wilkes Booth."
  },
  {
    "text": "Powerful thighs."
  },
  {
    "text": "Mr. Clean, right behind you."
  },
  {
    "text": "Multiple stab wounds."
  },
  {
    "text": "Cybernetic enhancements."
  },
  {
    "text": "Serfdom."
  },
  {
    "text": "Kanye West."
  },
  {
    "text": "Women's suffrage."
  },
  {
    "text": "Children on leashes."
  },
  {
    "text": "Harry Potter erotica."
  },
  {
    "text": "The Dance of the Sugar Plum Fairy."
  },
  {
    "text": "Lance Armstrong's missing testicle."
  },
  {
    "text": "Parting the Red Sea."
  },
  {
    "text": "The Amish."
  },
  {
    "text": "Dead babies."
  },
  {
    "text": "Child beauty pageants."
  },
  {
    "text": "AXE Body Spray."
  },
  {
    "text": "Centaurs."
  },
  {
    "text": "Copping a feel."
  },
  {
    "text": "Grandma."
  },
  {
    "text": "Famine."
  },
  {
    "text": "The Trail of Tears."
  },
  {
    "text": "The miracle of childbirth."
  },
  {
    "text": "Finger painting."
  },
  {
    "text": "A monkey smoking a cigar."
  },
  {
    "text": "The Make-A-Wish Foundation."
  },
  {
    "text": "Anal beads."
  },
  {
    "text": "The Force."
  },
  {
    "text": "Kamikaze pilots."
  },
  {
    "text": "Dry heaving."
  },
  {
    "text": "Active listening."
  },
  {
    "text": "Ghosts."
  },
  {
    "text": "The Hustle."
  },
  {
    "text": "Peeing a little bit."
  },
  {
    "text": "Another goddamn vampire movie."
  },
  {
    "text": "Shapeshifters."
  },
  {
    "text": "The Care Bear Stare."
  },
  {
    "text": "Hot cheese."
  },
  {
    "text": "A mopey zoo lion."
  },
  {
    "text": "A defective condom."
  },
  {
    "text": "Teenage pregnancy."
  },
  {
    "text": "A Bop It."
  },
  {
    "text": "Expecting a burp and vomiting on the floor."
  },
  {
    "text": "Horrifying laser hair removal accidents."
  },
  {
    "text": "Boogers."
  },
  {
    "text": "Unfathomable stupidity."
  },
  {
    "text": "Breaking out into song and dance."
  },
  {
    "text": "Soup that is too hot."
  },
  {
    "text": "Morgan Freeman's voice."
  },
  {
    "text": "Getting naked and watching Nickelodeon."
  },
  {
    "text": "MechaHitler."
  },
  {
    "text": "Flying sex snakes."
  },
  {
    "text": "The true meaning of Christmas."
  },
  {
    "text": "My inner demons."
  },
  {
    "text": "Pac-Man uncontrollably guzzling cum."
  },
  {
    "text": "My vagina."
  },
  {
    "text": "A homoerotic volleyball montage."
  },
  {
    "text": "Actually taking candy from a baby."
  },
  {
    "text": "Crystal meth."
  },
  {
    "text": "Exactly what you'd expect."
  },
  {
    "text": "Natural male enhancement."
  },
  {
    "text": "Passive-aggressive Post-it notes."
  },
  {
    "text": "Inappropriate yodeling."
  },
  {
    "text": "Lady Gaga."
  },
  {
    "text": "The Little Engine That Could."
  },
  {
    "text": "Vigilante justice."
  },
  {
    "text": "A death ray."
  },
  {
    "text": "Poor life choices."
  },
  {
    "text": "A gentle caress of the inner thigh."
  },
  {
    "text": "Embryonic stem cells."
  },
  {
    "text": "Nicolas Cage."
  },
  {
    "text": "Firing a rifle into the air while balls deep in a squealing hog."
  },
  {
    "text": "Switching to Geico."
  },
  {
    "text": "The chronic."
  },
  {
    "text": "Erectile dysfunction."
  },
  {
    "text": "Home video of Oprah sobbing into a Lean Cuisine."
  },
  {
    "text": "A bucket of fish heads."
  },
  {
    "text": "50,000 volts straight to the nipples."
  },
  {
    "text": "Being fat and stupid."
  },
  {
    "text": "Hospice care."
  },
  {
    "text": "A pyramid of severed heads."
  },
  {
    "text": "Getting married, having a few kids, buying some stuff, retiring to Florida, and dying."
  },
  {
    "text": "A subscription to Men's Fitness."
  },
  {
    "text": "Crucifixion."
  },
  {
    "text": "A micropig wearing a tiny raincoat and booties."
  },
  {
    "text": "Some god-damn peace and quiet."
  },
  {
    "text": "Used panties."
  },
  {
    "text": "A tribe of warrior women."
  },
  {
    "text": "The penny whistle solo from 'My Heart Will Go On.'"
  },
  {
    "text": "An oversized lollipop."
  },
  {
    "text": "Helplessly giggling at the mention of Hutus and Tutsis."
  },
  {
    "text": "Not wearing pants."
  },
  {
    "text": "Consensual sex."
  },
  {
    "text": "Her Majesty, Queen Elizabeth II."
  },
  {
    "text": "Funky fresh rhymes."
  },
  {
    "text": "The art of seduction."
  },
  {
    "text": "The Devil himself."
  },
  {
    "text": "Advice from a wise, old black man."
  },
  {
    "text": "Destroying the evidence."
  },
  {
    "text": "The light of a billion suns."
  },
  {
    "text": "Wet dreams."
  },
  {
    "text": "Synergistic management solutions."
  },
  {
    "text": "Growing a pair."
  },
  {
    "text": "Silence."
  },
  {
    "text": "An M16 assault rifle."
  },
  {
    "text": "Poopy diapers."
  },
  {
    "text": "A live studio audience."
  },
  {
    "text": "The Great Depression."
  },
  {
    "text": "A spastic nerd."
  },
  {
    "text": "Rush Limbaugh's soft, shitty body."
  },
  {
    "text": "Tickling Sean Hannity, even after he tells you to stop."
  },
  {
    "text": "Stalin."
  },
  {
    "text": "Brown people."
  },
  {
    "text": "Rehab."
  },
  {
    "text": "Capturing Newt Gingrich and forcing him to dance in a monkey suit."
  },
  {
    "text": "Battlefield amputations."
  },
  {
    "text": "An uppercut."
  },
  {
    "text": "Shiny objects."
  },
  {
    "text": "An ugly face."
  },
  {
    "text": "Menstrual rage."
  },
  {
    "text": "A bitch slap."
  },
  {
    "text": "One trillion dollars."
  },
  {
    "text": "Chunks of dead prostitute."
  },
  {
    "text": "The entire Mormon Tabernacle Choir."
  },
  {
    "text": "The female orgasm."
  },
  {
    "text": "Extremely tight pants."
  },
  {
    "text": "The Boy Scouts of America."
  },
  {
    "text": "Stormtroopers."
  },
  {
    "text": "Throwing a virgin into a volcano."
  }
]

db.BlackCard
  .remove({})
  .then(() => db.BlackCard.collection.insertMany(blackCardSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.WhiteCard
  .remove({})
  .then(() => db.WhiteCard.collection.insertMany(whiteCardSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });