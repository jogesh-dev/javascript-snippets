// modules don't work in local path, use live server for testing modules

import { add } from "./add.js";
import { subtract } from "./subtract.js";

export const myMath = {
  add : add,
  minus : (a,b) => {
    return subtract(a,b)
  },
  subtract : subtract
}