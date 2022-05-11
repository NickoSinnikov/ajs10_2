import GameSaving from "./gamesaving";
import json from "./parser";
import read from "./reader";

export default class GameSaveLoader {
  static async load() {
    const jsonRead = await read();
    const jsonPars = await json(jsonRead);
    return new GameSaving(JSON.parse(jsonPars));
  }
}
