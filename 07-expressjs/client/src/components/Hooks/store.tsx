// import { z } from "zod";
// import { create } from "zustand";

// const StoreSchema = z.object({
//   bears: z.number(),
//   increase: z.function(),
//   decrease : z.function()
// });

// type Store = z.infer<typeof StoreSchema>;

// const useStore = create<Store>((set) => ({
//   bears: 0,
//   increase: () => set((state) => ({ bears: state.bears + 1 })),
//   decrease : ()=> set((state)=>({bears : state.bears -1}))
// }));

// export default useStore;

// const personalDetails = z.object(
//     firstName : z.string(),
//     lastName : z.string()
// )

// type personalDetailsSchema = z.infer<typeof personalDetails>

// const  usePersonDetails = create<personalDetailsSchema>((set)=>{
//     firstName: '',
//   lastName: '',
//   updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
//   updateLastName: (lastName) => set(() => ({ lastName: lastName })),

// })
