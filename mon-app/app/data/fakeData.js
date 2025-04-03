const fakeData = {
  teachers: [
    {
      id: 1,
      name: "Jean Dupont",
      avatar: require("./avatars/avatar1.png"),
      prints: [
        { copies: 5, totalCost: 75, date: "2023-04-01 10:30" },
        { copies: 10, totalCost: 150, date: "2023-04-02 14:00" },
      ],
    },
    {
      id: 2,
      name: "Marie Curie",
      avatar: require("./avatars/avatar2.png"),
      prints: [],
    },
    {
      id: 3,
      name: "Albert Einstein",
      avatar: require("./avatars/avatar3.png"),
      prints: [
        { copies: 15, totalCost: 225, date: "2023-04-03 09:00" },
        { copies: 20, totalCost: 300, date: "2023-04-04 11:15" },
      ],
    },
    {
      id: 4,
      name: "Isaac Newton",
      avatar: require("./avatars/avatar4.png"),
      prints: [
        { copies: 8, totalCost: 120, date: "2023-04-05 13:45" },
      ],
    },
    {
      id: 5,
      name: "Galileo Galilei",
      avatar: require("./avatars/avatar5.png"),
      prints: [
        { copies: 12, totalCost: 180, date: "2023-04-06 10:00" },
        { copies: 18, totalCost: 270, date: "2023-04-07 15:30" },
      ],
    },
    {
      id: 6,
      name: "Nikola Tesla",
      avatar: require("./avatars/avatar6.png"),
      prints: [
        { copies: 25, totalCost: 375, date: "2023-04-08 11:45" },
        { copies: 30, totalCost: 450, date: "2023-04-09 14:20" },
      ],
    },
  ],
};

export default fakeData;


