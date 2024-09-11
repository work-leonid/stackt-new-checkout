import { writable } from "svelte/store";

// A writable store to keep track of the total price
export const totalPrice = writable(0);
