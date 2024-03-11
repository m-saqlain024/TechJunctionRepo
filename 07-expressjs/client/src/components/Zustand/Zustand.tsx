// "use client";
// import React from "react";
// import useStore from "../Hooks/store";

// function Zustand() {
//   const bears = useStore((state: { bears: any }) => state.bears);
//   return (
//     <div>
//       <div className="pl-24 underline text-3xl">{bears}</div>
//       <Controls />
//     </div>
//   );
// }

// export default Zustand;

// function Controls() {
//   const increase = useStore((state) => state.increase);
//   const decrease = useStore((state) => state.decrease);
//   return (
//     <div className=" flex gap-6">
//       <button
//         onClick={increase}
//         className="block text-white bg-blue-600 p-4 rounded-lg capitalize"
//       >
//         one up
//       </button>
//       <button
//         onClick={decrease}
//         className="block text-white bg-blue-600 p-4 rounded-lg capitalize"
//       >
//         one down
//       </button>
//     </div>
//   );
// }
