import { state } from "./state";

export const config = {
  state,
  actions: {
    increaseCount({ state }) {
      state.count++;
    },
    decreaseCount({ state }) {
      state.count--;
    },
  },
};
