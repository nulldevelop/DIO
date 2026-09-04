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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/routes/team.routes.ts
var team_routes_exports = {};
__export(team_routes_exports, {
  teamRoutes: () => teamRoutes
});
module.exports = __toCommonJS(team_routes_exports);

// src/data/teams.ts
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

// src/routes/team.routes.ts
function teamRoutes(app) {
  return __async(this, null, function* () {
    app.get("/teams", (_req, res) => __async(null, null, function* () {
      res.type("application/json").code(200);
      return { teams };
    }));
    app.get("/teams/:id", (req, res) => __async(null, null, function* () {
      const { id } = req.params;
      const team = teams.find((item) => item.id === parseInt(id));
      if (!team) {
        res.type("application/json").code(404);
        return { error: "Team not found" };
      }
      res.type("application/json").code(200);
      return { team };
    }));
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  teamRoutes
});
