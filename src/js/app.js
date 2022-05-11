// TODO: write your code here

import GameSaveLoader from "./GameSaveLoader";

(async () => {
  try {
    await GameSaveLoader.load();
  } catch (err) {
    throw new Error(err);
  }
})();
