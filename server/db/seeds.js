use game;
db.dropDatabase();

db.question.insertMany(
  [
    {
      answerType: "picture",
      genre: "History",
      question: "Which of these is a Greek temple?",
      image1: "https://www.ancient.eu/img/r/p/500x600/8297.jpg?v=1520937625",
      image2: "https://livitaly-666b.kxcdn.com/wp-content/uploads/2017/07/rome-colosseum-1-750x510.jpg",
      answer: "image-left",
      hint: "Ancient Greek architechture features columns."
    },
    {
      answerType: "number",
      genre: "Mathematics",
      question: "Paul has 7 boxes of 14 balls. He lost 6 balls. How many balls does he have now?",
      answer: 92,
      hint: "7 x 14 = 98. Now subtract 6!"
    },
    {
      answerType: "multipleChoice",
      genre: "Science",
      question: "What is the temperature at which water boils?",
      answer: 100,
      choice1: 10,
      choice2: 5600,
      choice3: 0,
      hint: "0 Celsius is the temperature at which water freezes. 5600 Celsius is the temperature of the Sun."
    },
    {
      answerType: "multipleChoice",
      genre: "Science",
      question: "What is the planet closest to the Sun?",
      answer: "Mercury",
      choice1: "Earth",
      choice2: "Pluto",
      choice3: "Neptun",
      hint: "Pluto is a dwarf planet and Neptun is the farthest planet from the Sun."
    },
    {
      answerType: "multipleChoice",
      genre: "Science",
      question: "The process by which green plants manufacture their food is called _____ ?",
      answer: "Photosynthesis",
      choice1: "Respiration",
      choice2: "Digestion",
      choice3: "Excretion",
      hint: "The food you eat is first digested and later excreted."
    }
  ]
);

// other answer_type is "text"
