/**
 * Function that are useful throughout the application
 */

import { Seq } from "immutable";

/**
 * Get an immutable copy of an instance
 * @param {any} target object to make immutable
 * @returns an immutable version of target without function
 * only includes own properties
 */
export function immutInstance(target) {
   if (typeof target === "object") {
      return Seq(target)
         .filter(v => typeof v !== "function")
         .map(immutInstance);
   }
   return target;
}

/**
 * Deeply freeze an obj
 */
export function deepFreeze(obj) {
   for (const key of Object.getOwnPropertyNames(obj)) {
      if (typeof obj[key] === "object") {
         deepFreeze(obj[key]);
      }
   }
   Object.freeze(obj);
}

/**
 * Return an array of v items of size n
 * @param {number} n size
 * @param {any} v value in array
 */
export function nOf(n, v) {
   return (new Array(n)).fill(v);
}

/**
 * convert a generator function to a comprehsion function
 */
export function comprehend(generator) {
   return (...props) => [...generator(...props)];
}
