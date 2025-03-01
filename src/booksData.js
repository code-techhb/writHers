import uneSiLongueLettreImage from "../src/assets/une_si_longue_lettre.jpg";
import becomingImage from "../src/assets/becoming.jpg";
import taDeuxiemeVieImage from "../src/assets/ta_deuxieme_vie.jpg";
import letterToMyDaughterImage from "../src/assets/letter_to_my_daugther.jpg";
import retourALessentielImage from "../src/assets/retour_a_l_esensciel.jpg";
import etPourquoiPasImage from "../src/assets/et_pourquoi_pas.jpg";
import neuroscientistImage from "../src/assets/so_you_want_to_be_neuroscientist.jpg";
import tonDernierRegardImage from "../src/assets/ton_dernier_regard.jpg";
import whenIWasPuertoRicanImage from "../src/assets/when_I_was_puerto_rican.jpg";
import breakingThroughImage from "../src/assets/breaking_through.jpg";
import theLightWeCarryImage from "../src/assets/the_light_we_carry.jpg";
import educatedImage from "../src/assets/educated.jpg";
import beReadyImage from "../src/assets/be_ready.jpg";
import jeunerImage from "../src/assets/jeuner.jpg";
import maRouteImage from "../src/assets/surMaRoute.jpg";
import renoueImage from "../src/assets/renoueAvecTonCoeur.jpg";

