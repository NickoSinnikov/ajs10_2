import GameSaveLoader from "../GameSaveLoader";
import GameSaving from "../gamesaving";
test("show load data", async () => {
  const result = new GameSaving({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: "Hitman",
      level: 10,
      points: 2000,
    },
  });

  await expect(GameSaveLoader.load()).resolves.toEqual(result);
});
