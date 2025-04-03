const fakeData = {
  teachers: [
    {
      id: 1,
      name: "Jean Dupont",
      subject: "Math",
      impressions: 10,
      payment: 1500,
      avatar: require("../assets/avatar1.png"),
      prints: [
        {
          copies: 5,
          totalCost: 75,
          date: "2023-04-01 10:30",
        },
        {
          copies: 10,
          totalCost: 150,
          date: "2023-04-02 14:00",
        },
      ],
    },
    {
      id: 2,
      name: "Marie Curie",
      subject: "Science",
      impressions: 20,
      payment: 3000,
      avatar: require("../assets/avatar2.png"),
      prints: [],
    },
  ],
};

export default fakeData;