const books = [
  {
    id: 1,
    title: "Une Si Longue Lettre",
    author: "Mariama Bâ",
    coverImage: uneSiLongueLettreImage,
    language: "French",
    translated: true,
    genre: "Novel",
    quote: `Puissance des livres, invention merveilleuse de l'astucieuse intelligence humaine. Signes divers,associés en sons, sons différents qui moulent le mot. Agencement de mots d'où jaillit l'Idée, la Pensée, l'Histoire,la Science,la Vie. Instrument unique de relation et de culture, moyen inégalé de donner et de recevoir. Les Livres soudent des générations au même labeur continu qui fait progresser
`,
  },
  {
    id: 2,
    title: "Becoming",
    author: "Michelle Obama",
    coverImage: becomingImage,
    language: "French, English",
    translated: true,
    genre: "Memoir",
    quote:
      "For me, becoming isn't about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn't end.",
  },
  {
    id: 3,
    title: "Ta Deuxième Vie Commence Quand Tu Réalises Que Tu N'en As Qu'Une",
    author: "Raphaëlle Giordano",
    coverImage: taDeuxiemeVieImage,
    language: "French",
    translated: true,
    genre: "Personal Growth",
    quote:
      "Ce n'est pas entre les murs d'un cabinet que la personne qui désire changer trouvera sa vérité, ni qu'elle comprendra quel sens donner à sa vie! C'est dans l'action, le concret, l'expérience...",
  },
  {
    id: 4,
    title: "Letter to My Daughter",
    author: "Maya Angelou",
    coverImage: letterToMyDaughterImage,
    language: "English",
    translated: true,
    genre: "Autobiography",
    quote:
      "Be certain that you do not die without having done something wonderful for humanity.",
  },
  {
    id: 5,
    title: "Retour à L'E-Sens-Ciel",
    author: "Myriam Lakdhar-Bounamcha",
    coverImage: retourALessentielImage,
    language: "French",
    translated: false,
    genre: "Spirituality",
    quote:
      "Pour vivre sereinement, spirituellement et de façon riche et épanouie, tu dois, me disait-il, monter la garde à la porte de ton jardin et ne laisser pénétrer et circuler que les meilleures informations. Celles qui t'éduquent, celles qui te protègent, celles qui sont vraies, douces, justes, sages et non violentes.",
  },
  {
    id: 6,
    title: "Et Pourquoi Pas ?",
    author: "Meryem Belmokhtar",
    coverImage: etPourquoiPasImage,
    language: "French",
    translated: false,
    genre: "Memoir",
    quote:
      "S'il y'a bien une chose que j'ai apprise, en tant que femme et mère épanouie, c'est que chaque chose qui nous arrive dans notre vie a forcément son rôle, parfois on s'en rend compte très vite, parfois il faut un peu de temps et beaucoup de patience. J'ai aussi compris que tant que l'on cherche le bien, on trouve le bien, et que tant que l'on invoque Dieu, Il répond présent",
  },
  {
    id: 7,
    title: "So You Want to Be a Neuroscientist?",
    author: "Ashley Juavinett",
    coverImage: neuroscientistImage,
    language: "English",
    translated: false,
    genre: "Science, Career Guide",
    quote:
      "As a student, it can help to build a support group with your lab mates or other folks in your program. Spend some time giving each other positive feedback about your projects and progress in the lab. Talk about uncertainties you feel about your research or about your next steps.",
  },
  {
    id: 8,
    title: "Ton Dernier Regard",
    author: "Oumeyma Amjid",
    coverImage: tonDernierRegardImage,
    language: "French",
    translated: false,
    genre: "Islam",
    quote:
      "L'Idée de mourir fait peur, et c'est normal. Pourtant, dès que tu décides d'accepter la réalité de la mort, tu t'ouvres à une vie alignée avec tes vraies valeurs. Alignée à ce qui est réellement important pour toi. Tu oses, tu grandis, tu fais de meilleurs choix. Tu oeuvres pour Allah, tu recherches son amour, Sa satisfaction.... Sa rencontre. .....",
  },
  {
    id: 9,
    title: "When I Was Puerto Rican",
    author: "Esmeralda Santiago",
    coverImage: whenIWasPuertoRicanImage,
    language: "English",
    translated: true,
    genre: "Memoir",
    quote: "A ship that doesn't sail, never reaches port.",
  },
  {
    id: 10,
    title: "Breaking Through: My Life in Science",
    author: "Dr. Katalin Kariko",
    coverImage: breakingThroughImage,
    language: "English",
    translated: true,
    genre: "Autobiography",
    quote:
      "What I lacked in natural ability, I could make up for in effort. I could work harder, put in more hours, do more, and do it with greater care.",
  },
  {
    id: 11,
    title: "The Light We Carry",
    author: "Michelle Obama",
    coverImage: theLightWeCarryImage,
    language: "English",
    translated: true,
    genre: "Memoir",
    quote:
      "When we learn to foster what's unique in the people around us, we become better able to build compassionate communities and make meaningful change.",
  },
  {
    id: 12,
    title: "Educated",
    author: "Tara Westover",
    coverImage: educatedImage,
    language: "English",
    translated: true,
    genre: "Memoir",
    quote: `It has never occurred to you," he said,"that you might have as much right to be here as anyone.`,
  },
  {
    id: 13,
    title: "Be Ready When the Luck Happens",
    author: "Ina Garten",
    coverImage: beReadyImage,
    language: "English",
    translated: true,
    genre: "Memoir",
    quote:
      "Don't worry, Passages assured me, your twenties are the time when you master what you think you're supposed to do. But in your thirties, when you've figured out what you like and don't like, and you're more confident, you can move on to what you really want to do, which might be totally different.",
  },
  {
    id: 14,
    title: "Sur Ma Route",
    author: "Miana Bayani",
    coverImage: maRouteImage,
    language: "French",
    translated: false,
    genre: "Jeunesse",
    quote:
      "La route sera longue, Ali, mais c'est comme ça. Tu peux trébucher et attendre que quelqu'un t'aide à te relever, ou bien décider que tu es assez forte pour te relever toute seule et pour continuer à avancer. C'est ton choix, Ali.",
  },
  {
    id: 15,
    title: "Jeuner, Avoir Soif de Dieu",
    author: "Sabrina Heartist Guassim",
    coverImage: jeunerImage,
    language: "French",
    translated: false,
    genre: "Spirituality",
    quote:
      "Quand à toi, je te propose de faire de ta solitude la meilleure des compagnes, de faire de ta solitude non pas une ombre mais une lumière dans ta foi. Ta foi c'est la preuve que tu n'es pas seul(e).",
  },
  {
    id: 16,
    title: "Renoue avec ton coeur",
    author: "Yasmin Mogahed",
    coverImage: renoueImage,
    language: "French",
    translated: true,
    genre: "Spirituality",
    quote:
      "Cet espoir d'obtenir la miséricorde d'Allah devrait être la raison pour laquelle nous désirons pardonner, et un jour, accéder au seul monde qui soit vraiment parfait.",
  },
];

export default books;
