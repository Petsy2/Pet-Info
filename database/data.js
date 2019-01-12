require("dotenv").config();
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const model = require("./models/Pet_Info.js");
//const bigData = require('')

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true }
);

const data = [
  {
    pet_id: "1111",
    class: "mammal",
    family: "Felidae",
    genus: "Panthera",
    species: "Tiger",
    description:
      "The tiger (Panthera tigris) is the largest cat species, most recognizable for its pattern of dark vertical stripes on reddish-orange fur with a lighter underside.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/1111.jpg"
  },
  {
    pet_id: "1112",
    class: "mammal",
    family: "Felidae",
    genus: "Panthera",
    species: "Lion",
    description: "It's gonna eat you. BUY BUY BUY!!!!",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/1112.jpg"
  },
  {
    pet_id: "1113",
    class: "mammal",
    family: "Felidae",
    genus: "Panthera",
    species: "Jaguar",
    description: "Spooky-cat. Apparently they live in Florida.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/1113.jpg"
  },
  {
    pet_id: "1114",
    class: "mammal",
    family: "Felidae",
    genus: "Panthera",
    species: "Leopard",
    description: "Spots on spots on spots.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/1114.jpeg"
  },
  {
    pet_id: "1115",
    class: "mammal",
    family: "Felidae",
    genus: "Panthera",
    species: "Snow Leopard",
    description: "Big white cat.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/1115.jpeg"
  },
  {
    pet_id: "1126",
    class: "mammal",
    family: "Felidae",
    genus: "Acinonyx",
    species: "Cheetah",
    description: "The Forest Gump of big cats.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/1126.jpg"
  },
  {
    pet_id: "1137",
    class: "mammal",
    family: "Felidae",
    genus: "Puma",
    species: "Cougar",
    description: "Big forest cat.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/1137.jpg"
  },
  {
    pet_id: "1218",
    class: "mammal",
    family: "Canidae",
    genus: "Urocyon",
    species: "Island Fox",
    description:
      "The island fox (Urocyon littoralis) is a small fox that is native to six of the eight Channel Islands of California.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/1218.jpg"
  },
  {
    pet_id: "1229",
    class: "mammal",
    family: "Canidae",
    genus: "Vulpini",
    species: "Raccoon Dog",
    description: "Basically a fox that looks like a raccoon.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/1229.jpg"
  },
  {
    pet_id: "12210",
    class: "mammal",
    family: "Canidae",
    genus: "Vulpini",
    species: "Arctic Fox",
    description: "White fox. Lives in snow.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/12210.jpg"
  },
  {
    pet_id: "12211",
    class: "mammal",
    family: "Canidae",
    genus: "Vulpini",
    species: "Blanford's Fox",
    description:
      "Blanford's fox (Vulpes cana), is a small fox found in certain regions of the Middle East and Central Asia.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/12211.jpg"
  },
  {
    pet_id: "12212",
    class: "mammal",
    family: "Canidae",
    genus: "Vulpini",
    species: "Bat-Eared Fox",
    description: "It hears everything...",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/12212.jpg"
  },
  {
    pet_id: "12213",
    class: "mammal",
    family: "Canidae",
    genus: "Canini",
    species: "Hoary Fox",
    description:
      'The hoary fox (Lycalopex vetulus), also called raposinha-do-campo (Portuguese for "meadow fox"), is a species of zorro or "false" fox endemic to Brazil. Unlike many other foxes, it feeds primarily on small invertebrates such as insects.',
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/12213.jpg"
  },
  {
    pet_id: "12214",
    class: "mammal",
    family: "Canidae",
    genus: "Canini",
    species: "Bush Dog",
    description:
      "The bush dog (Speothos venaticus) is a canid found in Central and South America.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/12214.jpeg"
  },
  {
    pet_id: "12215",
    class: "mammal",
    family: "Canidae",
    genus: "Canini",
    species: "Crab-Eating Fox",
    description: "It eats crabs. Oh, and it's a fox.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/12215.jpeg"
  },
  {
    pet_id: "12216",
    class: "mammal",
    family: "Canidae",
    genus: "Canini",
    species: "African Wild Dog",
    description:
      "The African wild dog (Lycaon pictus), also known as the painted hunting dog, painted wolf, African hunting dog or African painted dog, is a canid native to sub-Saharan Africa.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/12216.jpg"
  },
  {
    pet_id: "12217",
    class: "mammal",
    family: "Canidae",
    genus: "Canini",
    species: "Ethiopian Wolf",
    description: "Basically an African coyote.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/12217.jpg"
  },
  {
    pet_id: "12218",
    class: "mammal",
    family: "Canidae",
    genus: "Canini",
    species: "Coyote",
    description: "Very mischievous and wile. Hates roadrunners.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/12218.jpg"
  },
  {
    pet_id: "12219",
    class: "mammal",
    family: "Canidae",
    genus: "Canini",
    species: "Side-Striped Jackal",
    description:
      "The side-striped jackal (Canis adustus) is a species of jackal, native to east and southern Africa.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/12219.jpg"
  },
  {
    pet_id: "12220",
    class: "mammal",
    family: "Canidae",
    genus: "Canini",
    species: "Gray Wolf",
    description: "Arch nemesis of Liam Neeson",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/12220.jpeg"
  },
  {
    pet_id: "13121",
    class: "mammal",
    family: "Balaenopteridae",
    genus: "Balaenoptera",
    species: "Blue Whale",
    description:
      "Largest living mammal. Fond of krill and plankton. 20-Million-gallon tank not included.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/13121.jpg"
  },
  {
    pet_id: "13122",
    class: "mammal",
    family: "Balaenopteridae",
    genus: "Balaenoptera",
    species: "Fin Whale",
    description:
      "The fin whale (Balaenoptera physalus), also known as finback whale or common rorqual and formerly known as herring whale or razorback whale, is a marine mammal belonging to the parvorder of baleen whales.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/13122.jpg"
  },
  {
    pet_id: "13123",
    class: "mammal",
    family: "Balaenopteridae",
    genus: "Balaenoptera",
    species: "Antarctic Minke Whale",
    description:
      "The Antarctic minke whale or southern minke whale (Balaenoptera bonaerensis) is a species of minke whale within the suborder of baleen whales.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/13123.jpeg"
  },
  {
    pet_id: "13124",
    class: "mammal",
    family: "Balaenopteridae",
    genus: "Megaptera",
    species: "Humpback Whale",
    description: "My humps. My humps. My lovely whaley lumps.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/13124.jpg"
  },
  {
    pet_id: "14125",
    class: "mammal",
    family: "Equidae",
    genus: "Equus",
    species: "Zebra",
    description: "Stripey horse.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/14125.jpg"
  },
  {
    pet_id: "14126",
    class: "mammal",
    family: "Equidae",
    genus: "Equus",
    species: "African Wild Ass",
    description:
      "The African wild ass or African wild donkey (Equus africanus) is a wild member of the horse family, Equidae.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/14126.jpg"
  },
  {
    pet_id: "14127",
    class: "mammal",
    family: "Equidae",
    genus: "Equus",
    species: "Przewalski's Horse",
    description: "Fat donkey.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/14127.jpg"
  },
  {
    pet_id: "14128",
    class: "mammal",
    family: "Ursidae",
    genus: "Ursus",
    species: "Kodiak Brown Bear",
    description: "Eats fish and the occasional documentarian.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/14128.jpg"
  },
  {
    pet_id: "14129",
    class: "mammal",
    family: "Equidae",
    genus: "Equus",
    species: "Kiang",
    description: "World's largest ass.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/14129.jpg"
  },
  {
    pet_id: "14130",
    class: "mammal",
    family: "Equidae",
    genus: "Equus",
    species: "Nubian Wild Ass",
    description:
      "The Nubian wild ass (Equus africanus africanus) is the nominate subspecies of African wild ass, and one of the ancestors of the domestic donkey, which was domesticated about 6,000 years ago.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/14130.jpg"
  },
  {
    pet_id: "15131",
    class: "mammal",
    family: "Hippopotamidae",
    genus: "Choeropsis",
    species: "Pygmy Hippopotamus",
    description:
      "The pygmy hippopotamus (Choeropsis liberiensis or Hexaprotodon liberiensis) is a small hippopotamid which is native to the forests and swamps of West Africa, primarily in Liberia, with small populations in Sierra Leone, Guinea, and Ivory Coast.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/15131.jpg"
  },
  {
    pet_id: "15232",
    class: "mammal",
    family: "Hippopotamidae",
    genus: "Hippopotamus",
    species: "Hippopotamus",
    description: "Most dangerous animal in Africa.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/15232.jpg"
  },
  {
    pet_id: "16133",
    class: "mammal",
    family: "Camelidae",
    genus: "Lama",
    species: "Lama",
    description:
      "The lama is a domesticated South American camelid, widely used as a meat and pack animal by Andean cultures since the Pre-Columbian era.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/16133.jpg"
  },
  {
    pet_id: "16134",
    class: "mammal",
    family: "Camelidae",
    genus: "Lama",
    species: "Guanaco",
    description: "Lama + deer = Guanaco",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/16134.jpg"
  },
  {
    pet_id: "16235",
    class: "mammal",
    family: "Camelidae",
    genus: "Camelus",
    species: "Bactrian camel",
    description: "Mike Mike Mike Mike Mike… What day is it Mike?",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/16235.jpg"
  },
  {
    pet_id: "16236",
    class: "mammal",
    family: "Camelidae",
    genus: "Camelus",
    species: "Dromedary",
    description:
      "The dromedary, also called the Arabian camel (Camelus dromedarius), is a large, even-toed ungulate with one hump on its back.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/16236.jpg"
  },
  {
    pet_id: "16337",
    class: "mammal",
    family: "Camelidae",
    genus: "Vicugna",
    species: "Alpaca",
    description:
      "The alpaca (Vicugna pacos) is a species of South American camelid. It is similar to, and often confused with, the llama. However, alpacas are often noticeably smaller than llamas.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/16337.jpg"
  },
  {
    pet_id: "16338",
    class: "mammal",
    family: "Camelidae",
    genus: "Vicugna",
    species: "Vicuña",
    description:
      "The vicuña (Vicugna vicugna) or vicuna is one of the two wild South American camelids which live in the high alpine areas of the Andes, the other being the guanaco.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/16338.jpg"
  },
  {
    pet_id: "17139",
    class: "mammal",
    family: "Suidae",
    genus: "Sus",
    species: "Bearded Pig",
    description: "Exactly what it sounds like.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/17139.jpg"
  },
  {
    pet_id: "17140",
    class: "mammal",
    family: "Suidae",
    genus: "Sus",
    species: "Visayan Warty Pig",
    description:
      "The Visayan warty pig (Sus cebifrons) is a critically endangered species in the pig genus (Sus).",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/17140.jpg"
  },
  {
    pet_id: "17141",
    class: "mammal",
    family: "Suidae",
    genus: "Sus",
    species: "Javan Warty Pig",
    description:
      "The Javan warty pig or Javan pig (Sus verrucosus) is a species of even-toed ungulate in the family Suidae.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/17141.JPG"
  },
  {
    pet_id: "17142",
    class: "mammal",
    family: "Suidae",
    genus: "Sus",
    species: "Wild Boar",
    description:
      "The wild boar (Sus scrofa), also known as the wild swine, Eurasian wild pig, or simply wild pig, is a suid native to much of Eurasia, North Africa, and the Greater Sunda Islands. Human intervention has spread its distribution further, making the species one of the widest-ranging mammals in the world, as well as the most widely spread suiform.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/17142.jpg"
  },
  {
    pet_id: "17243",
    class: "mammal",
    family: "Suidae",
    genus: "Phacochoerus",
    species: "Common Warthog",
    description: "Pumba",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/17243.jpg"
  },
  {
    pet_id: "17244",
    class: "mammal",
    family: "Suidae",
    genus: "Phacochoerus",
    species: "Desert Warthog",
    description:
      "The desert warthog (Phacochoerus aethiopicus) is a species of even-toed ungulate in the pig family (Suidae), found in northern Kenya and Somalia, and possibly Djibouti, Eritrea, and Ethiopia. ",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/17244.jpeg"
  },
  {
    pet_id: "17345",
    class: "mammal",
    family: "Suidae",
    genus: "Babyrousa",
    species: "North Sulawesi Babirusa",
    description:
      "The North Sulawesi babirusa, Babyrousa celebensis, is a pig-like animal native to Sulawesi and some nearby islands (Lembeh, Buton and Muna) in Indonesia. It has two pairs of large tusks composed of enlarged canine teeth.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/17345.jpeg"
  },
  {
    pet_id: "17446",
    class: "mammal",
    family: "Suidae",
    genus: "Potamochoerus",
    species: "Red River Hog",
    description:
      'The red river hog (Potamochoerus porcus), also known as the bush pig (but not to be confused with P. larvatus, common name "bushpig"), is a wild member of the pig family living in Africa, with most of its distribution in the Guinean and Congolian forests.',
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/17446.jpg"
  },
  {
    pet_id: "17547",
    class: "mammal",
    family: "Suidae",
    genus: "Porcula",
    species: "Pygmy Hog",
    description: "A hog, but smaller.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/17547.jpeg"
  },
  {
    pet_id: "18148",
    class: "mammal",
    family: "Hominidae",
    genus: "Pongo",
    species: "Sumatran Orangutan",
    description: "Manky Kong",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/18148.jpg"
  },
  {
    pet_id: "18249",
    class: "mammal",
    family: "Hominidae",
    genus: "Gorilla",
    species: "Western Gorilla",
    description:
      "The western gorilla (Gorilla gorilla) is a great ape—the type species as well as the most populous species of the genus Gorilla.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/18249.jpeg"
  },
  {
    pet_id: "18250",
    class: "mammal",
    family: "Hominidae",
    genus: "Gorilla",
    species: "Eastern Gorilla",
    description:
      "The eastern gorilla (Gorilla beringei) is a critically endangered species of the genus Gorilla and the largest living primate.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/18250.jpg"
  },
  {
    pet_id: "18350",
    class: "mammal",
    family: "Hominidae",
    genus: "Pan",
    species: "Bonobo",
    description:
      "The bonobo (/bəˈnoʊboʊ, ˈbɒnəboʊ/; Pan paniscus), also called the pygmy chimpanzee and less often, the dwarf or gracile chimpanzee,[3] is an endangered great ape and one of the two species making up the genus Pan; the other is Pan troglodytes, or the common chimpanzee. Apparently also a DJ. Who knew?",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/18350.jpg"
  },
  {
    pet_id: "18351",
    class: "mammal",
    family: "Hominidae",
    genus: "Pan",
    species: "Common Chimpanzee",
    description: "Pretty much an insanely strong child. May throw poop.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/18351.jpg"
  },
  {
    pet_id: "18452",
    class: "mammal",
    family: "Hominidae",
    genus: "Symphalangus",
    species: "Siamang",
    description:
      "The siamang (Symphalangus syndactylus) is an arboreal black-furred gibbon native to the forests of Indonesia, Malaysia and Thailand. They also have fantastic hair.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/18452.jpg"
  },
  {
    pet_id: "18553",
    class: "mammal",
    family: "Hominidae",
    genus: "Hylobates",
    species: "Agile Gibbon",
    description:
      "The agile gibbon (Hylobates agilis), also known as the black-handed gibbon, is an Old World primate in the gibbon family. It is found in Indonesia on the island of Sumatra, Malaysia, and southern Thailand.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/18553.jpg"
  },
  {
    pet_id: "19154",
    class: "mammal",
    family: "Ursidae",
    genus: "Ailuropoda",
    species: "Giant Panda",
    description: "Big, dumb bear. Will fall down.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/19154.jpg"
  },
  {
    pet_id: "19255",
    class: "mammal",
    family: "Ursidae",
    genus: "Tremarctos",
    species: "Spectacled Bear",
    description: "Does not actually wear glasses. Do not try to make it do so.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/19255.jpeg"
  },
  {
    pet_id: "19356",
    class: "mammal",
    family: "Ursidae",
    genus: "	Ursus",
    species: "Polar Bear",
    description:
      "The polar bear (Ursus maritimus) is a hypercarnivorous bear whose native range lies largely within the Arctic Circle, encompassing the Arctic Ocean, its surrounding seas and surrounding land masses. A boar (adult male) weighs around 350–700 kg (772–1,543 lb).",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/19356.jpg"
  },
  {
    pet_id: "19357",
    class: "mammal",
    family: "Phascolarctidae",
    genus: "Phascolarctos",
    species: "Koala",
    description: "Loves eucalyptus. Has some fantastic ears.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/19357.jpg"
  },
  {
    pet_id: "19358",
    class: "mammal",
    family: "Ursidae",
    genus: "	Ursus",
    species: "Cinnamon Bear",
    description:
      "The cinnamon bear (Ursus americanus cinnamomum) is both a color phase and subspecies of the American black bear, native to central and western areas of the United States and Canada.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/19358.jpg"
  },
  {
    pet_id: "19359",
    class: "mammal",
    family: "Ursidae",
    genus: "	Ursus",
    species: "Glacier Bear",
    description:
      "The glacier bear (Ursus americanus emmonsii), sometimes referred to as the blue bear, is a subspecies of American black bear with silver-blue or gray hair endemic to Southeast Alaska.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/19359.jpg"
  },
  {
    pet_id: "19360",
    class: "mammal",
    family: "Ursidae",
    genus: "	Ursus",
    species: "Baluchistan black bear",
    description:
      "The Baluchistan black bear (Ursus thibetanus gedrosianus), also called the Pakistan black bear is a subspecies of the Asian black bear occurring in the Baluchistan Mountains of southern Pakistan and Iran. It has an unusually thin coat for an Asian black bear, but this is because it is found in a warmer climate than most of the other subspecies, which are found in the much colder Himalayan Mountains",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/19360.jpg"
  },
  {
    pet_id: "19361",
    class: "mammal",
    family: "Ursidae",
    genus: "	Ursus",
    species: "Japanese Black Bear",
    description:
      "The Japanese black bear (Ursus thibetanus japonicus) is a subspecies of the Asian black bear that lives on three main islands of Japan: Honshu, Shikoku and Kyushu.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/19361.jpg"
  },
  {
    pet_id: "19362",
    class: "mammal",
    family: "Ursidae",
    genus: "	Ursus",
    species: "Ussuri Black Bear",
    description:
      "The Ussuri black bear (Ursus thibetanus ussuricus), also known as the Manchurian black bear, is a large subspecies of the Asian black bear native to the Far East, including the Korean Peninsula.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/19362.JPG"
  },
  {
    pet_id: "10163",
    class: "mammal",
    family: "Odobenidae",
    genus: "Odobenus",
    species: "Walrus",
    description: "Fat seal with big teeth. Goo goo g' joob.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/10163.jpeg"
  },
  {
    pet_id: "10164",
    class: "mammal",
    family: "Monodontidae",
    genus: "Monodon",
    species: "Narwhal",
    description: "Water unicorn.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/10164.png"
  },
  {
    pet_id: "10165",
    class: "mammal",
    family: "Cervidae",
    genus: "Hydropotes",
    species: "Water Deer",
    description: "Vampire deer.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/10165.jpg"
  },
  {
    pet_id: "10166",
    class: "mammal",
    family: "Giraffidae",
    genus: "Giraffa",
    species: "Giraffe",
    description:
      "Hope your car has a sunroof. Also, be prepared to spend extra on ties.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/10166.jpg"
  },
  {
    pet_id: "10167",
    class: "mammal",
    family: "Giraffidae",
    genus: "Okapia",
    species: "Okapi",
    description:
      "The Okapi, also known as the forest giraffe, congolese giraffe or zebra giraffe, is an artiodactyl mammal native to the northeast of the Democratic Republic of the Congo in Central Africa.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/10167.jpg"
  },
  {
    pet_id: "10168",
    class: "mammal",
    family: "Bovidae",
    genus: "Bos",
    species: "Gaur",
    description:
      "The Gaur, also called the Indian bison, is the largest extant bovine. This species is native to South and Southeast Asia.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/10168.jpg"
  },
  {
    pet_id: "10169",
    class: "mammal",
    family: "Bovidae",
    genus: "Bos",
    species: "Zebu",
    description:
      "The Zebu, sometimes known as indicine cattle or humped cattle, is a species or subspecies of domestic cattle originating in South Asia.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/10169.jpg"
  },
  {
    pet_id: "10170",
    class: "mammal",
    family: "Bovidae",
    genus: "Bos",
    species: "Wild Yak",
    description:
      "If you don't scrub that kitchen floor, you ain't gonna rock and roll no more. Yakety yak (Don't talk back)",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/10170.jpg"
  },
  {
    pet_id: "10171",
    class: "mammal",
    family: "Cervidae",
    genus: "Rangifer",
    species: "Reindeer",
    description: "CANNOT ACTUALLY FLY. DO NOT ATTEMPT.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/10171.jpg"
  },
  {
    pet_id: "10172",
    class: "mammal",
    family: "Cervidae",
    genus: "Odocoileus",
    species: "White-Tailed Deer",
    description: "Forest puppies.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/10172.jpg"
  },
  {
    pet_id: "10173",
    class: "mammal",
    family: "Cervidae",
    genus: "Alces",
    species: "Moose",
    description: "Don't you dare give it a muffin.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/10173.jpg"
  },
  {
    pet_id: "4111",
    class: "Reptilia",
    family: "Crocodylidae",
    genus: "Crocodylus",
    species: "Freshwater Crocodile",
    description: "Made famous by Steve Irwin.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/4111.jpg"
  },
  {
    pet_id: "4112",
    class: "Reptilia",
    family: "Crocodylidae",
    genus: "Crocodylus",
    species: "Mugger Crocodile",
    description: "Just give it your wallet. He'll leave you alone.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/4112.jpg"
  },
  {
    pet_id: "4113",
    class: "Reptilia",
    family: "Crocodylidae",
    genus: "Crocodylus",
    species: "American Crocodile",
    description:
      "The American Crocodile is a species of crocodilian found in the Neotropics. It is the most widespread of the four extant species of crocodiles from the Americas, with populations present from South Florida and the coasts of Mexico to as far south as Peru and Venezuela.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/4113.jpg"
  },
  {
    pet_id: "4114",
    class: "Reptilia",
    family: "Crocodylidae",
    genus: "Crocodylus",
    species: "Saltwater Crocodile",
    description:
      "Mamma always said crocodiles are angry because they got all them teeth but no toothbrush.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/4114.jpg"
  },
  {
    pet_id: "4215",
    class: "Reptilia",
    family: "Alligatoridae",
    genus: "Caiman",
    species: "Broad-Snouted Caiman",
    description:
      "The broad-snouted caiman (Caiman latirostris) is a crocodilian reptile found in eastern and central South America, including southeastern Brazil, northern Argentina, Uruguay, Paraguay, and Bolivia.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/4215.jpg"
  },
  {
    pet_id: "4216",
    class: "Reptilia",
    family: "Alligatoridae",
    genus: "Caiman",
    species: "Yacare Caiman",
    description:
      "The yacare caiman (Caiman yacare, jacaré in Portuguese) is a species of caiman found in central South America, including northeastern Argentina, Uruguay, southeastern Peru, eastern Bolivia, central/southwest Brazil, and the rivers of Paraguay.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/4216.jpg"
  },
  {
    pet_id: "4227",
    class: "Reptilia",
    family: "Alligatoridae",
    genus: "Alligator",
    species: "American Alligator",
    description: "Oooo dats a big ole ornery gatuh down dayuh.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/4227.jpg"
  },
  {
    pet_id: "4228",
    class: "Reptilia",
    family: "Alligatoridae",
    genus: "Alligator",
    species: "Chinese Alligator",
    description:
      "The Chinese Alligator, also known as the Yangtze alligator, China alligator, or historically called the muddy dragon, is one of two known living species of Alligator, a genus in the family Alligatoridae, the other being the American alligator.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/4228.jpg"
  },
  {
    pet_id: "4239",
    class: "Reptilia",
    family: "Alligatoridae",
    genus: "Paleosuchus",
    species: "Cuvier's Dwarf Caiman",
    description:
      "Cuvier's dwarf caiman (Paleosuchus palpebrosus) is a small crocodilian from northern and central South America in the alligator family.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/4239.jpg"
  },
  {
    pet_id: "42310",
    class: "Reptilia",
    family: "Alligatoridae",
    genus: "Paleosuchus",
    species: "Smooth-Fronted Caiman",
    description: "He's a smooth ali-gator.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/42310.jpg"
  },
  {
    pet_id: "42411",
    class: "Reptilia",
    family: "Alligatoridae",
    genus: "Melanosuchus",
    species: "Black Caiman",
    description:
      "The black caiman is a species of large crocodilian and, along with the American alligator, is one of the biggest extant members of the family Alligatoridae and order Crocodilia.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/42411.jpg"
  },
  {
    pet_id: "43112",
    class: "Reptilia",
    family: "Gavialidae",
    genus: "Tomistoma",
    species: "False Gharial",
    description:
      "The false gharial, also known as Malayan gharial, Sunda gharial and tomistoma, is a freshwater crocodilian native to Peninsular Malaysia, Borneo, Sumatra and Java.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/43112.jpg"
  },
  {
    pet_id: "44113",
    class: "Reptilia",
    family: "Pythonidae",
    genus: "Python",
    species: "Burmese Python",
    description:
      "The Burmese python (Python bivittatus) is one of the five largest species of snakes in the world (about the third-largest as measured either by length or weight).",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/44113.jpg"
  },
  {
    pet_id: "45114",
    class: "Reptilia",
    family: "Boidae",
    genus: "Boa",
    species: "Boa Constrictor",
    description: "Strangle noodle.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/45114.jpg"
  },
  {
    pet_id: "45215",
    class: "Reptilia",
    family: "Boidae",
    genus: "Eunectes",
    species: "Green Anaconda",
    description: "Largest of the danger noodles.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/45215.jpg"
  },
  {
    pet_id: "45216",
    class: "Reptilia",
    family: "Boidae",
    genus: "Eunectes",
    species: "Bolivian Anaconda",
    description:
      "Bolivian Anaconda is a nonvenomous boa species known only from the northeastern parts of Bolivia, but it possibly occurs in adjacent parts of Brazil.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/45216.jpeg"
  },
  {
    pet_id: "46117",
    class: "Reptilia",
    family: "Viperidae",
    genus: "Montivipera",
    species: "Central Turkish Mountain Viper",
    description:
      "A venomous viper species endemic to the mountainous regions of central Turkey.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/46117.jpg"
  },
  {
    pet_id: "2111",
    class: "Aves",
    family: "Struthionidae",
    genus: "Struthio",
    species: "Ostrich",
    description: "The Forest Gump of birds.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/2111.jpg"
  },
  {
    pet_id: "2222",
    class: "Aves",
    family: "Apterygidae",
    genus: "Apteryx",
    species: "Kiwi",
    description:
      "Kiwi, or kiwis, are flightless birds native to New Zealand, in the genus Apteryx and family Apterygidae. Approximately the size of a domestic chicken, kiwi are by far the smallest living ratites (which also consist of ostriches, emus, rheas, and cassowaries), and lay the largest egg in relation to their body size of any species of bird in the world",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/2222.jpg"
  },
  {
    pet_id: "2333",
    class: "Aves",
    family: "Anatidae",
    genus: "Anas",
    species: "Steamer Duck",
    description:
      "The steamer ducks are a genus (Tachyeres) of ducks in the family Anatidae. All of the four species occur at the southern cone of South America in Chile and Argentina, and all except the flying steamer duck are flightless; even this one species capable of flight rarely takes to the air.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/2333.jpg"
  },
  {
    pet_id: "2344",
    class: "Aves",
    family: "Anatidae",
    genus: "Cygnus",
    species: "Mute swan",
    description:
      "The mute swan (Cygnus olor) is a species of swan and a member of the waterfowl family Anatidae. It is native to much of Eurasia, and (as a rare winter visitor) the far north of Africa. It is an introduced species in North America, Australasia and southern Africa. The name 'mute' derives from it being less vocal than other swan species.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/2344.jpg"
  },
  {
    pet_id: "2345",
    class: "Aves",
    family: "Anatidae",
    genus: "Cygnus",
    species: "Trumpeter swan",
    description:
      "The trumpeter swan (Cygnus buccinator) is a species of swan found in North America. The heaviest living bird native to North America, it is also the largest extant species of waterfowl with a wingspan that may exceed 10 ft (3.0 m).",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/2345.jpg"
  },
  {
    pet_id: "2356",
    class: "Aves",
    family: "Anatidae",
    genus: "Hymenolaimus",
    species: "Blue Duck",
    description:
      "The blue duck or whio (Hymenolaimus malacorhynchos) is a member of the duck, goose and swan family Anatidae endemic to New Zealand. It is the only member of the genus Hymenolaimus.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/2356.JPG"
  },
  {
    pet_id: "2337",
    class: "Aves",
    family: "Anatidae",
    genus: "Anas",
    species: "Mallard",
    description:
      "The mallard (/ˈmælɑːrd/ or /ˈmælərd/) (Anas platyrhynchos) is a dabbling duck that breeds throughout the temperate and subtropical Americas, Eurasia, and North Africa and has been introduced to New Zealand, Australia, Peru, Brazil, Uruguay, Argentina, Chile, Colombia, the Falkland Islands, and South Africa.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/2337.jpg"
  },
  {
    pet_id: "2338",
    class: "Aves",
    family: "Anatidae",
    genus: "Anas",
    species: "Yellow-Billed Duck",
    description:
      "The yellow-billed duck (Anas undulata) is a 51–58 cm long dabbling duck which is an abundant resident breeder in southern and eastern Africa.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/2338.jpg"
  },
  {
    pet_id: "2339",
    class: "Aves",
    family: "Anatidae",
    genus: "Anas",
    species: "Hawaiian duck",
    description:
      "The Hawaiian duck (Anas wyvilliana) or koloa is a species of bird in the family Anatidae that is endemic to the large islands of Hawaiʻi. Taxonomically, the koloa is closely allied with the mallard. It differs in that it is monochromatic (with similarly marked males and females) and non-migratory.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/2339.jpg"
  },
  {
    pet_id: "24110",
    class: "Aves",
    family: "Sulidae",
    genus: "	Sula",
    species: "Blue-Footed Booby",
    description: "The best bird, period.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/24110.jpg"
  },
  {
    pet_id: "3111",
    class: "Actinopterygii",
    family: "Melanocetidae",
    genus: "Melanocetus",
    species: "Humpback Anglerfish",
    description: "Do not go into the light.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/3111.jpg"
  },
  {
    pet_id: "3212",
    class: "Actinopterygii",
    family: "Stomiidae",
    genus: "Chauliodus",
    species: "Viperfish",
    description:
      "A viperfish is any species of marine fish in the genus Chauliodus. Viperfish are characterized by long, needle-like teeth and hinged lower jaws. A typical viperfish grows to lengths of 30 to 60 cm (12 to 23.5 in). Viperfish stay near lower depths (250–5,000 feet [80–1,520 m]) in the daytime and shallower depths at night, primarily in tropical and temperate waters.",
    image_url: "https://s3.us-east-2.amazonaws.com/petpicks/3212.jpg"
  }
];

const Seed = pets => {
  for (let pet of pets) {
    const newDoc = new model.Pet_Info({
      pet_id: pet.pet_id,
      genus: pet.genus,
      species: pet.species,
      description: pet.description,
      image_url: pet.image_url
    });

    model.Pet_Info.create(newDoc, (err, result) => {
      if (err) {
        console.log(
          "Error creating new document in Pet_Info collection: ",
          err
        );
      } else {
        console.log("New document successfully created in Pet_Info");
      }
    });
  }
  console.log("How many pets is too many pets?");
};

Seed(data);
