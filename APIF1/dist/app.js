"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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

// src/app.ts
var app_exports = {};
__export(app_exports, {
  app: () => app
});
module.exports = __toCommonJS(app_exports);
var import_fastify = __toESM(require("fastify"));
var import_cors = __toESM(require("@fastify/cors"));

// src/data/drivers.ts
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

// src/routes/driver.routes.ts
function driverRoutes(app2) {
  return __async(this, null, function* () {
    app2.get("/drivers", (_req, res) => __async(null, null, function* () {
      res.type("application/json").code(200);
      return { drivers };
    }));
    app2.get("/drivers/:id", (req, res) => __async(null, null, function* () {
      const { id } = req.params;
      const driver = drivers.find((item) => item.id === parseInt(id));
      if (!driver) {
        res.type("application/json").code(404);
        return { error: "Driver not found" };
      }
      res.type("application/json").code(200);
      return { driver };
    }));
  });
}

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
function teamRoutes(app2) {
  return __async(this, null, function* () {
    app2.get("/teams", (_req, res) => __async(null, null, function* () {
      res.type("application/json").code(200);
      return { teams };
    }));
    app2.get("/teams/:id", (req, res) => __async(null, null, function* () {
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

// src/app.ts
var app = (0, import_fastify.default)({ logger: true, exposeHeadRoutes: false });
app.register(import_cors.default, { methods: ["GET"] });
app.register(teamRoutes);
app.register(driverRoutes);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  app
});
