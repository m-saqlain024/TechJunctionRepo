import { count } from "console";
import { create } from "zustand";

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears: any) => set({ bears: newBears }),
}));

type State = {
  firstName: string;
  lastName: string;
};

type Action = {
  updateFirstName: (firstName: State["firstName"]) => void;
  updateLastName: (lastName: State["lastName"]) => void;
};

export const usePersonStore = create<State & Action>((set) => ({
  firstName: "",
  lastName: "",
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  updateLastName: (lastName) => set(() => ({ lastName: lastName })),
}));

// Define the state type
type Statee = {
  nested: {
    count: number;
    start: number;
  };
};

type Actionn = {
  Inc: () => void;
};

export const useCountStore = create<Statee & Actionn>((set) => ({
  nested: { count: 0, start: 10 },
  Inc: () =>
    set((state) => ({
      nested: {
        ...state.nested,
        count: state.nested.count + 1,
        start: state.nested.start + 10,
      },
    })),
}));
