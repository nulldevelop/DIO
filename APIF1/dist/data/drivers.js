"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/data/drivers.ts
var drivers_exports = {};
__export(drivers_exports, {
  drivers: () => drivers
});
module.exports = __toCommonJS(drivers_exports);
var drivers = [
  { id: 1, name: "Lewis Hamilton", team: "Ferrari" },
  { id: 2, name: "Charles Leclerc", team: "Ferrari" },
  { id: 3, name: "George Russell", team: "Mercedes" },
  { id: 4, name: "Andrea Kimi Antonelli", team: "Mercedes" },
  { id: 5, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 6, name: "Liam Lawson", team: "Red Bull Racing" },
  { id: 7, name: "Lando Norris", team: "McLaren" },
  { id: 8, name: "Oscar Piastri", team: "McLaren" },
  { id: 9, name: "Fernando Alonso", team: "Aston Martin" },
  { id: 10, name: "Lance Stroll", team: "Aston Martin" },
  { id: 11, name: "Pierre Gasly", team: "Alpine" },
  { id: 12, name: "Franco Colapinto", team: "Alpine" },
  { id: 13, name: "Alexander Albon", team: "Williams" },
  { id: 14, name: "Carlos Sainz", team: "Williams" },
  { id: 15, name: "Esteban Ocon", team: "Haas" },
  { id: 16, name: "Oliver Bearman", team: "Haas" },
  { id: 17, name: "Yuki Tsunoda", team: "RB" },
  { id: 18, name: "Isack Hadjar", team: "RB" },
  { id: 19, name: "Nico H\xFClkenberg", team: "Sauber" },
  { id: 20, name: "Gabriel Bortoleto", team: "Sauber" }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  drivers
});
