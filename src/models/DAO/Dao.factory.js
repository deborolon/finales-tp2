import AircraftModelClases from "./Aircraft.model.js";
import AircraftFsClases from "./Aircraft.fs.js";

class AircraftFactory {
  static create(type) {
    switch (type) {
      case "MEM":
        console.log("Persistiendo en la memoria del servidor.");
        return new AircraftModelClases();
      case "FS":
        console.log("Persistiendo en File System.");
        return new AircraftFsClases();
      default:
        console.log("Persistiendo en la memoria default.");
        return new AircraftModelClases();
    }
  }
}

export default AircraftFactory;
