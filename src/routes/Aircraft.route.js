import express from "express";
import AircraftController from "../controller/Aircraft.controller.js";
import validationMiddleware from "../middleware/validation.middleware.js";

class AircraftRoutes {
  constructor() {
    this.router = express.Router();
    this.controller = new AircraftController();
  }

  start() {
    this.router.get("/aircraft", this.controller.getAircraft);

    this.router.post("/aircraft", validationMiddleware.validateId, validationMiddleware.validateCoordinates, this.controller.postAircraft);

    this.router.delete("/aircraft/delete/:id", this.controller.deleteAircraft);

    return this.router;
  }
}

export default AircraftRoutes;
