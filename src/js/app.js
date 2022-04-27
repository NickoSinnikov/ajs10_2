// TODO: write your code here

import json from "./parser";
import read from "./reader";

export default class GameSaveLoader {
  static load(data) {
    return new Promise((resolve) => {
      (async () => {
        try {
          const jsonRead = await read();
          const jsonPars = await json(jsonRead);
          return resolve(JSON.parse(jsonPars));
        } catch {
          new Error("Ошибка");
        }
      })();
    });
  }
}
