// @ts-ignore
// @ts-ignore
import { writable } from "svelte/store";
// function writable(value) {
//   const subscribers = new Set();


//   // @ts-ignore
//   function subscribe(subscribers) {
//     subscribers.add(subscribe);
//     return ()=> {
//       subscribers.delete(subscribe)
//     }
//   }

//   // @ts-ignore
//   function update(updater) {
//     // @ts-ignore
//     set(updater(value));
//   }

//   // @ts-ignore
//   function set(newValue) {
//     // @ts-ignore
//     value = newValue;
//     subscribers.forEach((subscriber) => subscribe(subscriber));
//   }

//   // @ts-ignore
//   return { subscribe, update, set };
// }

export const counter = writable(0);



export const saqi = writable('', (set, update)=>{

     set('ali')
     update('hussain')
})
