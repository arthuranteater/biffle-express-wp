exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("classmates")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("classmates").insert([
        {
          firstName: "Hunt",
          lastName: "Applegate",
          hometown: "Charleston",
          prevOccupation: "Benefits Advisor",
          favoriteNum: 8,
          pastime: "cooking"
        },
        {
          firstName: "Maddie",
          lastName: "Kreamer",
          hometown: "Des Moines, IA",
          prevOccupation: "Server/Bartender",
          favoriteNum: 7,
          pastime: "Backpacking"
        },
        {
          firstName: "Kris",
          lastName: "Kamikawa",
          hometown: "Mililani, HI",
          prevOccupation: "Legislative Aide",
          favoriteNum: 11,
          pastime: "easy climbing"
        },
        {
          firstName: "Jed",
          lastName: "Prentup",
          hometown: "Boulder",
          prevOccupation: "PokerDealer",
          favoriteNum: 24,
          pastime: "delving"
        },
        {
          firstName: "Jose",
          lastName: "Stricklin",
          hometown: "San German",
          prevOccupation: "Retail",
          favoriteNum: 4,
          pastime: "Shakespearean Elocution"
        },
        {
          firstName: "Steve",
          lastName: "Lopez",
          hometown: "FrankFort",
          prevOccupation: "Bounty Hunter",
          favoriteNum: 710,
          pastime: "running"
        },
        {
          firstName: "Conrad",
          lastName: "Wright",
          hometown: "Durango",
          prevOccupation: "Rural Development Consultant",
          favoriteNum: 12,
          pastime: "Bird Watching"
        },
        {
          firstName: "Anhuelita",
          lastName: "LaChica",
          hometown: "Kazakhstan",
          prevOccupation: "Masseuse",
          favoriteNum: 2,
          pastime: "sleeping"
        },
        {
          firstName: "Brice",
          lastName: "Sinkule",
          hometown: "Crete, NE",
          prevOccupation: "Sale Consultant",
          favoriteNum: 12,
          pastime: "Basketball"
        }
      ]);
    });
};
