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

// src/data/teams.ts
var teams_exports = {};
__export(teams_exports, {
  teams: () => teams
});
module.exports = __toCommonJS(teams_exports);
var teams = [
  { id: 1, name: "Ferrari", base: "Italy" },
  { id: 2, name: "Mercedes", base: "England" },
  { id: 3, name: "Red Bull Racing", base: "Austria" },
  { id: 4, name: "McLaren", base: "England" },
  { id: 5, name: "Aston Martin", base: "England" },
  { id: 6, name: "Alpine", base: "France" },
  { id: 7, name: "Williams", base: "England" },
  { id: 8, name: "Haas", base: "United States" },
  { id: 9, name: "RB", base: "Italy" },
  { id: 10, name: "Sauber", base: "Switzerland" }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  teams
});
